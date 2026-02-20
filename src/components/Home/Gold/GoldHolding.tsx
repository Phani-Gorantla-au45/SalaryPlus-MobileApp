import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GoldHolding = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xBNBM1uu1E_8Or-ks_jDU1YgPB5WYSC5Ew&s'   // 🔥 dynamic internet image
        }}
        style={styles.image}
      /> */}
    </View>
  );
};

export default GoldHolding;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 125,   // makes it circular
  },
});
