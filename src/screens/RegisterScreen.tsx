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
  ToastAndroid,
} from 'react-native';
import { registerApi, createGoldAccountApi } from '../services/Home/authApi';
import { saveToken } from '../utils/tokenStorage';
import { CommonActions } from '@react-navigation/native';

const RegisterScreen = ({ route, navigation }: any) => {
  const tempToken = route?.params?.tempToken;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [stateName, setStateName] = useState('');
  const [errors, setErrors] = useState<any>({});

  // 🔎 Form validation
  const validate = () => {
    let newErrors: any = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter valid email address';
    }

    if (!stateName.trim()) {
      newErrors.stateName = 'State is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      const res = await registerApi(
        {
          First_name: firstName,
          Last_name: lastName,
          email,
          stateName,
        },
        tempToken
      );

      if (res?.message || res?.success) {

        if (tempToken) {
          await saveToken(tempToken);
        }

        // ✅ Navigate immediately (no waiting)
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'MainTabs' }],
          })
        );

        // ✅ Run gold creation in background
        createGoldAccountApi()
          .then((goldRes) => {
            console.log("Gold API Response:", goldRes);

            if (goldRes?.message === "Gold account created") {
              ToastAndroid.show(
                '🪙 Gold account activated successfully',
                ToastAndroid.SHORT
              );
            } else {
              console.log("Gold creation message:", goldRes?.message);
            }
          })
          .catch((goldError) => {
            console.log("Gold account creation failed:", goldError);
          });

      } else {
        Alert.alert('Error', 'Registration failed');
      }

    } catch (error) {
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

          {/* FIRST NAME */}
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#888"
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.input, errors.firstName && styles.errorInput]}
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}

          {/* LAST NAME */}
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#888"
            value={lastName}
            onChangeText={setLastName}
            style={[styles.input, errors.lastName && styles.errorInput]}
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          {/* EMAIL */}
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={[styles.input, errors.email && styles.errorInput]}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          {/* STATE MANUAL INPUT */}
          <TextInput
            placeholder="State"
            placeholderTextColor="#888"
            value={stateName}
            onChangeText={setStateName}
            style={[styles.input, errors.stateName && styles.errorInput]}
          />
          {errors.stateName && (
            <Text style={styles.errorText}>{errors.stateName}</Text>
          )}

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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: 'red',
  },
});