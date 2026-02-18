import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';

const BuyGold = () => {
  const [amount, setAmount] = useState('');
  const [isAmountMode, setIsAmountMode] = useState(true);

  const numericAmount = Number(amount);
  const isValid = numericAmount >= 10;

  return (
    <View style={styles.container}>

      {/* Live Price Card */}
      <View style={styles.priceCard}>
        <Text style={styles.priceLabel}>Live Gold Price</Text>
        <Text style={styles.priceValue}>₹15661.15/gm +3% GST</Text>
      </View>

      {/* Toggle */}
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

      {/* Input */}
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

      {/* Validation */}
      {amount !== '' && !isValid && (
        <Text style={styles.errorText}>
          Minimum investment is ₹10
        </Text>
      )}

      {/* Buy Button */}
      <TouchableOpacity
        disabled={!isValid}
        style={[
          styles.buyButton,
          !isValid && styles.disabledButton
        ]}
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
    marginTop:50
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
