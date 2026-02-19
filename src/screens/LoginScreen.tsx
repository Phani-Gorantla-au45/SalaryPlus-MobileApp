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
    backgroundColor: '#000307',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    padding: 25,
    elevation: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000307',
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    color: '#000307',
    marginBottom: 25,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000307',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  prefix: {
    fontSize: 15,
    color: '#FFD700',
    marginRight: 8,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#FFD700',
  },
  button: {
    backgroundColor: '#000307',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
  },
});

