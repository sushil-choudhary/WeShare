import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import FriendsScreen from '../screens/Friends/FriendsScreen';
import ActivityScreen from '../screens/Activity/ActivityScreen';
import AccountScreen from '../screens/Account/AccountScreen';
// import AddScreen from '../screens/Add/AddScreen';

import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomBottomTab {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={FriendsScreen} />
      <Tab.Screen name="Add" component={AccountScreen} />
      <Tab.Screen name="Transactions" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={AccountScreen} />
    </Tab.Navigator>
  );
}
