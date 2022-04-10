import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../style/style';

export default function PedidoRealizado({navigation}){
   
    return(
        <LinearGradient colors={['#5EE163', '#4AC964', '#36AF64']}
            style={styles.container}
        >
            <View style={styles.boxRealizado}>
                <Image source={require('../../assets/Vector.png')} 
                    style={styles.imgVector}
                ></Image>
                
                <Text style={styles.txt2}>Pedido realizado com sucesso!</Text>
                <Text style={styles.txt3}>Seu pedido está sendo preparado e logo logo saíra para a entrega.</Text>
                
                <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Cardapio')}}>
                            <Text style={styles.txtVoltar} >Voltar para o cardápio</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}