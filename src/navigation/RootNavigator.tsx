/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { useAppDispatch } from '../redux/hooks';
import { introspectCall } from '../redux/slices/userSlice';
import asyncStorage from '../api/asyncStorage';
import { setAxiosBase } from '../api/axiosInstance';
import Config from 'react-native-config';
import { ActivityIndicator, DeviceEventEmitter, StyleSheet, View } from 'react-native';
import { COLORS } from '../theme/color';

export default function RootNavigator() {
  // const token = useAppSelector((s) => s.auth.token);
  const dispatch = useAppDispatch();
  // const navigation = useNavigation() as any;

  // const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const introspect = () => {
    dispatch(introspectCall())
      .unwrap()
      .then(() => {
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setIsLoading(false);
        // if (navigation.canGoBack()) {
        //   navigation?.navigate(ROUTES.LOGIN);
        // }
      });
  };

  const checkAuth = async () => {
    const authData = await asyncStorage.getAccessToken();
    console.log('authData', authData);
    await setAxiosBase({
      baseURL: Config.API_BASE_URL || 'https://splitwisebackend-production.up.railway.app/',
      // baseURL: 'https://api.yrpal.com',
      Authorization: `Bearer ${authData.accessToken}`,
    });

    if (authData?.accessToken) {
      introspect();
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    const subscription = DeviceEventEmitter.addListener('authChange', checkAuth);

    return () => {
      subscription.remove();
    };
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const t = await getToken();
  //     if (t) dispatch(setToken(t));
  //     setLoading(false);
  //   })();
  // }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={COLORS.white} />
      </View>
    );
  }
  return <NavigationContainer>{isLoggedIn ? <BottomTabs /> : <AuthStack />}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
