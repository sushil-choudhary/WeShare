import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../theme/themeProvider';
import { ExpenseItem } from '../../utils/interface';
import { createExpenseItemStyles } from './styles';

interface GroupExpenseItemProps {
  item: ExpenseItem;
}

const getExpenseIcon = (category: ExpenseItem['category']) => {
  switch (category) {
    case 'food':
      return 'restaurant-outline';
    case 'travel':
      return 'car-outline';
    case 'hotel':
      return 'bed-outline';
    case 'shopping':
      return 'cart-outline';
    default:
      return 'receipt-outline';
  }
};

const GroupExpenseItem: React.FC<GroupExpenseItemProps> = ({ item }) => {
  const { colors } = useTheme();
  const styles = createExpenseItemStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconWrap}>
          <Icon name={getExpenseIcon(item.category)} size={20} color={colors.primary} />
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.subtitle}>
            Paid by {item.paidBy} • {item.date}
          </Text>
        </View>
      </View>

      <Text style={styles.amount}>₹{item.amount}</Text>
    </View>
  );
};

export default GroupExpenseItem;
