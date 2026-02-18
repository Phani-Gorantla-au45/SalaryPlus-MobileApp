import React from 'react';
import { View } from 'react-native';
import GoldPrice from './GoldPrice';
import GoldHolding from './GoldHolding';
import GoldButtons from './GoldButtons';
import QuickActions from '../components/QuickActions';

const Gold = () => {
  return (
    <View>
      <GoldPrice />
      <GoldHolding />
      <GoldButtons />
      <QuickActions />
    </View>
  );
};

export default Gold;
