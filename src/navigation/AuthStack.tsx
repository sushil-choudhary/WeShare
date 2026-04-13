import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Register from '../screens/auth/Register';
import Login from '../screens/Auth/LoginScreen';
import RegisterContainer from '../container/auth/RegisterContainer';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterContainer} />
      {/* <Stack.Screen name="MainTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AddExpense" component={AddExpenseContainer} />
      <Stack.Screen name="AddGroup" component={AddGroupContainer} /> */}
    </Stack.Navigator>
  );
}
