/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { saveToken } from '../../utils/storage';
import api from '../../api/axiosClient';
import { LoginPayload, RegisterPayload } from '../../types/auth.type';
import { APIS } from '../../api/endpoints';
import configurationSetting, { post, setAxiosBase } from '../../api/axiosInstance';
import asyncStorage from '../../api/asyncStorage';
import Config from 'react-native-config';
import { get } from 'lodash';

interface AuthState {
  token: string | null;
  loading: boolean;
  error?: string | null;
  isLoggedIn?: boolean;
}

const initialState: AuthState = { token: null, loading: false, error: null };

export const setBasics = (data: { accountId: any }) => {
  setAxiosBase({
    'X-CW-Tenant-Id': data.accountId,
  });
  asyncStorage.setToken(data);
  //   store.dispatch(
  //     authAction({
  //       accountId: data.accountId,
  //     }),
  //   );
  //   if (!isEmpty(data.accountId)) {
  //     store.dispatch(introspectCall());
  //   }
};

export const loginCall = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await post(APIS.LOGIN, payload);
      console.log('data', data);
      await asyncStorage.setToken(data);
      dispatch(updateAuth({ accessToken: data.data.accessToken, isLoggedIn: true }));
      configurationSetting();
      await setAxiosBase({
        baseURL: Config.API_BASE_URL || 'https://splitwisebackend-production.up.railway.app/',
        // baseURL: 'https://api.yrpal.com',
        Authorization: `Bearer ${data.data.accessToken}`,
      });
      // await setBlobBase({
      //   baseURL: Config.API_BASE_URL,
      //   tenantId: data.accountId,
      // });
      // showSuccessToast('loginSuccess');
      return data;
    } catch (err: any) {
      const error = get(err, 'response.data.error', '');
      // showErrorToast('loginFailed', error);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const registerCall1 = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload, { rejectWithValue, dispatch }) => {
    try {
      console.log('payload2121', payload);
      const { data } = await post(APIS.REGISTER, payload);
      console.log('registerCall1', data);
      await asyncStorage.setToken(data.data);
      dispatch(updateAuth({ accessToken: data.data.accessToken, isLoggedIn: true }));
      configurationSetting();
      await setAxiosBase({
        baseURL: Config.API_BASE_URL || 'https://splitwisebackend-production.up.railway.app/',
        // baseURL: 'https://api.yrpal.com',
        Authorization: `Bearer ${data.data.accessToken}`,
      });
      // await setBlobBase({
      //   baseURL: Config.API_BASE_URL,
      //   tenantId: data.accountId,
      // });
      // showSuccessToast('loginSuccess');
      return data;
    } catch (err: any) {
      console.log('err', err);
      const error = get(err, 'response.data.error', '');
      // showErrorToast('loginFailed', error);
      return rejectWithValue(error.response?.data);
    }
  },
);

export const login = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
  const res = await api.post(APIS.LOGIN, payload);
  console.log('loginres', res);
  // const token = res.data?.token;
  // if (token) await saveToken(token);
  return;
});

export const registerUserCall = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload) => {
    console.log('payload', payload);
    const res = await api.post(APIS.REGISTER, payload);
    console.log('res', res);
    // const token = res.data?.token;
    // if (token) await saveToken(token);
    return;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await saveToken(undefined);
});

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<{ accessToken: string; isLoggedIn: boolean }>) => {
      state.token = action.payload.accessToken;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.token = a.payload ?? null;
        s.loading = false;
      })
      .addCase(login.rejected, (s, a) => {
        s.loading = false;
        s.error = a.error.message;
      })
      .addCase(logout.fulfilled, (s) => {
        s.token = null;
      });
  },
});

export const { setToken, updateAuth } = slice.actions;
export default slice.reducer;
