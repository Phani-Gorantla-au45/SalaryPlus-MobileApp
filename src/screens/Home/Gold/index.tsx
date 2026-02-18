import React from 'react';
import { View } from 'react-native';
import GoldPrice from './GoldPrice';
import GoldHolding from './GoldHolding';
import GoldButtons from './GoldButtons';

const Gold = () => {
  return (
    <View>
      <GoldPrice />
      <GoldHolding />
      <GoldButtons />
    </View>
  );
};

export default Gold;
