import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bonds = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bonds</Text>
        <Text style={styles.subtitle}>
          Fixed-income investment options coming soon.
        </Text>
      </View>
    </View>
  );
};

export default Bonds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    backgroundColor: '#1E1E1E',
    padding: 30,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    alignItems: 'center',
    width: '100%',
  },

  title: {
    color: '#F5F5F5',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },

  subtitle: {
    color: '#9CA3AF',
    fontSize: 14,
    textAlign: 'center',
  },
});