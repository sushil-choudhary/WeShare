import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { moderateScale } from '../../utils/responsive';
import { Transaction } from '../../utils/interface';
import { createBalancesStyles } from './styles';
import { useTheme } from '../../theme/themeProvider';

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

const BalancesScreen = () => {
  const { colors } = useTheme();
  const styles = createBalancesStyles(colors);
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
      <Text style={styles.title}>Balances</Text>

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

export default BalancesScreen;
