import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoldComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Content</Text>
    </View>
  );
};

export default GoldComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
