import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';


export const createAddExpenseStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SPACING.lg,
      backgroundColor: colors.BG,
    },
    title: {
      fontSize: FONT_SIZE.xl,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
      marginBottom: SPACING.md,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: SPACING.md,
      padding: SPACING.md,
      marginBottom: SPACING.md,
      fontSize: FONT_SIZE.md,
      color: colors.textPrimary,
    },
    label: {
      color: colors.textSecondary,
      marginBottom: SPACING.xs,
    },
    optionContainer: {
      flexDirection: 'row',
      marginBottom: SPACING.md,
    },
    optionButton: {
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.lg,
      marginRight: SPACING.sm,
    },
    optionText: {
      fontSize: FONT_SIZE.md,
    },
  });
