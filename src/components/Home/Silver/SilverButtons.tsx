import React from 'react';
import { View, StyleSheet } from 'react-native';
import BuyButton from '../common_components/BuyButton';
import SipButton from '../common_components/SipButton';

const SilverButtons = () => {
  return (
    <View style={styles.container}>
      <BuyButton
        title="Buy Silver"
        color="#C0C0C0"
        screen="BuySilver"
      />
      <View style={{ width: 10 }} />
      <SipButton
        title="Start SIP"
        screen="SilverSIP"
      />
    </View>
  );
};

export default SilverButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
  },
});
