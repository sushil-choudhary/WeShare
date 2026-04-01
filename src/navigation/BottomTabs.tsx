import React, { useState } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import CustomBottomTab from './CustomBottomTab';
import FriendsScreen from '../components/FriendsScreen/FriendsScreen';
import ActivityScreen from '../components/Activity/Activity';
import ProfileContainer from '../container/ProfileContainer';
import FabMenuContainer from '../container/FabMenuContainer';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const EmptyScreen = () => <View style={{ flex: 1 }} />;

export default function BottomTabs() {
  const [isFabVisible, setIsFabVisible] = useState(false);
  const navigation = useNavigation<any>();
  const addExpenseHandler = () => {
    setIsFabVisible(false);
    navigation.navigate('AddExpense');
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomBottomTab {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={FriendsScreen} />

        <Tab.Screen
          name="Add"
          component={EmptyScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              console.log('ADD TAB CLICKED');
              setIsFabVisible(true);
            },
          }}
        />

        <Tab.Screen name="Transactions" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileContainer} />
      </Tab.Navigator>

      <FabMenuContainer
        visible={isFabVisible}
        onClose={() => setIsFabVisible(false)}
        onAddExpense={addExpenseHandler}
        onAddGroup={() => {
          setIsFabVisible(false);
          navigation.navigate('AddGroup');
        }}
      />
    </>
  );
}
