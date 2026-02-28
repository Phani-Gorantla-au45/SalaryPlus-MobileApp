import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SilverComponent = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Silver Content</Text> */}
    </View>
  );
};

export default SilverComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    color: '#C0C0C0',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
