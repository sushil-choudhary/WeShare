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
          <ExpenseGroupCard
            title={item.title}
            members={item.members}
            balance={item.balance}
            avatars={item.avatars}
            // onPress={() =>
            //   navigation.navigate('GroupDetails', {
            //     groupId: item.id,
            //   })
            // }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
