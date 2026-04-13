// App.tsx
import 'react-native-gesture-handler';
import React, { JSX, useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import './src/i18n';
import { store } from './redux/store';
import RootNavigator from './navigation/RootNavigator';
import { ThemeProvider, useTheme } from './theme/themeProvider';
import { setAxiosBase } from './api/axiosInstance';
import Config from 'react-native-config';

// Optional: silence some non-actionable warnings while developing
LogBox.ignoreLogs([
  'Warning: ...', // add warnings you want to ignore
]);
const AppContent = () => {
  const { theme, colors } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.BG}
      />
      <RootNavigator />
    </>
  );
};

console.log('Config.API_BASE_URL', Config.API_BASE_URL);
export default function App(): JSX.Element {
  useEffect(() => {
    setAxiosBase({
      baseURL: Config.API_BASE_URL || 'https://splitwisebackend-production.up.railway.app/',
    });

    // setAxiosBase({ baseURL: 'https://api.yrpal.com' });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
