import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  Linking,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRates } from '../../../context/RatesContext';
import { createSilverIntentApi } from '../../../services/Home/authApi';

const BuySilver = () => {
  const navigation = useNavigation<any>();
  const { rates } = useRates();

  const [amount, setAmount] = useState('');
  const [isAmountMode, setIsAmountMode] = useState(true);

  const numericAmount = Number(amount);
  const isValid = !isNaN(numericAmount) && numericAmount >= 2;

  const silverPrice = rates?.sBuy ?? 0;

  const handleBuy = async () => {
    console.log('🚀 BuySilver button clicked');

    if (!rates) {
      console.log('❌ Rates not available');
      return;
    }

    let payload: any = {
      lockPrice: rates.sBuy,
      blockId: rates.blockId,
    };

    if (isAmountMode) {
      payload.amount = Number(amount);
    } else {
      payload.quantity = Number(amount);
    }

    console.log('📤 SENDING PAYLOAD:', payload);

    try {
      const response = await createSilverIntentApi(payload);

      console.log('📥 FULL API RESPONSE:', response);

      if (response?.success && response?.data?.upiDeeplink) {

        // ✅ Navigate FIRST
        navigation.navigate('TransactionStatus', {
          merchantRequestId: response.data.merchantTransactionId,
        });

        // ✅ Then open UPI
        const supported = await Linking.canOpenURL(response.data.upiDeeplink);

        if (supported) {
          await Linking.openURL(response.data.upiDeeplink);
        } else {
          Alert.alert('Error', 'No UPI app found');
        }

      } else {
        Alert.alert('Error', 'Intent creation failed');
      }

    } catch (error) {
      console.log('🔥 Silver Intent Error:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  console.log('🧾 CURRENT INPUT:', amount);
  console.log('💰 Current Silver Price:', silverPrice);
  console.log('🔐 Current BlockId:', rates?.blockId);

  return (
    <View style={styles.container}>

      <View style={styles.priceCard}>
        <Text style={styles.priceLabel}>Live Silver Price</Text>
        <Text style={styles.priceValue}>
          ₹{silverPrice.toFixed(2)}/gm +3% GST
        </Text>
      </View>

      <View style={styles.toggleContainer}>
        <Text style={[
          styles.toggleText,
          isAmountMode && styles.activeToggleText,
        ]}>
          Amount (₹)
        </Text>

        <Switch
          value={!isAmountMode}
          onValueChange={() => {
            console.log('🔄 Toggle Mode Changed');
            setIsAmountMode(!isAmountMode);
          }}
          thumbColor="#C0C0C0"
          trackColor={{ false: '#333', true: '#333' }}
        />

        <Text style={[
          styles.toggleText,
          !isAmountMode && styles.activeToggleText,
        ]}>
          Grams
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={isAmountMode ? 'Enter amount' : 'Enter grams'}
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => {
            console.log('✏ User entered:', text);
            setAmount(text);
          }}
          style={styles.input}
        />
        <Text style={styles.currency}>
          {isAmountMode ? '₹' : 'g'}
        </Text>
      </View>

      {amount !== '' && !isValid && (
        <Text style={styles.errorText}>
          Minimum investment is ₹2
        </Text>
      )}

      <TouchableOpacity
        disabled={!isValid}
        style={[
          styles.buyButton,
          !isValid && styles.disabledButton,
        ]}
        onPress={handleBuy}
      >
        <Text style={styles.buyText}>Buy Silver</Text>
      </TouchableOpacity>

    </View>
  );
};

export default BuySilver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  priceCard: {
    backgroundColor: '#1E1E1E',
    padding: 18,
    borderRadius: 18,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#BFC1C2',
    marginTop: 50,
  },

  priceLabel: {
    color: '#9CA3AF',
    fontSize: 14,
    letterSpacing: 0.5,
  },

  priceValue: {
    color: '#BFC1C2',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
  },

  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },

  toggleText: {
    color: '#6B7280',
    fontSize: 16,
    marginHorizontal: 12,
  },

  activeToggleText: {
    color: '#F5F5F5',
    fontWeight: '600',
  },

  inputContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  input: {
    color: '#F5F5F5',
    fontSize: 20,
    flex: 1,
    fontWeight: '500',
  },

  currency: {
    color: '#9CA3AF',
    fontSize: 18,
  },

  errorText: {
    color: '#EF4444',
    marginTop: 12,
    fontSize: 14,
  },

  buyButton: {
    marginTop: 45,
    backgroundColor: '#BFC1C2',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  disabledButton: {
    backgroundColor: '#4B5563',
  },

  buyText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
  },
});