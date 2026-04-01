import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTheme } from '../../theme/themeProvider';
import { createActivityStyles } from './styles';
import { SPACING } from '../../utils/spacing';
import { SafeAreaView } from 'react-native-safe-area-context';

const activities = [
  { id: 1, type: 'expense', description: 'Hotel ₹1200 paid by Alice', time: '2h ago' },
  { id: 2, type: 'settlement', description: 'Bob settled ₹500', time: '1h ago' },
];

const ActivityScreen = () => {
  const { colors } = useTheme();
  const styles = createActivityStyles(colors);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text style={styles.title}>Activity</Text>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderRadius: SPACING.sm, marginVertical: SPACING.lg }}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.timestamp}>{item.time}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ActivityScreen;
