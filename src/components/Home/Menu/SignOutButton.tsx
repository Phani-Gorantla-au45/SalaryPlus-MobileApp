import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignOutButton = ({ onClose }: any) => {

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('USER_TOKEN');

      if (onClose) {
        onClose();
      }

      // Do NOT navigate manually
      // StackNavigator will automatically switch to Login

    } catch (error) {
      console.log('SignOut Error:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default SignOutButton;

const styles = StyleSheet.create({
  button: {
    marginBottom: 50,
  },
  text: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
  },
});
