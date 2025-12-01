import axios from 'axios';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL ?? 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  try {
    const { getToken } = await import('../utils/storage');
    const token = await getToken();

    if (token) {
      // Axios v1+ requires proper setting
      config.headers = config.headers || {};
      config.headers.set?.('Authorization', `Bearer ${token}`);
    }
  } catch (err) {
    console.log(err);
  }

  return config;
});

export default api;
