import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';


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
  });
