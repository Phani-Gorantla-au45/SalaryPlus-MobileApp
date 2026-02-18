import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import BuyGold from '../components/Home/Gold/BuyGold';
import GoldSIP from '../components/Home/Gold/GoldSIP';
import BuySilver from '../components/Home/Silver/BuySilver';
import SilverSIP from '../components/Home/Silver/SilverSIP';
import TransactionHistory from '../components/Home/QuickActions/TransactionHistory';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="MainTabs" component={BottomTabs} />

      <Stack.Screen name="BuyGold" component={BuyGold} />
      <Stack.Screen name="GoldSIP" component={GoldSIP} />
      <Stack.Screen name="BuySilver" component={BuySilver} />
      <Stack.Screen name="SilverSIP" component={SilverSIP} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory}/>

    </Stack.Navigator>
  );
};

export default StackNavigator;
