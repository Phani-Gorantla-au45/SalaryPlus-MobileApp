import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoldSIP = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold SIP Screen</Text>
    </View>
  );
};

export default GoldSIP;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000307' },
  text: { color: '#FFD700', fontSize: 22, fontWeight: 'bold' },
});
