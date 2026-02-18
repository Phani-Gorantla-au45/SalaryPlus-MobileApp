import React from 'react';
import { View } from 'react-native';
import SilverPrice from './SilverPrice';
import SilverComponent from './SilverComponent';
import SilverButtons from './SilverButtons';
import SilverHolding from './SilverHolding';

const Silver = () => {
  return (
    <View>
      <SilverPrice />
      <SilverComponent />
      <SilverHolding />
      <SilverButtons />
      
    </View>
  );
};

export default Silver;
