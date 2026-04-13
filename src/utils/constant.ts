export const Preferences = [
  { label: 'Language', icon: 'language-outline' },
  { label: 'Dark Mode', icon: 'moon-outline' },
  { label: 'Notifications', icon: 'notifications-outline' },
  { label: 'Default Split Method', icon: 'git-compare-outline' },
  { label: 'Default Currency', icon: 'cash-outline' },
];

export const Account = [
  { label: 'Personal Details', icon: 'person-outline' },
  { label: 'Change Password', icon: 'key-outline' },
  { label: 'Privacy Settings', icon: 'lock-closed-outline' },
];

export const Records = [
  { label: 'All Transactions', icon: 'swap-horizontal-outline' },
  { label: 'Activity History', icon: 'time-outline' },
  { label: 'Download Statements / Export Data', icon: 'download-outline' },
];

export const Support = [
  { label: 'Contact Us', icon: 'call-outline' },
  { label: 'Help / FAQs', icon: 'help-circle-outline' },
  { label: 'Terms & Conditions', icon: 'document-text-outline' },
  { label: 'Privacy Policy', icon: 'shield-checkmark-outline' },
  { label: 'About App', icon: 'information-circle-outline' },
  { label: 'App Version', icon: 'apps-outline' },
];

export const Actions = [
  { label: 'Logout', icon: 'log-out-outline' },
  { label: 'Delete Account', icon: 'trash-outline' },
];

export const STORAGE_KEYS = {
  AUTH: 'auth_data',
};

export const TENANT_ID = 'X-CW-Tenant-Id';
export const AUTHORIZATION = 'Authorization';

export const MESSAGE_SEVERITIES = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};

export const SLICE = {
  LOGIN: 'loginSlice',
  AUTH: 'auth',
  USER: 'user',
  CLIENTS: 'clients',
  DIET_DATA: 'dietData',
  ASSESMENTS: 'assesments',
  APP: 'app',
  HOME: 'home',
  WORKOUT: 'workout',
};

export const ROUTES = {
  SPLASH: 'SplashScreen',
  LOGIN: 'Login',
};
