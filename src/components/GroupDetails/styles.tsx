import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

export const createGroupDetailsStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      padding: SPACING.lg,
      // paddingBottom: 120,
    },
    contentContainer: {
      flexGrow: 1,
    },

    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: SPACING.lg,
    },
    backButton: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    headerTextContainer: {
      marginLeft: SPACING.md,
      flex: 1,
    },
    title: {
      fontSize: FONT_SIZE.title,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: FONT_SIZE.md,
      color: colors.textSecondary,
      marginTop: 2,
    },

    summaryCard: {
      backgroundColor: colors.card,
      borderRadius: SPACING.lg,
      padding: SPACING.lg,
      borderWidth: 1,
      borderColor: colors.divider,
      marginBottom: SPACING.xl,
    },
    summaryGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: SPACING.lg,
    },
    summaryItem: {
      width: '48%',
    },
    summaryLabel: {
      fontSize: FONT_SIZE.sm,
      color: colors.textSecondary,
      marginBottom: SPACING.xs,
    },
    summaryAmount: {
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
    },

    section: {
      marginBottom: SPACING.xl,
    },
    sectionTitle: {
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
      marginBottom: SPACING.md,
    },

    memberList: {
      paddingRight: SPACING.sm,
    },
    memberCard: {
      alignItems: 'center',
      marginRight: SPACING.md,
      width: 72,
    },
    memberAvatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      marginBottom: SPACING.sm,
    },
    memberName: {
      fontSize: FONT_SIZE.sm,
      color: colors.textPrimary,
      textAlign: 'center',
    },

    filterWrap: {
      paddingBottom: SPACING.md,
    },
    filterChip: {
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.xl,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.divider,
      marginRight: SPACING.sm,
      marginBottom: SPACING.md,
    },
    filterChipSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    filterChipText: {
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textPrimary,
      textTransform: 'capitalize',
    },
    filterChipTextSelected: {
      color: colors.card,
    },

    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: SPACING.xxxl,
      backgroundColor: colors.card,
      borderRadius: SPACING.lg,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    emptyTitle: {
      marginTop: SPACING.md,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
    },
    emptySubtitle: {
      marginTop: SPACING.xs,
      fontSize: FONT_SIZE.sm,
      color: colors.textSecondary,
      textAlign: 'center',
      paddingHorizontal: SPACING.lg,
    },

    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      padding: SPACING.lg,
      backgroundColor: colors.bg,
      borderTopWidth: 1,
      borderTopColor: colors.divider,
      gap: SPACING.md,
    },
    secondaryButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: SPACING.xxxl,
      paddingVertical: SPACING.md,
      gap: SPACING.xs,
      backgroundColor: colors.card,
    },
    secondaryButtonText: {
      color: colors.primary,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
    },
    primaryButton: {
      flex: 1,
      backgroundColor: colors.primary,
      borderRadius: SPACING.xxxl,
      paddingVertical: SPACING.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButtonText: {
      color: colors.card,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
    },

    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalOverlayCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      padding: SPACING.lg,
    },
    bottomSheet: {
      backgroundColor: colors.bg,
      borderTopLeftRadius: SPACING.xl,
      borderTopRightRadius: SPACING.xl,
      padding: SPACING.lg,
      paddingBottom: SPACING.xxxl,
    },
    confirmModal: {
      width: '100%',
      backgroundColor: colors.bg,
      borderRadius: SPACING.xl,
      padding: SPACING.lg,
    },
    sheetHandle: {
      width: 48,
      height: 5,
      borderRadius: 3,
      backgroundColor: colors.divider,
      alignSelf: 'center',
      marginBottom: SPACING.md,
    },
    modalTitle: {
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
      color: colors.textPrimary,
      marginBottom: SPACING.md,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.divider,
      backgroundColor: colors.card,
      borderRadius: SPACING.md,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.md,
      fontSize: FONT_SIZE.md,
      color: colors.textPrimary,
      marginBottom: SPACING.md,
    },
    fieldLabel: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textSecondary,
      marginBottom: SPACING.sm,
    },
    categoryWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: SPACING.sm,
      marginBottom: SPACING.lg,
    },
    categoryChip: {
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.md,
      borderRadius: SPACING.xl,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.divider,
    },
    categoryChipSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    categoryChipText: {
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
      color: colors.textPrimary,
      textTransform: 'capitalize',
    },
    categoryChipTextSelected: {
      color: colors.card,
    },
    modalActionRow: {
      flexDirection: 'row',
      gap: SPACING.md,
    },
    modalSecondaryButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.divider,
      borderRadius: SPACING.md,
      paddingVertical: SPACING.md,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.card,
    },
    modalSecondaryButtonText: {
      color: colors.textPrimary,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
    },
    modalPrimaryButton: {
      flex: 1,
      backgroundColor: colors.primary,
      borderRadius: SPACING.md,
      paddingVertical: SPACING.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalPrimaryButtonText: {
      color: colors.card,
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.bold,
    },
    confirmText: {
      fontSize: FONT_SIZE.md,
      color: colors.textPrimary,
      marginBottom: SPACING.sm,
    },
    confirmSubText: {
      fontSize: FONT_SIZE.sm,
      color: colors.textSecondary,
      marginBottom: SPACING.lg,
    },
  });
