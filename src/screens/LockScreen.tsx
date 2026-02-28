import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LockScreen = ({ onUnlock }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Locked</Text>
      <TouchableOpacity style={styles.button} onPress={onUnlock}>
        <Text style={styles.buttonText}>Unlock with Fingerprint</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LockScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  button: { backgroundColor: '#000', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff' },
});