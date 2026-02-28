import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gold = ({ price }: { price: number | null }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Live Gold Price</Text>
      <Text style={styles.price}>
        ₹ {price ? price.toFixed(2) : '0.00'}
      </Text>
    </View>
  );
};

export default Gold;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },

  label: {
    color: '#9CA3AF', // softer grey
    fontSize: 14,
    letterSpacing: 0.5,
  },

  price: {
    color: '#D4AF37', // metallic gold
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },
});