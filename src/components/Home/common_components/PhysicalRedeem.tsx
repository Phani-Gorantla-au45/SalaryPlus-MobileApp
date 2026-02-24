import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TabIcon from '../../../asserts/TabIcon';

const PhysicalRedeem = ({ route, navigation }: any) => {
  const { metal } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <TabIcon name="arrow-back" size={26} color="#FFD700" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Physical {metal}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          24K {metal} Coin Delivery
        </Text>

        <Text style={styles.description}>
          Your {metal.toLowerCase()} will be securely minted and delivered to
          your registered address within 7–8 business days.
        </Text>

        <Text style={styles.description}>
          ✔ 24K purity{"\n"}
          ✔ Insured delivery{"\n"}
          ✔ Tamper-proof packaging
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhysicalRedeem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '600',
  },
  content: {
    marginTop: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  description: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 15,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});