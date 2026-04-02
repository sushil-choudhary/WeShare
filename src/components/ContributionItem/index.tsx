import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '../../theme/themeProvider';
import { ContributionItemType } from '../../utils/interface';
import { createContributionStyles } from './styles';

interface ContributionItemProps {
  item: ContributionItemType;
}

const ContributionItem: React.FC<ContributionItemProps> = ({ item }) => {
  const { colors } = useTheme();
  const styles = createContributionStyles(colors);

  const isPositive = item.balance >= 0;

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.meta}>Paid ₹{item.paid}</Text>
        <Text style={styles.meta}>Share ₹{item.share}</Text>
        <Text style={[styles.balance, { color: isPositive ? colors.success : colors.danger }]}>
          {isPositive ? '+' : '-'}₹{Math.abs(item.balance)}
        </Text>
      </View>
    </View>
  );
};

export default ContributionItem;
