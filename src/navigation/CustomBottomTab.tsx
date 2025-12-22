/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export default function CustomBottomTab({ state, navigation }: any) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;

          if (route.name === 'Add') {
            return (
              <TouchableOpacity
                key={route.key}
                style={styles.addButton}
                onPress={() => navigation.navigate('Add')}
              >
                <Ionicons name="add" size={28} color="#fff" />
              </TouchableOpacity>
            );
          }

          let iconName = 'home-outline';
          switch (route.name) {
            case 'Home':
              iconName = isFocused ? 'home' : 'home-outline';
              break;
            case 'Activity':
              iconName = isFocused ? 'pulse' : 'pulse-outline';
              break;
            case 'Transactions':
              iconName = isFocused ? 'swap-horizontal' : 'swap-horizontal-outline';
              break;
            case 'Profile':
              iconName = isFocused ? 'person' : 'person-outline';
              break;
          }

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              onPress={() => navigation.navigate(route.name)}
            >
              <Ionicons name={iconName} size={22} color={isFocused ? '#0F9D58' : '#777'} />
              <Text style={[styles.label, isFocused && styles.activeLabel]}>{route.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
