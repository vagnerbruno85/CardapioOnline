import React from 'react';
import{createStackNavigator} from '@react-navigation/stack';
import { navegationContainer } from '@react-navigation/native';

//paginas
import open from './open';
import FinalizarPedido from './finalizarPedido';
import Cardapio from './cardapio';
import PedidoRealizado from './pedidoRealizado';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function Home(){
    return(
        
        <NavigationContainer>
            <StatusBar/>
            <Stack.Navigator initialRouteName="open">
                <Stack.Screen name="Open" component={open} />
                <Stack.Screen name="Cardapio" component={Cardapio} /> 
                <Stack.Screen name="FinizarPedido" component={FinalizarPedido} /> 
                <Stack.Screen name="PedidoRealizado" component={PedidoRealizado} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}