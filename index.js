/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import configurationSetting from './src/api/axiosInstance';
import { store } from './src/redux/store';

configurationSetting(store);

AppRegistry.registerComponent(appName, () => App);
