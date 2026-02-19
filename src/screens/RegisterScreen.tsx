import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { registerApi } from '../services/Home/authApi';

const RegisterScreen = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [stateName, setStateName] = useState('');

  const handleRegister = async () => {
    try {
      const res = await registerApi({
        First_name: firstName,
        Last_name: lastName,
        email,
        stateName,
      });

      console.log('REGISTER RESPONSE:', res);

      if (res?.message || res?.success) {
        Alert.alert('Success', 'Profile completed 🎉');
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Error', 'Registration failed');
      }
    } catch (error) {
      console.log('REGISTER ERROR:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Complete Your Profile</Text>
          <Text style={styles.subText}>
            Let’s finish setting up your account
          </Text>

          <TextInput
            placeholder="First Name"
            placeholderTextColor="#888"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />

          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#888"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />

          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />

          <TextInput
            placeholder="State"
            placeholderTextColor="#888"
            value={stateName}
            onChangeText={setStateName}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    fontSize: 24,
    fontWeight: '700',
    color: '#000307',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#000307',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#000307',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 15,
    color: '#FFD700',
  },
  button: {
    marginTop: 10,
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
