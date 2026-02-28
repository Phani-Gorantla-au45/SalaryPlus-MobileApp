import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import TabIcon from '../../asserts/TabIcon';

const AppHeader = ({ onMenuPress }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('MENU CLICKED');
          onMenuPress();
        }}
        activeOpacity={0.7}
      >
        <TabIcon name="menu" size={24} color="#D4AF37" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#121212', // premium dark
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E', // subtle separation
  },
});