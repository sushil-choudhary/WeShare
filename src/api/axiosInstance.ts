/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { isEmpty } from 'lodash';
import { trimmer } from '../utils/helpers';
import { setBasics } from '../redux/slices/authSlice';
import { AUTHORIZATION } from '../utils/constant';
import { APIS } from './endpoints';
import asyncStorage from './asyncStorage';

// Augment AxiosRequestConfig to carry a retry flag
declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

let axiosInstance: AxiosInstance | null = null;

type AuthData = { accessToken?: string; refresh_token?: string; client_id?: string } | null;
let authCache: AuthData = null;

let isRefreshing = false;
type QueueItem = { resolve: (token: string) => void; reject: (err: any) => void };
let failedQueue: QueueItem[] = [];

const processQueue = (error: any, token: string | null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else if (token) p.resolve(token);
    else p.reject(new Error('No token'));
  });
  failedQueue = [];
};

const setAuthDefaults = (token?: string) => {
  if (!axiosInstance) return;
  if (token) {
    axiosInstance.defaults.headers.common[AUTHORIZATION] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common[AUTHORIZATION];
  }
};

const configurationSetting = async () => {
  axiosInstance = axios.create();
  const stored = await asyncStorage.getAccessToken();
  authCache = stored && typeof stored === 'object' ? stored : null;
  if (authCache?.accessToken) {
    setAuthDefaults(authCache.accessToken);
  }
  setupInterceptors();
};

const setAxiosBase = async (config: any) => {
  console.log('config', config);
  if (!axiosInstance) {
    axiosInstance = axios.create();
  }
  if (config.baseURL) {
    axiosInstance.defaults.baseURL = config.baseURL;
    axiosInstance.defaults.withCredentials = true;
  }

  if (config.Authorization) {
    axiosInstance.defaults.headers.common[AUTHORIZATION] = config.Authorization;
  }
};

const updateTimeout = (timeout: number) => {
  if (axiosInstance) {
    axiosInstance.defaults.timeout = timeout;
  }
};

async function fetch<T = any>(url: string, config: AxiosRequestConfig = {}) {
  const finalConfig = { ...config };
  const response: AxiosResponse<T> = await axiosInstance!.get(url, finalConfig);
  if (response.status >= 200 && response.status < 300) {
    return { data: response.data, status: response.status };
  }
  throw {
    isAxiosError: true,
    response,
    message: response.statusText,
    config: finalConfig,
    toJSON: () => ({}),
  } as AxiosError<T>;
}

async function post<T = any>(url: string, data: any, config: AxiosRequestConfig = {}) {
  const isFormData = data instanceof FormData;
  const baseConfig: AxiosRequestConfig = {
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...config.headers,
    },
    signal: config?.signal,
    ...config,
  };

  console.log('axiosInstance', axiosInstance);

  const response: AxiosResponse<T> = await axiosInstance!.post(url, data, baseConfig);

  console.log('response', response);

  if (response.status >= 200 && response.status < 300) {
    return { data: response.data, status: response.status, headers: response.headers };
  }

  throw {
    isAxiosError: true,
    response,
    message: response.statusText,
    config: baseConfig,
    toJSON: () => ({}),
  } as AxiosError<T>;
}

async function put<T = any>(url: string, data: any, config: AxiosRequestConfig = {}) {
  const isFormData = data instanceof FormData;
  const baseConfig = {
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...config.headers,
    },
    ...config,
  };
  const response: AxiosResponse<T> = await axiosInstance!.put(url, data, baseConfig);
  if (response.status >= 200 && response.status < 300) {
    return response.data === 403 ? {} : { data: response.data, status: response.status };
  }
  throw {
    isAxiosError: true,
    response,
    message: response.statusText,
    config: baseConfig,
    toJSON: () => ({}),
  } as AxiosError<T>;
}

async function remove<T = any>(url: string, config: AxiosRequestConfig = {}, data = {}) {
  const { headers, ...rest } = config;
  const baseConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...rest,
  };
  if (!isEmpty(data)) {
    (baseConfig as any).data = trimmer(data);
  }
  try {
    const response: AxiosResponse<T> = await axiosInstance!.delete(url, baseConfig);
    if (response.status >= 200 && response.status < 300) {
      return { status: response.status };
    }
    throw {
      isAxiosError: true,
      response,
      message: response.statusText,
      config: baseConfig,
      toJSON: () => ({}),
    } as AxiosError<T>;
  } catch (err: any) {
    console.error('API delete error', err);
    throw err;
  }
}

const setupInterceptors = () => {
  axiosInstance!.interceptors.request.use((config) => {
    const h = axios.AxiosHeaders.from(config.headers);
    const token = authCache?.accessToken;
    if (token) {
      h.set('Authorization', `Bearer ${token}`);
    }

    // config.headers = h;
    return config;
  });

  axiosInstance!.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error?.config as AxiosRequestConfig | undefined;
      const status = error?.response?.status as number | undefined;
      const code = error?.response?.data?.code as string | undefined;

      if (!originalRequest || !status) {
        return Promise.reject(error);
      }

      // Do not intercept refresh endpoint to avoid loops
      const url = (originalRequest.url || '') as string;
      if (url.includes(APIS.REFRESH)) {
        return Promise.reject(error);
      }

      // Only refresh for specific 403 codes
      const isInvalidCreds = code === 'AR51_SYS:ERR_INVALID_CREDS' || code === 'ERR_BAD_REQUEST';
      if (status === 403 && isInvalidCreds) {
        // Queue concurrent requests while a refresh is ongoing
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: (newToken: string) => {
                originalRequest.headers = {
                  ...(originalRequest.headers || {}),
                  Authorization: `Bearer ${newToken}`,
                };
                resolve(axiosInstance!(originalRequest));
              },
              reject,
            });
          });
        }

        if (originalRequest._retry) {
          return Promise.reject(error);
        }
        originalRequest._retry = true;

        const refresh_token = authCache?.refresh_token;
        const client_id = authCache?.client_id;
        if (!refresh_token || !client_id) {
          return Promise.reject(error);
        }

        isRefreshing = true;

        const refreshUrl = `${APIS.REFRESH}?grant_type=refresh_token&client_id=${client_id}&refresh_token=${refresh_token}`;

        try {
          const { data, status: refreshStatus } = await axiosInstance!.post(refreshUrl, {});
          if (refreshStatus !== 200 || !data?.accessToken) {
            processQueue(new Error('Refresh failed'), null);
            return Promise.reject(error);
          }

          setBasics({ accountId: client_id });

          const nextAuth = { ...(authCache || {}), ...data, client_id };
          authCache = nextAuth;
          await asyncStorage.setToken(nextAuth);

          setAuthDefaults(data.accessToken);

          processQueue(null, data.accessToken);

          originalRequest.headers = {
            ...(originalRequest.headers || {}),
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.accessToken}`,
            'X-CW-Tenant-Id': client_id,
          };

          return axiosInstance!(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      if (status === 403 && code === 'AR51_SYS:RESOURCE_ACCESS_DENIED') {
        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );
};

export { axiosInstance, fetch, post, put, remove, setAxiosBase, updateTimeout };
export default configurationSetting;
