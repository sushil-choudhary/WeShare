import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle } from 'react-native';

import { SPACING } from '../../utils/spacing';

import { FONT_SIZE, FONT_WEIGHT } from '../../utils/typography';
import { moderateScale } from '../../utils/responsive';
import { useTheme } from '../../theme/themeProvider';

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
}) => {
  const isDisabled = disabled || loading;
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.button, fullWidth && styles.fullWidth, isDisabled && styles.disabled, style]}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const createStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      height: moderateScale(52),
      borderRadius: SPACING.xxxl,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: SPACING.xl,
    },
    fullWidth: {
      width: '100%',
    },
    text: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semiBold,
      color: '#fff',
    },
    disabled: {
      opacity: 0.6,
    },
  });
