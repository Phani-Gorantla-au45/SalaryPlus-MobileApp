import React from 'react';
import { ScrollView } from 'react-native';
import GoldPrice from './GoldPrice';
import GoldHolding from './GoldHolding';
import GoldButtons from './GoldButtons';
import QuickActions from '../components/QuickActions';
import GoldComponent from './GoldComponent';

const Gold = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <GoldPrice />
      {/* <GoldHolding /> */}
      <GoldComponent />
      <GoldButtons />
      <QuickActions />
    </ScrollView>

  );
};

export default Gold;
