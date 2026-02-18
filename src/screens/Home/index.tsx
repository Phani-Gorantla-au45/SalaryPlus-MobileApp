import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// ✅ Import module index files instead of internal components
import Gold from './Gold';
import Silver from './Silver';

const Home = () => {
  const [active, setActive] = useState<'gold' | 'silver'>('gold');

  return (
    <View style={styles.container}>

      {/* Toggle FIRST */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            active === 'gold' && styles.activeGold,
          ]}
          onPress={() => setActive('gold')}
        >
          <Text
            style={[
              styles.toggleText,
              active === 'gold' && styles.activeText,
            ]}
          >
            Gold
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            active === 'silver' && styles.activeSilver,
          ]}
          onPress={() => setActive('silver')}
        >
          <Text
            style={[
              styles.toggleText,
              active === 'silver' && styles.activeText,
            ]}
          >
            Silver
          </Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Render Module Index Files */}
      {active === 'gold' ? <Gold /> : <Silver />}

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000307',
    paddingHorizontal: 20,
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#000001',
    padding: 5,
    marginTop: 80,
  },

  toggleButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },

  activeGold: {
    backgroundColor: '#f1de0b',
  },

  activeSilver: {
    backgroundColor: '#C0C0C0',
  },

  toggleText: {
    color: '#aaa',
    fontWeight: '600',
  },

  activeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
