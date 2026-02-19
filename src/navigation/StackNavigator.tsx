import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTabs from './BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BuyGold from '../components/Home/Gold/BuyGold';
import GoldSIP from '../components/Home/Gold/GoldSIP';
import BuySilver from '../components/Home/Silver/BuySilver';
import SilverSIP from '../components/Home/Silver/SilverSIP';
import TransactionHistory from '../components/Home/QuickActions/TransactionHistory';
import SideDrawer from '../components/Home/common/SideDrawer';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('USER_TOKEN');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  // 🔥 Listen for storage changes (important after login/logout)
  useEffect(() => {
    const interval = setInterval(() => {
      checkLogin();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (isLoggedIn === null) {
    return null; // can add splash screen here
  }

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Otp" component={OtpScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>

      <SideDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </>
  );
};

export default StackNavigator;
