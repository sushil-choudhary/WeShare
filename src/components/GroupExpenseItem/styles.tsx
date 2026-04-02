import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createExpenseItemStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.card,
      padding: SPACING.md,
      borderRadius: SPACING.lg,
      marginBottom: SPACING.md,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginRight: SPACING.md,
    },
    iconWrap: {
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bg,
      marginRight: SPACING.md,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: colors.textPrimary,
    },
    subtitle: {
      marginTop: 2,
      fontSize: FONT_SIZE.sm,
      color: colors.textSecondary,
    },
    amount: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
    },
  });
