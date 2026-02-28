import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DailySIP = ({ route, navigation }: any) => {
  const { metal } = route.params;

  const isGold = metal === 'Gold';
  const accentColor = isGold ? '#D4AF37' : '#BFC1C2';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={[styles.back, { color: accentColor }]}>←</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { color: accentColor }]}>
        Daily {metal} SIP
      </Text>

      <Text style={styles.desc}>
        Invest small amounts every day and grow your {metal.toLowerCase()} steadily.
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: accentColor }]}
      >
        <Text style={styles.buttonText}>Start Daily SIP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailySIP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  back: {
    fontSize: 26,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 25,
  },

  desc: {
    color: '#9CA3AF',
    marginTop: 18,
    fontSize: 14,
    lineHeight: 22,
  },

  button: {
    marginTop: 45,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});