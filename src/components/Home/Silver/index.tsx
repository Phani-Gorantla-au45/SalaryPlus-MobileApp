import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SilverPrice price={price} />

      <SilverComponent />

      <LockerBalanceCard
        metal="Silver"
        quantity={0}
        value={0.0}
      />

      <SilverButtons />

      <QuickActions />

      {/* Bottom spacing */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Silver;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});