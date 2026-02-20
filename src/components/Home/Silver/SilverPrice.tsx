import React from 'react';
import { View, Text } from 'react-native';

const Silver = ({ price }: { price: number | null }) => {
  return (
    <View style={{ marginTop: 40, alignItems: 'center' }}>
      <Text style={{ color: '#aaa' }}>Live Silver Price</Text>
      <Text style={{ color: '#C0C0C0', fontSize: 22, fontWeight: 'bold' }}>
        ₹ {price ? price.toFixed(2) : '0.00'}
      </Text>
    </View>
  );
};

export default Silver;