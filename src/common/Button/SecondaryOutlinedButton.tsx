import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

import { moderateScale } from '../../utils/responsive';
import { SPACING } from '../../utils/spacing';
import { COLORS } from '../../theme/color';
import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';

interface SecondaryOutlinedButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

const SecondaryOutlinedButton: React.FC<SecondaryOutlinedButtonProps> = ({
  title,
  onPress,
  disabled = false,
  fullWidth = true,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, fullWidth && styles.fullWidth, disabled && styles.disabled, style]}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryOutlinedButton;

const styles = StyleSheet.create({
  button: {
    height: moderateScale(52),
    borderRadius: SPACING.xxxl,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
    backgroundColor: 'transparent',
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.semiBold,
    color: COLORS.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: COLORS.muted,
  },
});
