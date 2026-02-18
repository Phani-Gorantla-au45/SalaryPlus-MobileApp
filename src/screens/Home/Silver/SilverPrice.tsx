import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SilverPrice = () => {
  const [price, setPrice] = useState(72.45);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() * 0.5 - 0.25));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Live Silver Price</Text>
      <Text style={styles.price}>₹ {price.toFixed(2)}</Text>
    </View>
  );
};

export default SilverPrice;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
     alignItems: 'center',
  },
  label: {
    color: '#aaa',
  },
  price: {
    color: '#C0C0C0',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
