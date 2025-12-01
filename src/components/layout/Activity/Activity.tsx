import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Activity() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Screen</Text>
      <Text>Your recent activity logs appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
});
