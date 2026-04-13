import { RF } from '../utils/responsive';

export const FONT_SIZE = {
  xs: RF(10),
  sm: RF(12),
  md: RF(14),
  lg: RF(16),
  xl: RF(18),
  xxl: RF(22),
  title: RF(18),
  amount: RF(34),
};

export const FONT_WEIGHT = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;
