import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bonds = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonds Screen</Text>
    </View>
  );
};

export default Bonds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081224',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
