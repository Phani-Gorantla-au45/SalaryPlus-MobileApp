import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DailySIP = ({ route, navigation }: any) => {
  const { metal } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Daily {metal} SIP
      </Text>

      <Text style={styles.desc}>
        Invest small amounts every day and grow your {metal.toLowerCase()} steadily.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Daily SIP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailySIP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
    padding: 20,
  },
  back: {
    fontSize: 26,
    color: '#fff',
  },
  title: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  desc: {
    color: '#aaa',
    marginTop: 15,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});