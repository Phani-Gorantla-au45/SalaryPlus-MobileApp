import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MonthlySIP = ({ route, navigation }: any) => {
  const { metal } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Monthly {metal} SIP
      </Text>

      <Text style={styles.desc}>
        Invest monthly and reach your long-term financial goals.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Monthly SIP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MonthlySIP;
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