import React from 'react';
import { ScrollView } from 'react-native';
import SilverPrice from './SilverPrice';
import SilverComponent from './SilverComponent';
import SilverButtons from './SilverButtons';
import SilverHolding from './SilverHolding';
import QuickActions from '../components/QuickActions';

const Silver = () => {
  return (
   <ScrollView showsVerticalScrollIndicator={false}>
      <SilverPrice />
      <SilverComponent />
      <SilverHolding />
      <SilverButtons />
      <QuickActions />
      
    </ScrollView>
  );
};

export default Silver;
