import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    animatedContainer: {
      marginBottom: SPACING.md,
    },

    card: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.card,
      borderRadius: SPACING.lg,
      paddingVertical: SPACING.lg,
      paddingHorizontal: SPACING.lg,
      elevation: 1,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 70,
      shadowOffset: { width: 0, height: 6 },
    },

    left: {
      flex: 1,
    },

    title: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: colors.textPrimary,
    },

    avatarRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },

    avatar: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.card,
    },

    members: {
      marginLeft: 8,
      fontSize: FONT_SIZE.sm,
      color: colors.textSecondary,
    },

    right: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    balanceContainer: {
      alignItems: 'flex-end',
      marginRight: SPACING.sm,
    },

    balanceLabel: {
      fontSize: FONT_SIZE.xs,
      color: colors.textSecondary,
    },

    balanceAmount: {
      marginTop: 2,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
    },

    arrow: {
      fontSize: 18,
      color: colors.textSecondary,
      marginRight: 2,
      letterSpacing: 1,
    },

    arrowEnd: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.textSecondary,
    },
  });
