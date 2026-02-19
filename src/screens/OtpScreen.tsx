import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { verifyOtpApi } from '../services/Home/authApi';
import { saveToken } from '../utils/tokenStorage';

const OtpScreen = ({ route, navigation }: any) => {
  const phone = route?.params?.phone;
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter OTP');
      return;
    }

    try {
      setLoading(true);

      const res = await verifyOtpApi(phone, otp);

      if (res?.token) {
        await saveToken(res.token);

        if (res.isNewUser) {
          navigation.replace('Register');
        } else {
          navigation.replace('MainTabs'); // FIXED
        }
      } else {
        Alert.alert('Error', 'Invalid OTP');
      }
    } catch (error) {
      console.log('OTP Verify Error:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Verify OTP 🔐</Text>
          <Text style={styles.subText}>
            Enter the 4-digit code sent to
          </Text>
          <Text style={styles.phoneText}>+91 {phone}</Text>

          <TextInput
            placeholder="----"
            placeholderTextColor="#bbb"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={4}
            style={styles.otpInput}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleVerify}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Verify & Continue</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.resendText}>
            Didn’t receive OTP? <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

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
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000307',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#000307',
  },
  phoneText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000307',
    marginBottom: 25,
  },
  otpInput: {
    width: '100%',
    backgroundColor: '#000307',
    borderRadius: 14,
    paddingVertical: 18,
    fontSize: 24,
    letterSpacing: 10,
    textAlign: 'center',
    marginBottom: 25,
    color: '#FFD700',
  },
  button: {
    width: '100%',
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
  resendText: {
    marginTop: 20,
    fontSize: 13,
    color: '#000307',
  },
  resendLink: {
    color: '#000307',
    fontWeight: '600',
  },
});

