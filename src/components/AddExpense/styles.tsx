import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createAddExpenseStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      padding: SPACING.lg,
      paddingBottom: SPACING.xxxl,
    },
    contentContainer: {
      flexGrow: 1,
    },
    title: {
      fontSize: FONT_SIZE.title,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
      marginBottom: SPACING.xs,
    },
    subtitle: {
      fontSize: FONT_SIZE.md,
      color: colors.textSecondary,
      marginBottom: SPACING.xl,
    },
    section: {
      marginBottom: SPACING.lg,
    },
    label: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textSecondary,
      marginBottom: SPACING.sm,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.divider,
      backgroundColor: colors.card,
      borderRadius: SPACING.md,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.md,
      fontSize: FONT_SIZE.md,
      color: colors.textPrimary,
    },
    amountInput: {
      fontSize: FONT_SIZE.amount,
      fontWeight: FONT_WEIGHT.bold,
    },
    optionWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: SPACING.sm,
    },
    chip: {
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.xl,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    chipSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    chipText: {
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textPrimary,
    },
    chipTextSelected: {
      color: colors.card,
    },
    memberWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: SPACING.sm,
    },
    memberChip: {
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.xl,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    memberChipSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    memberChipText: {
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textPrimary,
    },
    memberChipTextSelected: {
      color: colors.card,
    },
    summaryCard: {
      backgroundColor: colors.card,
      borderRadius: SPACING.md,
      padding: SPACING.lg,
      borderWidth: 1,
      borderColor: colors.divider,
      marginBottom: SPACING.lg,
    },
    summaryTitle: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: colors.textPrimary,
      marginBottom: SPACING.sm,
    },
    summaryText: {
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.success,
    },
    notesInput: {
      minHeight: 100,
      textAlignVertical: 'top',
    },
    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: SPACING.md,
      paddingVertical: SPACING.md,
      alignItems: 'center',
      marginTop: SPACING.md,
    },
    primaryButtonText: {
      color: colors.card,
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
    },
  });
