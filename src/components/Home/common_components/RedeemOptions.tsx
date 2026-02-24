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

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <TabIcon name="arrow-back" size={26} color="#FFD700" />
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
        <Text style={styles.arrow}>›</Text>
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
    backgroundColor: '#000814',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '600',
  },
  subText: {
    color: '#aaa',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#0F172A',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  cardDesc: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 18,
  },
  arrow: {
    color: '#aaa',
    fontSize: 22,
  },
});