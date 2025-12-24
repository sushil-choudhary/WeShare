import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';
import { moderateScale } from '../../utils/responsive';


export const createBalancesStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SPACING.lg,
      backgroundColor: colors.bg,
    },
    title: {
      fontSize: FONT_SIZE.xl,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
      marginBottom: SPACING.md,
    },
    balanceText: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
    },
    transactionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: SPACING.sm,
    },
    transactionTitle: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      padding: SPACING.md,
      borderRadius: 16,
      marginBottom: SPACING.sm,
      elevation: 2,
    },
    transactionIcon: { width: moderateScale(40), height: moderateScale(40), borderRadius: 12 },
    transactionName: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: colors.textPrimary,
    },
    transactionTime: { fontSize: FONT_SIZE.sm, color: colors.textSecondary },
    transactionAmount: { fontSize: FONT_SIZE.md, fontWeight: FONT_WEIGHT.bold },
  });
