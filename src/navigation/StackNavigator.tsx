import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import BuyGold from '../screens/Home/Gold/BuyGold';
import GoldSIP from '../screens/Home/Gold/GoldSIP';
import BuySilver from '../screens/Home/Silver/BuySilver';
import SilverSIP from '../screens/Home/Silver/SilverSIP';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="MainTabs" component={BottomTabs} />

      <Stack.Screen name="BuyGold" component={BuyGold} />
      <Stack.Screen name="GoldSIP" component={GoldSIP} />
      <Stack.Screen name="BuySilver" component={BuySilver} />
      <Stack.Screen name="SilverSIP" component={SilverSIP} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
