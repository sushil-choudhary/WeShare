/* eslint-disable no-undef */
import { CheckIcon, CrossIcon } from '@assets/svg';
import colors from '@styles/colors';
import { spacing } from '@styles/mixins';
import React, { useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const ToastProvider = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;

  const [toastMessage, setMessage] = useState('');
  const [toastType, setType] = useState('');

  global.ShowToast = (message = '', type = '', duration = 2000) => {
    try {
      if (type) {
        setType(type);
      }
      if (message) {
        setMessage(message);
      }
    } catch (_) {}

    // Container animation
    Animated.timing(animated, {
      toValue: 1,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    // Text fade + scale animation
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 350,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      // reverse text
      Animated.timing(textAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // reverse container
      Animated.timing(animated, {
        toValue: 0,
        duration: 400,
        easing: Easing.in(Easing.ease),
        useNativeDriver: false,
      }).start(() => {
        setMessage('');
        setType('success');
      });
    }, duration);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor:
      toastType === 'error'
        ? colors.ERROR_60
        : toastType === 'success'
          ? colors.TOAST_SUCCESS
          : colors.WARNING,
    // borderWidth: 1,
    // borderColor: toastType === 'error' ? colors.DANGER : '#6CCF46',
    opacity: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const textStyle = {
    opacity: textAnim,
    transform: [
      {
        scale: textAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        }),
      },
    ],
  };

  return (
    <Animated.View style={containerStyle} pointerEvents="none">
      {toastType === 'success' ? (
        <CheckIcon />
      ) : toastType === 'error' ? (
        <View style={styles.crossIconView}>
          <CrossIcon height={8} width={8} />
        </View>
      ) : null}
      <Animated.Text style={[styles.messageText, textStyle]}>{toastMessage}</Animated.Text>
    </Animated.View>
  );
};

export default ToastProvider;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    bottom: '15%',
    elevation: 5,
    flexDirection: 'row',
    padding: 10,
    paddingRight: 20,

    paddingLeft: 10,
    // paddingHorizontal: 25,
    position: 'absolute',
    shadowColor: colors.GRAY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    paddingVertical: spacing(10),
  },
  messageText: {
    color: colors.WHITE,
    fontSize: 14,
    paddingLeft: 6,
    fontWeight: '600',
  },
  crossIconView: {
    backgroundColor: colors.WHITE,
    padding: spacing(5),
    borderRadius: spacing(26),
    alignContent: 'center',
    alignItems: 'center',
  },
});
