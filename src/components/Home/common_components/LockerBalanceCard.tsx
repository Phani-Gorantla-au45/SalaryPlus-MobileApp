import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  metal: 'Gold' | 'Silver';
  quantity: number;
  value: number;
}

const LockerBalanceCard: React.FC<Props> = ({
  metal,
  quantity,
  value,
}) => {
  const navigation = useNavigation<any>(); // ✅ inside component

  const isGold = metal === 'Gold';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Your {metal} Holdings
      </Text>

      <View style={styles.valueBox}>
        <View>
          <Text style={styles.label}>Current Value</Text>
          <Text
            style={[
              styles.value,
              { color: isGold ? '#FFD700' : '#C0C0C0' },
            ]}
          >
            ₹ {value?.toFixed(2) ?? '0.00'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View>
          <Text style={styles.label}>
            {metal} Quantity
          </Text>
          <Text style={styles.quantity}>
            {quantity ?? 0} mg
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isGold ? '#FFD700' : '#C0C0C0' },
        ]}
        onPress={() =>
          navigation.navigate('RedeemOptions', { metal })
        }
      >
        <Text style={styles.buttonText}>
          Withdraw {metal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LockerBalanceCard;
const styles = StyleSheet.create({
  card: {
    marginTop: 25,
    padding: 22,
    backgroundColor: '#1E1E1E',
    borderRadius: 22,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F5F5F5',
    marginBottom: 18,
  },

  valueBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#252525',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
  },

  label: {
    color: '#9CA3AF',
    fontSize: 13,
    letterSpacing: 0.3,
  },

  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6,
  },

  quantity: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginTop: 6,
  },

  divider: {
    width: 1,
    height: 45,
    backgroundColor: '#2F2F2F',
  },

  button: {
    marginTop: 25,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#121212',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});