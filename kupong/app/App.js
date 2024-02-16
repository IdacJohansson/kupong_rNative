import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import CouponScreen from './screens/CouponScreen';
import CouponScreenDetails from './screens/CouponScreenDetails';

const Stack = createStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider style={{ flex: 1 }}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CuponShop" component={CouponScreen} />
        <Stack.Screen name="CuponDetails" component={CouponScreenDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  ); 
}