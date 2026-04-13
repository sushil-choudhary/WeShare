import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createContributionStyles = (colors: any) =>
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
    avatar: {
      width: 42,
      height: 42,
      borderRadius: 21,
      marginRight: SPACING.md,
    },
    name: {
      flex: 1,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: colors.textPrimary,
    },
    rightSection: {
      alignItems: 'flex-end',
    },
    meta: {
      fontSize: FONT_SIZE.sm,
      color: colors.textSecondary,
    },
    balance: {
      marginTop: 4,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
    },
  });
