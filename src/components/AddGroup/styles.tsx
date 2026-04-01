import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createGroupStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    contentContainer: {
      padding: SPACING.lg,
      paddingBottom: SPACING.xxxl,
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
    memberInputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: SPACING.sm,
      marginBottom: SPACING.md,
    },
    memberInput: {
      flex: 1,
      marginBottom: 0,
    },
    addButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: SPACING.lg,
      paddingVertical: SPACING.md,
      borderRadius: SPACING.md,
    },
    addButtonText: {
      color: colors.card,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
    },
    memberWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: SPACING.sm,
    },
    memberChip: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.divider,
      borderRadius: SPACING.xl,
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.md,
      gap: SPACING.sm,
    },
    memberChipText: {
      color: colors.textPrimary,
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
    },
    removeText: {
      color: colors.danger,
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.bold,
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
