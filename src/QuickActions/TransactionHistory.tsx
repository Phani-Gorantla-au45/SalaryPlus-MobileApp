import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
