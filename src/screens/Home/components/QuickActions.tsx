import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QuickActions = () => {
  const actions = [
    {
      title: 'Sell Gold',
      subtitle: 'Get instant payouts',
      icon: 'arrow-up-circle-outline',
    },
    {
      title: 'Transaction History',
      subtitle: 'View all your transactions',
      icon: 'receipt-outline',
    },
    {
      title: 'Contact Us',
      subtitle: 'Get in touch with us',
      icon: 'chatbubble-outline',
    },
    {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to your questions',
      icon: 'help-circle-outline',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>QUICK ACTIONS</Text>

      {actions.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Ionicons name={item.icon} size={22} color="#FFD700" />
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      ))}
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
