import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createSettlementStyles = (colors: any) =>
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
    },
  });
