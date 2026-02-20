import React from 'react';
import { ScrollView } from 'react-native';
import GoldPrice from './GoldPrice';
import GoldHolding from './GoldHolding';
import GoldButtons from './GoldButtons';
import QuickActions from '../common_components/QuickActions';
import GoldComponent from './GoldComponent';
import LockerBalanceCard from '../common_components/LockerBalanceCard';

interface Props {
  price: number | null;
}
const Gold: React.FC<Props> = ({ price }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <GoldPrice price={price} />
      {/* <GoldHolding /> */}
      <LockerBalanceCard
        metal="Gold"
        quantity={6.5}
        value={103.78}
      />
      <GoldComponent />
      <GoldButtons />
      <QuickActions />
    </ScrollView>

  );
};

export default Gold;
