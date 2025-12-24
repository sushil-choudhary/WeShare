import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { useTheme } from '../../theme/themeProvider';
import { createStyles } from './styles';
import { ExpenseGroupCardProps } from '../../utils/interface';
import Icon from 'react-native-vector-icons/Ionicons';

const ExpenseGroupCard: React.FC<ExpenseGroupCardProps> = ({
  title,
  members,
  balance,
  avatars,
  onPress,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const scaleAnim = useRef(new Animated.Value(0.96)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 280,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const isPositive = balance >= 0;

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          transform: [{ scale: scaleAnim }],
          opacity: fadeAnim,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.card}>
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.right}>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceLabel}>{isPositive ? 'You get' : 'You owe'}</Text>
              <Text
                style={[
                  styles.balanceAmount,
                  { color: isPositive ? colors.success : colors.danger },
                ]}
              >
                ₹{Math.abs(balance)}
              </Text>
            </View>
          </View>
        </View>

        {/* <Icon name="chevron" style={styles.arrow} /> */}
        <Icon name={'chevron-right'} style={styles.arrow} />
        <View style={styles.right} />

        <View style={styles.avatarRow}>
          <Text style={styles.members}>{members} members</Text>
          {avatars.slice(0, 3).map((img, index) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={[styles.avatar, { marginLeft: index === 0 ? 0 : -10 }]}
            />
          ))}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ExpenseGroupCard;
