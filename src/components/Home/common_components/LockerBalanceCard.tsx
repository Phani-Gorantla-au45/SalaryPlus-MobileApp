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
        Your {metal} Locker Balance
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
    padding: 20,
    backgroundColor: '#0F172A',
    borderRadius: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
  },

  valueBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  label: {
    color: '#aaa',
    fontSize: 13,
  },

  value: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#334155',
  },

  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});