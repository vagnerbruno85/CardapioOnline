import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import Home from './src/components/home';
import Cardapio from './src/components/cardapio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cardapio" component={Cardapio}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}