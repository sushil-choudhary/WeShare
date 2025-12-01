import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'WE_SHARE_TOKEN';

export const saveToken = async (token?: string) => {
  if (!token) return AsyncStorage.removeItem(TOKEN_KEY);
  return AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => AsyncStorage.getItem(TOKEN_KEY);

export const clearAll = async () => AsyncStorage.clear();
