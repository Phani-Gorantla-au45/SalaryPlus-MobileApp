import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import StackNavigator from './src/navigation/StackNavigator';
import { RatesProvider } from './src/context/RatesContext';
import AppLockProvider from './src/screens/AppLockProvider';

const App = () => {
  return (
    <RatesProvider>
      <AppLockProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AppLockProvider>
    </RatesProvider>
  );
};

export default App;
