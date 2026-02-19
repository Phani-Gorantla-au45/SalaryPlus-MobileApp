import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import BuyGold from '../components/Home/Gold/BuyGold';
import GoldSIP from '../components/Home/Gold/GoldSIP';
import BuySilver from '../components/Home/Silver/BuySilver';
import SilverSIP from '../components/Home/Silver/SilverSIP';
import TransactionHistory from '../components/Home/QuickActions/TransactionHistory';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SideDrawer from '../components/Home/common/SideDrawer';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="MainTabs">
          {() => (
            <BottomTabs openDrawer={() => setDrawerVisible(true)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="BuyGold" component={BuyGold} />
        <Stack.Screen name="GoldSIP" component={GoldSIP} />
        <Stack.Screen name="BuySilver" component={BuySilver} />
        <Stack.Screen name="SilverSIP" component={SilverSIP} />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>

      <SideDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </>
  );
};

export default StackNavigator;
