import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Gold from '../components/Home/Gold';
import Silver from '../components/Home/Silver';
import TabIcon from '../asserts/TabIcon';

const Home = ({ openDrawer }: any) => {
  const [active, setActive] = useState<'gold' | 'silver'>('gold');

  return (
    <View style={styles.root}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <TabIcon name="menu" size={26} color="#1E293B" />
        </TouchableOpacity>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.container}>

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

        {active === 'gold' ? <Gold /> : <Silver />}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000307',
  },

  header: {
    height: 90,
    backgroundColor: '#FFD700',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#000001',
    padding: 5,
    marginTop: 20,
    borderRadius: 8,
  },

  toggleButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 6,
  },

  activeGold: {
    backgroundColor: '#FFD700',
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
