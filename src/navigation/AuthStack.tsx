import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Register from '../screens/auth/Register';
import Login from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}
