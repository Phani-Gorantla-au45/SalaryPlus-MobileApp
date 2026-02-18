import React from 'react';
import { View, StyleSheet } from 'react-native';
import BuyButton from '../components/BuyButton';
import SipButton from '../components/SipButton';

const GoldButtons = () => {
  return (
    <View style={styles.container}>
      <BuyButton
        title="Buy Gold"
        color="#FFD700"
        screen="BuyGold"
      />
      <View style={{ width: 10 }} />
      <SipButton
        title="Start SIP"
        screen="GoldSIP"
      />
    </View>
  );
};

export default GoldButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
  },
});
