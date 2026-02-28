import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Silver = ({ price }: { price: number | null }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Live Silver Price</Text>
      <Text style={styles.price}>
        ₹ {price ? price.toFixed(2) : '0.00'}
      </Text>
    </View>
  );
};

export default Silver;

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
    color: '#BFC1C2', // upgraded metallic silver
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },
});