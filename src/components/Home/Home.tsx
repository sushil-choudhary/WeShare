import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { useTheme } from '../../theme/themeProvider';
import { createHomeStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ExpenseGroupCard from '../../common/Groups/Group';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const groups = [
  {
    id: '1',
    title: 'Goa Trip 🏖',
    members: 4,
    balance: -500,
    avatars: [
      'https://i.pravatar.cc/100?img=1',
      'https://i.pravatar.cc/100?img=2',
      'https://i.pravatar.cc/100?img=3',
    ],
  },
  {
    id: '2',
    title: 'Flat Rent 🏠',
    members: 3,
    balance: 2200,
    avatars: [
      'https://i.pravatar.cc/100?img=4',
      'https://i.pravatar.cc/100?img=5',
      'https://i.pravatar.cc/100?img=6',
    ],
  },
];

const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Notifications')}
          style={styles.notificationBtn}
        >
          <Text style={styles.notificationIcon}>🔔</Text>
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* 🔹 Balance Card */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.balanceCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$3,257.00</Text>
        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.smallLabel}>Income</Text>
            <Text style={styles.smallAmount}>$2,350.00</Text>
          </View>
          <View>
            <Text style={styles.smallLabel}>Expenses</Text>
            <Text style={styles.smallAmount}>$950.00</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Groups</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          // <ExpenseGroupCard
          //   title={item.title}
          //   members={item.members}
          //   balance={item.balance}
          //   avatars={item.avatars}
          //   // onPress={() =>
          //   //   navigation.navigate('GroupDetails', {
          //   //     groupId: item.id,
          //   //   })
          //   // }
          // />
          <ExpenseGroupCard
            title="Goa Trip"
            members={4}
            balance={1200}
            avatars={[
              'https://i.pravatar.cc/150?img=1',
              'https://i.pravatar.cc/150?img=2',
              'https://i.pravatar.cc/150?img=3',
            ]}
            onPress={() =>
              navigation.navigate('GroupDetails', {
                group: {
                  id: '1',
                  title: 'Goa Trip',
                  members: [
                    { id: '1', name: 'You', avatar: 'https://i.pravatar.cc/150?img=1' },
                    { id: '2', name: 'Aman', avatar: 'https://i.pravatar.cc/150?img=2' },
                    { id: '3', name: 'Neha', avatar: 'https://i.pravatar.cc/150?img=3' },
                    { id: '4', name: 'Rohit', avatar: 'https://i.pravatar.cc/150?img=4' },
                  ],
                  summary: {
                    totalExpense: 5400,
                    yourPaid: 2200,
                    yourShare: 1350,
                    netBalance: 850,
                  },
                  settlements: [
                    { id: '1', from: 'Aman', to: 'You', amount: 300 },
                    { id: '2', from: 'You', to: 'Neha', amount: 500 },
                    { id: '3', from: 'Rohit', to: 'Aman', amount: 200 },
                  ],
                  expenses: [
                    {
                      id: '1',
                      title: 'Dinner',
                      amount: 1200,
                      paidBy: 'You',
                      date: '29 Mar',
                      category: 'food',
                    },
                    {
                      id: '2',
                      title: 'Cab Fare',
                      amount: 800,
                      paidBy: 'Aman',
                      date: '30 Mar',
                      category: 'travel',
                    },
                    {
                      id: '3',
                      title: 'Hotel Booking',
                      amount: 3400,
                      paidBy: 'Neha',
                      date: '31 Mar',
                      category: 'hotel',
                    },
                  ],
                  contributions: [
                    {
                      id: '1',
                      name: 'You',
                      avatar: 'https://i.pravatar.cc/150?img=1',
                      paid: 2200,
                      share: 1350,
                      balance: 850,
                    },
                    {
                      id: '2',
                      name: 'Aman',
                      avatar: 'https://i.pravatar.cc/150?img=2',
                      paid: 800,
                      share: 1350,
                      balance: -550,
                    },
                    {
                      id: '3',
                      name: 'Neha',
                      avatar: 'https://i.pravatar.cc/150?img=3',
                      paid: 3400,
                      share: 1350,
                      balance: 2050,
                    },
                    {
                      id: '4',
                      name: 'Rohit',
                      avatar: 'https://i.pravatar.cc/150?img=4',
                      paid: 0,
                      share: 1350,
                      balance: -1350,
                    },
                  ],
                },
              })
            }

          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
