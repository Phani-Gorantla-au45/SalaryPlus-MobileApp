import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SilverSIP = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Silver SIP Screen</Text>
    </View>
  );
};

export default SilverSIP;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000307' },
  text: { color: '#C0C0C0', fontSize: 22, fontWeight: 'bold' },
});
