import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoldPrice = () => {
  const [price, setPrice] = useState(5847.12);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() * 2 - 1));
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Live Gold Price</Text>
      <Text style={styles.price}>₹ {price.toFixed(2)}</Text>
    </View>
  );
};

export default GoldPrice;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
     alignItems: 'center',
  },
  label: {
    color: '#aaa',
  },
  price: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
