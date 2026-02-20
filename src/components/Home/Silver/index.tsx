import React from 'react';
import { ScrollView } from 'react-native';
import SilverPrice from './SilverPrice';
import SilverComponent from './SilverComponent';
import SilverButtons from './SilverButtons';
import SilverHolding from './SilverHolding';
import QuickActions from '../common_components/QuickActions';
import LockerBalanceCard from '../common_components/LockerBalanceCard';

interface Props {
  price: number | null;
}

const Silver: React.FC<Props> = ({ price }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SilverPrice price={price} />
      <SilverComponent />
      {/* <SilverHolding /> */}
      <LockerBalanceCard
        metal="Silver"
        quantity={12.2}
        value={250.45}
      />
      <SilverButtons />
      <QuickActions />
    </ScrollView>
  );
};

export default Silver;