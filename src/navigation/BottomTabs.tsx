import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import TabIcon from '../asserts/TabIcon';

import Home from '../screens/HomeScreen';
import Bonds from '../screens/BondsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ openDrawer }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: styles.tabBar,

        tabBarActiveTintColor: '#D4AF37', // metallic gold
        tabBarInactiveTintColor: '#6B7280', // softer grey

        tabBarLabelStyle: styles.label,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: 'home' | 'bonds';

          if (route.name === 'Home') {
            iconName = 'home';
          } else {
            iconName = 'bonds';
          }

          return (
            <View style={focused ? styles.activeIconContainer : undefined}>
              <TabIcon name={iconName} color={color} size={size} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home">
        {() => <Home openDrawer={openDrawer} />}
      </Tab.Screen>

      <Tab.Screen name="Bonds" component={Bonds} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#121212', // premium dark
    borderTopColor: '#1E1E1E',
    borderTopWidth: 1,
    height: 65,
    paddingBottom: 8,
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },

  activeIconContainer: {
    padding: 6,
    borderRadius: 12,
  },
});