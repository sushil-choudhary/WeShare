// App.tsx
import 'react-native-gesture-handler';
import React, { JSX } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import './src/i18n';
import { store } from './redux/store';
import RootNavigator from './navigation/RootNavigator';

// Optional: silence some non-actionable warnings while developing
LogBox.ignoreLogs([
  'Warning: ...', // add warnings you want to ignore
]);

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
