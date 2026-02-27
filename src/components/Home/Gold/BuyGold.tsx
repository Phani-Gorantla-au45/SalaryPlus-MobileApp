import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useRates } from '../../../context/RatesContext';
import { createGoldIntentApi } from '../../../services/Home/authApi';
import { Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuyGold = () => {
  const navigation = useNavigation<any>();

  const { rates } = useRates();

  const [amount, setAmount] = useState('');
  const [isAmountMode, setIsAmountMode] = useState(true);

  const numericAmount = Number(amount);
  const isValid = numericAmount >= 0.1;

  const goldPrice = rates?.gBuy ?? 0;
  const blockId = rates?.blockId;

  const handleBuy = async () => {
    if (!rates) return;

    let payload: any = {
      metalType: 'gold',
      lockPrice: rates.gBuy,
      blockId: rates.blockId,
    };

    if (isAmountMode) {
      payload.amount = Number(amount);
    } else {
      payload.quantity = Number(amount);
    }

    try {
      const response = await createGoldIntentApi(payload);
      console.log('Intent Response:', response);

      if (response?.success && response?.data?.upiDeeplink) {

        // Navigate immediately to status screen
        navigation.navigate('TransactionStatus', {
          merchantRequestId: response.data.merchantTransactionId,
        });

        const supported = await Linking.canOpenURL(response.data.upiDeeplink);

        if (supported) {
          await Linking.openURL(response.data.upiDeeplink);
        } else {
          Alert.alert("Error", "No UPI app found on this device");
        }

      } else {
        Alert.alert("Error", "Intent creation failed");
      }

    } catch (error) {
      console.log('Intent Error:', error);
      Alert.alert("Error", "Something went wrong");
    }
  };
  console.log("SENDING:", {
    metalType: 'gold',
    amount: Number(amount),
    lockPrice: rates?.gBuy,
    blockId: rates?.blockId,
  });

  return (
    <View style={styles.container}>

      <View style={styles.priceCard}>
        <Text style={styles.priceLabel}>Live Gold Price</Text>
        <Text style={styles.priceValue}>
          ₹{goldPrice.toFixed(2)}/gm +3% GST
        </Text>
      </View>

      <View style={styles.toggleContainer}>
        <Text style={[
          styles.toggleText,
          isAmountMode && styles.activeToggleText
        ]}>
          Amount (₹)
        </Text>

        <Switch
          value={!isAmountMode}
          onValueChange={() => setIsAmountMode(!isAmountMode)}
          thumbColor="#FFD700"
          trackColor={{ false: '#333', true: '#333' }}
        />

        <Text style={[
          styles.toggleText,
          !isAmountMode && styles.activeToggleText
        ]}>
          Grams
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={isAmountMode ? "Enter amount" : "Enter grams"}
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          style={styles.input}
        />
        <Text style={styles.currency}>
          {isAmountMode ? "₹" : "g"}
        </Text>
      </View>

      {amount !== '' && !isValid && (
        <Text style={styles.errorText}>
          Minimum investment is ₹10
        </Text>
      )}

      <TouchableOpacity
        disabled={!isValid}
        style={[
          styles.buyButton,
          !isValid && styles.disabledButton
        ]}
        onPress={handleBuy}
      >
        <Text style={styles.buyText}>Buy Gold</Text>
      </TouchableOpacity>

    </View>
  );
};

export default BuyGold;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000307',
    padding: 20,
  },

  priceCard: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#FFD700',
    marginTop: 50
  },

  priceLabel: {
    color: '#aaa',
    fontSize: 14,
  },

  priceValue: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },

  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  toggleText: {
    color: '#888',
    fontSize: 16,
    marginHorizontal: 10,
  },

  activeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  inputContainer: {
    backgroundColor: '#1c2333',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
  },

  currency: {
    color: '#aaa',
    fontSize: 18,
  },

  errorText: {
    color: '#ff4d4d',
    marginTop: 12,
  },

  buyButton: {
    marginTop: 40,
    backgroundColor: '#FFD700',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
  },

  disabledButton: {
    backgroundColor: '#665c00',
  },

  buyText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
