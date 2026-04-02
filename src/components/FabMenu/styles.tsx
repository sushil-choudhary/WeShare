import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createFabMenuStyles = (colors: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.35)',
      justifyContent: 'flex-end',
      paddingHorizontal: 100,
      paddingBottom: SPACING.xxxl + SPACING.xxl + SPACING.xxl,
    },
    menuContainer: {
      padding: SPACING.md,
      gap: SPACING.xxl,
    },
    menuItem: {
      paddingVertical: SPACING.md,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.xxl,
      backgroundColor: colors.bg,
      borderWidth: 1,
      borderColor: colors.divider,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuText: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textPrimary,
    },
  });
