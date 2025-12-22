import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { moderateScale } from '../../../utils/responsive';
import { useTheme } from '../../../theme/themeProvider';
import { createHomeStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Transaction {
  id: number;
  name: string;
  time: string;
  amount: number;
  icon: any; // require or URL
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Money Transfer',
    time: '12:35 PM',
    amount: -450,
    icon: '',
  },
  {
    id: 2,
    name: 'Paypal',
    time: '10:20 AM',
    amount: 1200,
    icon: '',
  },
  {
    id: 3,
    name: 'Uber',
    time: '08:40 AM',
    amount: -150,
    icon: '',
  },
  {
    id: 4,
    name: 'Bata Store',
    time: 'Yesterday',
    amount: -200,
    icon: '',
  },
];

const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const renderTransaction = ({ item }: { item: Transaction }) => {
    const isPositive = item.amount >= 0;
    return (
      <View style={styles.transactionItem}>
        <Image source={item.icon} style={styles.transactionIcon} />
        <View style={{ flex: 1, marginLeft: moderateScale(12) }}>
          <Text style={styles.transactionName}>{item.name}</Text>
          <Text style={styles.transactionTime}>{item.time}</Text>
        </View>
        <Text
          style={[styles.transactionAmount, { color: isPositive ? colors.success : colors.danger }]}
        >
          {isPositive ? `+${item.amount}` : `${item.amount}`}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Text style={styles.notification}>🔔</Text>
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
        <Text style={styles.transactionTitle}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransaction}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: moderateScale(100) }}
      />
    </View>
  );
};

export default HomeScreen;
