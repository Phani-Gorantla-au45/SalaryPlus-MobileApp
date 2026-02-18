import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
       <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
