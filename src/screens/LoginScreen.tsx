import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sendOtpApi } from '../services/Home/authApi';

const LoginScreen = ({ navigation }: any) => {
  const [phone, setPhone] = useState('');

  const handleSendOtp = async () => {
    if (!phone) {
      Alert.alert('Error', 'Enter phone number');
      return;
    }

    try {
      const res = await sendOtpApi(phone);

      if (res.message === 'OTP sent successfully') {
        navigation.navigate('Otp', { phone });
      } else {
        Alert.alert('Error', 'Failed to send OTP');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Welcome Back 👋</Text>
          <Text style={styles.subText}>
            Enter your mobile number to continue
          </Text>

          <View style={styles.phoneContainer}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              placeholder="Enter Phone Number"
              placeholderTextColor="#888"
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
              maxLength={10}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#F5F5F5',
    marginBottom: 8,
  },

  subText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 30,
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  prefix: {
    fontSize: 15,
    color: '#D4AF37',
    marginRight: 10,
    fontWeight: '600',
  },

  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#F5F5F5',
  },

  button: {
    backgroundColor: '#D4AF37',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
