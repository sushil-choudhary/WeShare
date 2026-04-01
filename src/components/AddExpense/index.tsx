import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createAddExpenseStyles } from './styles';
import { COLORS } from '../../theme/color';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['Food', 'Travel', 'Stay', 'Shopping', 'Bills', 'Other'];
const splitTypes = ['Equal', 'Unequal', 'Percentage', 'Shares'];
const membersList = ['You', 'Rahul', 'Priya', 'Aman'];

const AddExpenseScreen = () => {
  const colors = COLORS;
  const styles = createAddExpenseStyles(colors);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [paidBy, setPaidBy] = useState('You');
  const [date, setDate] = useState('30 Mar 2026');
  const [splitType, setSplitType] = useState('Equal');
  const [selectedMembers, setSelectedMembers] = useState<string[]>(membersList);
  const [notes, setNotes] = useState('');

  const totalAmount = Number(amount) || 0;

  const equalAmount = useMemo(() => {
    if (!selectedMembers.length || !totalAmount) return 0;
    return totalAmount / selectedMembers.length;
  }, [selectedMembers, totalAmount]);

  const toggleMember = (member: string) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((item) => item !== member));
      return;
    }

    setSelectedMembers([...selectedMembers, member]);
  };

  const handleSaveExpense = () => {
    const payload = {
      title,
      amount,
      category,
      paidBy,
      date,
      splitType,
      selectedMembers,
      notes,
    };

    console.log('Add Expense Payload:', payload);
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <Text style={styles.subtitle}>Record and split group spending</Text>
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.label}>Expense Title</Text>
          <TextInput
            placeholder="e.g. Dinner"
            placeholderTextColor={colors.muted}
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            placeholder="₹0.00"
            placeholderTextColor={colors.muted}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            style={[styles.input, styles.amountInput]}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.optionWrap}>
            {categories.map((item) => {
              const isSelected = category === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => setCategory(item)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Paid By</Text>
          <View style={styles.optionWrap}>
            {membersList.map((member) => {
              const isSelected = paidBy === member;
              return (
                <TouchableOpacity
                  key={member}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => setPaidBy(member)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {member}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            placeholder="Date"
            placeholderTextColor={colors.muted}
            value={date}
            onChangeText={setDate}
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Split Between</Text>
          <View style={styles.memberWrap}>
            {membersList.map((member) => {
              const isSelected = selectedMembers.includes(member);
              return (
                <TouchableOpacity
                  key={member}
                  style={[styles.memberChip, isSelected && styles.memberChipSelected]}
                  onPress={() => toggleMember(member)}
                >
                  <Text
                    style={[styles.memberChipText, isSelected && styles.memberChipTextSelected]}
                  >
                    {member}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Split Type</Text>
          <View style={styles.optionWrap}>
            {splitTypes.map((type) => {
              const isSelected = splitType === type;
              return (
                <TouchableOpacity
                  key={type}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => setSplitType(type)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {splitType === 'Equal' && (
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Split Summary</Text>
            <Text style={styles.summaryText}>Each person pays ₹{equalAmount.toFixed(2)}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            placeholder="Add details..."
            placeholderTextColor={colors.muted}
            value={notes}
            onChangeText={setNotes}
            style={[styles.input, styles.notesInput]}
            multiline
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.primaryButton} onPress={handleSaveExpense}>
        <Text style={styles.primaryButtonText}>Save Expense</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddExpenseScreen;
