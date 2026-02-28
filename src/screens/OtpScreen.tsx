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
import { CommonActions } from '@react-navigation/native';

const OtpScreen = ({ route, navigation }: any) => {
    const phone = route?.params?.phone;
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);



    const handleVerify = async () => {
        try {
            setLoading(true);

            const res = await verifyOtpApi(phone, otp);
            console.log('VERIFY RESPONSE:', res);

            if (res?.token) {

                // 🔥 Save token first
                await saveToken(res.token);

                if (res.isNewUser) {
                    // ✅ Reset stack to Register
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Register' }],
                        })
                    );
                } else {
                    // ✅ Reset stack to MainTabs
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'MainTabs' }],
                        })
                    );
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
                            <ActivityIndicator color="#121212" />
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
        alignItems: 'center',
    },

    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#F5F5F5',
        marginBottom: 8,
    },

    subText: {
        fontSize: 14,
        color: '#9CA3AF',
    },

    phoneText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#D4AF37',
        marginBottom: 30,
    },

    otpInput: {
        width: '100%',
        backgroundColor: '#252525',
        borderRadius: 18,
        paddingVertical: 18,
        fontSize: 24,
        letterSpacing: 12,
        textAlign: 'center',
        marginBottom: 28,
        color: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#2A2A2A',
    },

    button: {
        width: '100%',
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

    resendText: {
        marginTop: 22,
        fontSize: 13,
        color: '#9CA3AF',
    },

    resendLink: {
        color: '#D4AF37',
        fontWeight: '600',
    },
});
