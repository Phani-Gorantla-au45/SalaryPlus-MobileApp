import React, { useEffect, useState } from 'react';
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
import SideDrawer from '../components/Menu/SideDrawer';
import RedeemOptions from '../components/Home/common_components/RedeemOptions';
import TransactionStatus from '../screens/TransactionStatus';
import PhysicalRedeem from '../components/Home/common_components/PhysicalRedeem';
import BankTransferRedeem from '../components/Home/common_components/BankTransferRedeem';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('USER_TOKEN');
      setInitialRoute(token ? 'MainTabs' : 'Login');
    };

    checkToken();
  }, []);

  if (!initialRoute) {
    return null; // splash can be added
  }

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="MainTabs">
          {() => (
            <BottomTabs openDrawer={() => setDrawerVisible(true)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="BuyGold" component={BuyGold} />
        <Stack.Screen name="GoldSIP" component={GoldSIP} />
        <Stack.Screen name="BuySilver" component={BuySilver} />
        <Stack.Screen name="SilverSIP" component={SilverSIP} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
        <Stack.Screen name="RedeemOptions" component={RedeemOptions} />
        <Stack.Screen name="PhysicalRedeem" component={PhysicalRedeem} />
        <Stack.Screen name="BankTransferRedeem" component={BankTransferRedeem} />
        <Stack.Screen name="TransactionStatus" component={TransactionStatus} options={{ headerShown: false }} />
      </Stack.Navigator>

      <SideDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />


    </>
  );
};

export default StackNavigator;