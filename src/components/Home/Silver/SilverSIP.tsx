import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SilverSIP = () => {
  const navigation = useNavigation<any>();

  const SIPCard = (
    title: string,
    subtitle: string,
    screenName: string
  ) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate(screenName, { metal: 'Silver' })
      }
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSub}>{subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Silver SIP</Text>

        <View style={{ width: 30 }} />
      </View>

      <Text style={styles.sectionTitle}>Start a SIP</Text>

      <View style={styles.grid}>
        {SIPCard(
          'Monthly SIP',
          'Save to reach financial goals',
          'MonthlySIP'
        )}
        {SIPCard(
          'Daily SIP',
          'Turn daily savings into returns',
          'DailySIP'
        )}
        {SIPCard(
          'Weekly SIP',
          'Build wealth weekly',
          'WeeklySIP'
        )}
      </View>

    </View>
  );
};

export default SilverSIP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // premium dark
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  backArrow: {
    fontSize: 26,
    color: '#BFC1C2', // metallic silver
  },

  headerTitle: {
    color: '#F5F5F5',
    fontSize: 20,
    fontWeight: '700',
  },

  sectionTitle: {
    color: '#BFC1C2', // accent silver
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 25,
  },

  grid: {
    gap: 20,
  },

  card: {
    backgroundColor: '#1E1E1E',
    padding: 24,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  cardTitle: {
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  cardSub: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 20,
  },
});