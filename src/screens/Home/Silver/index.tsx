import React from 'react';
import { View } from 'react-native';
import SilverPrice from './SilverPrice';
import SilverComponent from './SilverComponent';
import SilverButtons from './SilverButtons';
import SilverHolding from './SilverHolding';
import QuickActions from '../components/QuickActions';

const Silver = () => {
  return (
    <View>
      <SilverPrice />
      <SilverComponent />
      <SilverHolding />
      <SilverButtons />
      <QuickActions />
      
    </View>
  );
};

export default Silver;
