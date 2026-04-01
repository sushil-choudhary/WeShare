import { StyleSheet } from 'react-native';
import { SPACING } from '../../utils/spacing';

export const COLORS1 = {
  background: '#F7F9FB', // main screen background
  card: '#FFFFFF', // cards & menus
  primary: '#5B8DEF', // active actions / highlights
  success: '#2ECC71', // positive (You Get)
  danger: '#E74C3C', // negative (You Owe / Delete)
  textPrimary: '#1F2937', // main text
  textSecondary: '#6B7280', // sub text
  border: '#E5E7EB', // dividers
  accentSoft: '#EEF4FF', // soft primary background
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS1.background,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 8,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS1.textPrimary,
  },

  username: {
    color: COLORS1.textSecondary,
    fontSize: 13,
  },

  paymentCard: {
    marginHorizontal: 16,
    marginTop: 20,
    paddingBottom: 16,
    borderRadius: 14,
    backgroundColor: COLORS1.accentSoft,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  total: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: SPACING.lg,
    borderRadius: 12,
    // padding: SPACING.lg,
    alignItems: 'center',
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop: SPACING.lg,
    borderRadius: 12,
    // padding: SPACING.lg,
  },

  statItem: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  totalItem: {
    // backgroundColor: '#004d1aff',
  },
  oweItem: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxxl,
    backgroundColor: '#FDECEA', // soft red
    borderRadius: 12,
  },
  getItem: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxxl,
    backgroundColor: '#EAF7EF', // soft green
    borderRadius: 12,
  },

  statCount: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS1.textSecondary,
  },

  statLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS1.textPrimary,
  },

  totalLabel: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS1.textSecondary,
  },

  totalValue: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS1.primary,
  },
  label: {
    marginTop: 14,
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
    // fontFamily: 'bold',
  },
  menu: {
    paddingHorizontal: 16,
    backgroundColor: COLORS1.card,
    borderRadius: 12,
    marginHorizontal: 10,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: COLORS1.border,
  },

  menuText: {
    fontSize: 14,
    color: COLORS1.textPrimary,
  },
  actionMenu: {
    paddingHorizontal: 16,
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 60,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  actionMenuText: {
    fontSize: 14,
    color: COLORS1.danger,
  },

  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
  },

  logoutText: {
    color: '#e74c3c',
    fontSize: 14,
    fontWeight: '500',
  },
});
