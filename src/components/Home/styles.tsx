import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';
import { moderateScale } from '../../utils/responsive';

export const createHomeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BG,
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
      borderRadius: SPACING.lg,
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

    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      // paddingHorizontal: SPACING.lg,
      paddingBottom: SPACING.md,
      justifyContent: 'space-between',
    },

    profileImage: {
      width: 42,
      height: 42,
      borderRadius: 21,
      borderWidth: 2,
      borderColor: colors.primary,
    },

    centerTitle: {
      flex: 1,
      alignItems: 'center',
    },

    title: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: colors.textPrimary,
    },

    subTitle: {
      fontSize: FONT_SIZE.xs,
      color: colors.textSecondary,
      marginTop: 2,
    },

    notificationBtn: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: 'center',
      justifyContent: 'center',
    },

    notificationIcon: {
      fontSize: 20,
    },

    notificationDot: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.danger,
    },
  });
