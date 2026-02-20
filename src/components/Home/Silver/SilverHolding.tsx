import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SilverHolding = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZIXX_LgjSx7fLPot-rcoqOI1kR0OA7v3Hw&s'
        }}
        style={styles.image}
      /> */}
    </View>
  );
};

export default SilverHolding;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
});
