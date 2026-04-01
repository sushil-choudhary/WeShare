import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setToken } from '../redux/slices/authSlice';
import { getToken } from '../utils/storage';

export default function RootNavigator() {
  const token = useAppSelector((s) => s.auth.token);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const t = await getToken();
      if (t) dispatch(setToken(t));
      setLoading(false);
    })();
  }, [dispatch]);

  if (loading) return null;

  return <NavigationContainer>{!token ? <AppStack /> : <AuthStack />}</NavigationContainer>;
}
