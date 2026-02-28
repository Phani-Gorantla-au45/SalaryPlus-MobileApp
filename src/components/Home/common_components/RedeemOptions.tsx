import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TabIcon from '../../../asserts/TabIcon';

const RedeemOptions = ({ route, navigation }: any) => {
  const { metal } = route.params;
  const isGold = metal === 'Gold';
  const accentColor = isGold ? '#D4AF37' : '#BFC1C2';

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <TabIcon name="arrow-back" size={26} color={accentColor} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Redeem Options</Text>
      </View>

      <Text style={styles.subText}>
        Choose how you want to redeem your {metal.toLowerCase()}
      </Text>

      {/* Physical Option */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('PhysicalRedeem', { metal })
        }
      >
        <View>
          <Text style={styles.cardTitle}>
            Physical {metal}
          </Text>
          <Text style={styles.cardDesc}>
            24k {metal} Secured via Augmont{"\n"}
            Get {metal.toLowerCase()} coin delivered in 7-8 days{"\n"}
            Delivery Protection
          </Text>
        </View>
        <Text style={[styles.arrow, { color: accentColor }]}>›</Text>
      </TouchableOpacity>

      {/* Bank Transfer */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('BankTransferRedeem', { metal })
        }
      >
        <View>
          <Text style={styles.cardTitle}>Bank Transfer</Text>
          <Text style={styles.cardDesc}>
            Get your money deposited to your bank account within 24-48 hours
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RedeemOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    color: '#F5F5F5',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '600',
  },

  subText: {
    color: '#9CA3AF',
    marginBottom: 30,
    fontSize: 14,
  },

  card: {
    backgroundColor: '#1E1E1E',
    padding: 22,
    borderRadius: 18,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  cardTitle: {
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },

  cardDesc: {
    color: '#9CA3AF',
    fontSize: 13,
    lineHeight: 20,
  },

  arrow: {
    color: '#9CA3AF',
    fontSize: 24,
  },
});