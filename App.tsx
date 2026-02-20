import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import StackNavigator from './src/navigation/StackNavigator';
import { RatesProvider } from './src/context/RatesContext';

const App = () => {
  return (
    <RatesProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </RatesProvider>
  );
};

export default App;
