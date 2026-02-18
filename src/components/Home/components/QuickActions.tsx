import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TabIcon from '../../../IconComponent/TabIcon';

const QuickActions = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>QUICK ACTION</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('TransactionHistory')}
      >
        <TabIcon name="receipt-outline" size={22} color="#FFD700" />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Transaction History</Text>
          <Text style={styles.subtitle}>
            View all your transactions
          </Text>
        </View>

        <TabIcon name="chevron-forward" size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  heading: {
    color: '#888',
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  subtitle: {
    color: '#888',
    fontSize: 12,
    marginTop: 3,
  },
});
