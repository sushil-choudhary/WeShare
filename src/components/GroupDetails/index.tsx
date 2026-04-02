import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../theme/themeProvider';
import { createGroupDetailsStyles } from './styles';
import { ExpenseItem, GroupDetailsData, SettlementItemType } from '../../utils/interface';
import SettlementItem from '../SettlementItem';
import GroupExpenseItem from '../GroupExpenseItem';
import ContributionItem from '../ContributionItem';
import { SafeAreaView } from 'react-native-safe-area-context';


interface GroupDetailsScreenProps {
  navigation: any;
  route: {
    params: {
      group: GroupDetailsData;
    };
  };
}

const FILTERS = ['All', 'Food', 'Travel', 'Hotel', 'Shopping', 'Paid by You'];

const GroupDetailsScreen: React.FC<GroupDetailsScreenProps> = ({ navigation, route }) => {
  const { colors } = useTheme();
  const styles = createGroupDetailsStyles(colors);

  const { group } = route.params;

  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [isExpenseModalVisible, setExpenseModalVisible] = useState(false);
  const [isSettleModalVisible, setSettleModalVisible] = useState(false);
  const [selectedSettlement, setSelectedSettlement] = useState<SettlementItemType | null>(null);

  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('food');

  const filteredExpenses = useMemo(() => {
    if (selectedFilter === 'All') {
      return group.expenses;
    }

    if (selectedFilter === 'Paid by You') {
      return group.expenses.filter((item) => item.paidBy === 'You');
    }

    return group.expenses.filter(
      (item) => item.category.toLowerCase() === selectedFilter.toLowerCase(),
    );
  }, [group.expenses, selectedFilter]);

  const handleSettlementPress = (item: SettlementItemType) => {
    setSelectedSettlement(item);
    setSettleModalVisible(true);
  };

  const handleAddExpense = () => {
    setExpenseModalVisible(false);
    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseCategory('food');
  };

  const handleConfirmSettlement = () => {
    setSettleModalVisible(false);
    setSelectedSettlement(null);
  };

  const isPositive = group.summary.netBalance >= 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.85}
        >
          <Icon name="chevron-back" size={22} color={colors.textPrimary} />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>{group.title}</Text>
          <Text style={styles.subtitle}>{group.members.length} members</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.summaryCard}>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Expense</Text>
              <Text style={styles.summaryAmount}>₹{group.summary.totalExpense}</Text>
            </View>

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>You Paid</Text>
              <Text style={styles.summaryAmount}>₹{group.summary.yourPaid}</Text>
            </View>

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Your Share</Text>
              <Text style={styles.summaryAmount}>₹{group.summary.yourShare}</Text>
            </View>

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{isPositive ? 'You Get' : 'You Owe'}</Text>
              <Text
                style={[
                  styles.summaryAmount,
                  { color: isPositive ? colors.success : colors.danger },
                ]}
              >
                ₹{Math.abs(group.summary.netBalance)}
              </Text>
            </View>
          </View>
        </View>

        {/* Who Owes Whom */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Who Owes Whom</Text>
          {group.settlements.map((item) => (
            <SettlementItem key={item.id} item={item} onPress={handleSettlementPress} />
          ))}
        </View>

        {/* Members */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Members</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.memberList}
          >
            {group.members.map((member) => (
              <View key={member.id} style={styles.memberCard}>
                <Image source={{ uri: member.avatar }} style={styles.memberAvatar} />
                <Text numberOfLines={1} style={styles.memberName}>
                  {member.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Filters */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Expenses</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterWrap}
          >
            {FILTERS.map((filter) => {
              const isSelected = selectedFilter === filter;
              return (
                <TouchableOpacity
                  key={filter}
                  activeOpacity={0.85}
                  onPress={() => setSelectedFilter(filter)}
                  style={[styles.filterChip, isSelected && styles.filterChipSelected]}
                >
                  <Text
                    style={[styles.filterChipText, isSelected && styles.filterChipTextSelected]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {filteredExpenses.length > 0 ? (
            <FlatList
              data={filteredExpenses}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => <GroupExpenseItem item={item} />}
            />
          ) : (
            <View style={styles.emptyState}>
              <Icon name="receipt-outline" size={48} color={colors.textSecondary} />
              <Text style={styles.emptyTitle}>No expenses found</Text>
              <Text style={styles.emptySubtitle}>Start by adding your first group expense.</Text>
            </View>
          )}
        </View>

        {/* Contribution Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Member Contribution</Text>

          {group.contributions.map((item) => (
            <ContributionItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.85}
          onPress={() => setExpenseModalVisible(true)}
        >
          <Icon name="add-outline" size={18} color={colors.primary} />
          <Text style={styles.secondaryButtonText}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.85}
          onPress={() => {
            if (group.settlements.length > 0) {
              handleSettlementPress(group.settlements[0]);
            }
          }}
        >
          <Text style={styles.primaryButtonText}>Settle Up</Text>
        </TouchableOpacity>
      </View>

      {/* Add Expense Bottom Sheet */}
      <Modal
        visible={isExpenseModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setExpenseModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <View style={styles.sheetHandle} />
            <Text style={styles.modalTitle}>Add Expense</Text>

            <TextInput
              placeholder="Expense title"
              placeholderTextColor={colors.textSecondary}
              value={expenseTitle}
              onChangeText={setExpenseTitle}
              style={styles.input}
            />

            <TextInput
              placeholder="Amount"
              placeholderTextColor={colors.textSecondary}
              value={expenseAmount}
              onChangeText={setExpenseAmount}
              keyboardType="numeric"
              style={styles.input}
            />

            <Text style={styles.fieldLabel}>Category</Text>
            <View style={styles.categoryWrap}>
              {['food', 'travel', 'hotel', 'shopping', 'other'].map((cat) => {
                const isSelected = expenseCategory === cat;
                return (
                  <TouchableOpacity
                    key={cat}
                    activeOpacity={0.85}
                    onPress={() => setExpenseCategory(cat)}
                    style={[styles.categoryChip, isSelected && styles.categoryChipSelected]}
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        isSelected && styles.categoryChipTextSelected,
                      ]}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.modalActionRow}>
              <TouchableOpacity
                style={styles.modalSecondaryButton}
                onPress={() => setExpenseModalVisible(false)}
              >
                <Text style={styles.modalSecondaryButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalPrimaryButton} onPress={handleAddExpense}>
                <Text style={styles.modalPrimaryButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Settle Up Modal */}
      <Modal
        visible={isSettleModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSettleModalVisible(false)}
      >
        <View style={styles.modalOverlayCenter}>
          <View style={styles.confirmModal}>
            <Text style={styles.modalTitle}>Settle Up</Text>

            <Text style={styles.confirmText}>Mark this payment as settled?</Text>

            {selectedSettlement && (
              <Text style={styles.confirmSubText}>
                {selectedSettlement.from} paid {selectedSettlement.to} ₹{selectedSettlement.amount}
              </Text>
            )}

            <View style={styles.modalActionRow}>
              <TouchableOpacity
                style={styles.modalSecondaryButton}
                onPress={() => setSettleModalVisible(false)}
              >
                <Text style={styles.modalSecondaryButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalPrimaryButton} onPress={handleConfirmSettlement}>
                <Text style={styles.modalPrimaryButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default GroupDetailsScreen;
