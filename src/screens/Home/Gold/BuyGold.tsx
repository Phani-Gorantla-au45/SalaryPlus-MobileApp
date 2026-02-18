import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BuyGold = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buy Gold Screen</Text>
    </View>
  );
};

export default BuyGold;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000307' },
  text: { color: '#FFD700', fontSize: 22, fontWeight: 'bold' },
});
