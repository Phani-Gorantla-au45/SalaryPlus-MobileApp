import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoldSIP = () => {
  const navigation = useNavigation<any>();

  const SIPCard = (
    title: string,
    subtitle: string,
    type: string
  ) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate(type, { metal: 'Gold' })
      }
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSub}>{subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Gold SIP</Text>
        <View style={{ width: 30 }} />
      </View>

      <Text style={styles.sectionTitle}>Start a SIP</Text>

      <View style={styles.grid}>
        {SIPCard('Monthly SIP', 'Save to reach financial goals', 'MonthlySIP')}
        {SIPCard('Daily SIP', 'Turn daily savings into returns', 'DailySIP')}
        {SIPCard('Weekly SIP', 'Build wealth weekly', 'WeeklySIP')}
      </View>
    </View>
  );
};

export default GoldSIP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  backArrow: {
    fontSize: 26,
    color: '#fff',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  grid: {
    gap: 20,
  },

  card: {
    backgroundColor: '#111c2f',
    padding: 25,
    borderRadius: 20,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  cardSub: {
    color: '#aaa',
  },
});
