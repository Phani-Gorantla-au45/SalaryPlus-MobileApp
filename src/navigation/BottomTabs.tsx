import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../asserts/TabIcon';

import Home from '../screens/HomeScreen';
import Bonds from '../screens/BondsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ openDrawer }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          let iconName: 'home' | 'bonds';

          if (route.name === 'Home') {
            iconName = 'home';
          } else {
            iconName = 'bonds';
          }

          return (
            <TabIcon name={iconName} color={color} size={size} />
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
