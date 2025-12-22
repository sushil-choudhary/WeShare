import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTheme } from '../theme/themeProvider';
import AppCard from '../components/common/AppCard';
import PrimaryButton from '../components/common/PrimaryButton';
import { createBalancesStyles } from './BalancesScreen.styles';

const balances = [
  { id: 1, user: 'Alice', amount: -500 },
  { id: 2, user: 'Bob', amount: 1200 },
  { id: 3, user: 'Charlie', amount: -700 },
];

const BalancesScreen = () => {
  const { colors } = useTheme();
  const styles = createBalancesStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balances</Text>

      <FlatList
        data={balances}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isPositive = item.amount >= 0;
          return (
            <AppCard>
              <Text style={styles.balanceText}>{item.user}</Text>
              <Text
                style={{
                  ...styles.balanceText,
                  color: isPositive ? colors.success : colors.danger,
                }}
              >
                {isPositive ? `You get ₹${item.amount}` : `You owe ₹${Math.abs(item.amount)}`}
              </Text>
              <PrimaryButton
                title="Settle Up"
                onPress={() => console.log(`Settle ${item.user}`)}
                style={{ marginTop: 12 }}
              />
            </AppCard>
          );
        }}
      />
    </View>
  );
};

export default BalancesScreen;
