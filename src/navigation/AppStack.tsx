import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import AddExpenseContainer from '../container/AddExpenseContainer';
import AddGroupContainer from '../container/AddGroupContainer';
import GroupDetailsScreen from '../components/GroupDetails';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="AddExpense" component={AddExpenseContainer} />
      <Stack.Screen name="AddGroup" component={AddGroupContainer} />
      <Stack.Screen
        name="GroupDetails"
        component={GroupDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}