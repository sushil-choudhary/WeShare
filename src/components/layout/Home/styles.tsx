import { StyleSheet } from 'react-native';
import { SPACING } from '../../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../../utils/typography';
import { moderateScale } from '../../../utils/responsive';

export const createHomeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      paddingHorizontal: SPACING.lg,
      paddingTop: SPACING.lg,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: SPACING.md,
    },
    menu: { fontSize: FONT_SIZE.xl },
    headerTitle: { fontSize: FONT_SIZE.lg, fontWeight: FONT_WEIGHT.bold },
    notification: { fontSize: FONT_SIZE.lg },

    balanceCard: {
      borderRadius: 24,
      padding: SPACING.lg,
      marginBottom: SPACING.md,
      elevation: 4,
    },
    balanceLabel: { color: '#fff', fontSize: FONT_SIZE.sm },
    balanceAmount: {
      color: '#fff',
      fontSize: FONT_SIZE.xl,
      fontWeight: FONT_WEIGHT.bold,
      marginVertical: 8,
    },
    balanceRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: SPACING.md },
    smallLabel: { color: '#fff', fontSize: FONT_SIZE.xs },
    smallAmount: { color: '#fff', fontWeight: FONT_WEIGHT.bold, fontSize: FONT_SIZE.sm },

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
    seeAll: { color: colors.primary, fontSize: FONT_SIZE.sm },

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
