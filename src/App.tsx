// App.tsx
import 'react-native-gesture-handler';
import React, { JSX } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import './src/i18n';
import { store } from './redux/store';
import RootNavigator from './navigation/RootNavigator';
import { ThemeProvider, useTheme } from './theme/themeProvider';

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
        backgroundColor={colors.bg}
      />
      <RootNavigator />
    </>
  );
};
export default function App(): JSX.Element {
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
