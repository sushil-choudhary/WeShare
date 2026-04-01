import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createFabMenuStyles = (colors: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.35)',
      justifyContent: 'flex-end',
      paddingHorizontal: SPACING.lg,
      paddingBottom: SPACING.xxxl,
    },
    menuContainer: {
      backgroundColor: colors.card,
      borderRadius: SPACING.lg,
      padding: SPACING.md,
      borderWidth: 1,
      borderColor: colors.divider,
      gap: SPACING.sm,
    },
    menuItem: {
      paddingVertical: SPACING.md,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.md,
      backgroundColor: colors.bg,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    menuText: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textPrimary,
    },
  });
