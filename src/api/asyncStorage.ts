/* eslint-disable @typescript-eslint/no-explicit-any */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../utils/constant';

export default {
  setToken: async (data: any) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving token', error);
    }
  },

  getAccessToken: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.AUTH);
      return jsonValue != null ? JSON.parse(jsonValue) : {};
    } catch (error) {
      console.error('Error retrieving token', error);
      return {};
    }
  },

  clearToken: async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.AUTH);
    } catch (error) {
      console.error('Error clearing token', error);
    }
  },
};
