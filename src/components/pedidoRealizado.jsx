import React from 'react';
import {View,Text,Image, Touchable, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../style/style';



export default function PedidoRealizado({navigation}){
   
    return(
        <LinearGradient colors={['#5EE163', '#4AC964', '#36AF64']}
            style={styles.container}
        >
            <View >
                <Image source={require('../../assets/vector.png')} 
                    style={styles.imgVector}
                ></Image>
                
                <Text style={styles.txt2}>Pedido realizado com sucesso!</Text>
                <Text style={styles.txt3}>Seu pedido está sendo preparado e logo logo saíra para a entrega.</Text>
                
                <View>
                    <TouchableOpacity style={styles.btncardapio} onPress={() => {navigation.navigate('Cardapio')}}>
                        
                        <LinearGradient  
                        style={{
                            position: 'absolute',
                            width: 365,
                            height: 57.75,
                            borderRadius: 32}}
                            colors={['#F26172','#FF919D']
                        }>
                            <Text >Voltar para o cardápio</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}