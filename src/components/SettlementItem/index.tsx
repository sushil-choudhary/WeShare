import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/themeProvider';
import { SettlementItemType } from '../../utils/interface';
import { createSettlementStyles } from './styles';

interface SettlementItemProps {
  item: SettlementItemType;
  onPress: (item: SettlementItemType) => void;
}

const SettlementItem: React.FC<SettlementItemProps> = ({ item, onPress }) => {
  const { colors } = useTheme();
  const styles = createSettlementStyles(colors);

  const isYouPaying = item.from === 'You';

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => onPress(item)} style={styles.container}>
      <View>
        <Text style={styles.title}>
          {item.from} owes {item.to}
        </Text>
        <Text style={styles.subtitle}>Tap to mark as settled</Text>
      </View>

      <Text style={[styles.amount, { color: isYouPaying ? colors.danger : colors.success }]}>
        ₹{item.amount}
      </Text>
    </TouchableOpacity>
  );
};

export default SettlementItem;
