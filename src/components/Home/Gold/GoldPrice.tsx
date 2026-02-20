import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gold = ({ price }: { price: number | null }) => {
  return (
    <View style={{ marginTop: 40, alignItems: 'center' }}>
      <Text style={{ color: '#aaa' }}>Live Gold Price</Text>
      <Text style={{ color: '#FFD700', fontSize: 22, fontWeight: 'bold' }}>
        ₹ {price ? price.toFixed(2) : '0.00'}
      </Text>
    </View>
  );
};

export default Gold;