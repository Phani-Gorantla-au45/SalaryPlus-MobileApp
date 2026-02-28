import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';

const SignOutButton = ({ onClose }: any) => {
  const navigation = useNavigation<any>();

  const handleSignOut = async () => {
    try {
      console.log('🔴 Signing out...');

      // 1️⃣ Remove token
      await AsyncStorage.removeItem('USER_TOKEN');

      console.log('🗑 Token removed');

      // 2️⃣ Close drawer if open
      if (onClose) {
        onClose();
      }

      // 3️⃣ Reset navigation completely
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      );

    } catch (error) {
      console.log('❌ SignOut Error:', error);
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
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D4AF37',
    alignItems: 'center',
  },
  text: {
    color: '#D4AF37', // metallic gold
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});