import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import Home from './src/components/home';
import Cardapio from './src/components/cardapio';
import PedidoRealizado from './src/components/pedidoRealizado';
import FinalizarPedido from './src/components/finalizarPedido';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cardapio" component={Cardapio}/>
        <Stack.Screen name="PedidoRealizado" component={PedidoRealizado}/>
        <Stack.Screen name="FinalizarPedido" component={FinalizarPedido}/>
      </Stack.Navigator> 
    </NavigationContainer>
  ); 
}