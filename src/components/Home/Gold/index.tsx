import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <GoldPrice price={price} />

      <LockerBalanceCard
        metal="Gold"
        quantity={0.0}
        value={0.0}
      />

      <GoldComponent />

      <GoldButtons />

      <QuickActions />

      {/* Extra bottom spacing */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Gold;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});