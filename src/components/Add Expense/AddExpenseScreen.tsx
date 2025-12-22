import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/themeProvider';
import PrimaryButton from '../components/common/PrimaryButton';
import AppCard from '../components/common/AppCard';
import { createAddExpenseStyles } from './AddExpenseScreen.styles';

const users = ['Alice', 'Bob', 'Charlie'];

const AddExpenseScreen = () => {
  const { colors } = useTheme();
  const styles = createAddExpenseStyles(colors);

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [paidBy, setPaidBy] = useState(users[0]);
  const [splitType, setSplitType] = useState<'Equal' | 'Unequal'>('Equal');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>

      <TextInput
        placeholder="Amount"
        placeholderTextColor={colors.textSecondary}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        placeholderTextColor={colors.textSecondary}
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Text style={styles.label}>Paid By</Text>
      <FlatList
        data={users}
        horizontal
        keyExtractor={(item) => item}
        contentContainerStyle={styles.optionContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setPaidBy(item)}
            style={[
              styles.optionButton,
              { backgroundColor: paidBy === item ? colors.primary : colors.card },
            ]}
          >
            <Text
              style={[styles.optionText, { color: paidBy === item ? '#fff' : colors.textPrimary }]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.label}>Split Type</Text>
      <View style={styles.optionContainer}>
        {['Equal', 'Unequal'].map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setSplitType(type as 'Equal' | 'Unequal')}
            style={[
              styles.optionButton,
              { backgroundColor: splitType === type ? colors.primary : colors.card },
            ]}
          >
            <Text
              style={[
                styles.optionText,
                { color: splitType === type ? '#fff' : colors.textPrimary },
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <PrimaryButton
        title="Add Expense"
        onPress={() => console.log({ amount, description, paidBy, splitType })}
      />
    </View>
  );
};

export default AddExpenseScreen;
