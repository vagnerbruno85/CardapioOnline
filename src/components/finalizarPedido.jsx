import React, {useEffect,useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default function FinalizarPedido({navigation}){
    
    
    return(
        <View>
            <View> 
                <Image source={require('../../assets/Card.png')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.h1}>Nome do Combo</Text>
            </View>
            <View style={styles.botoes}>
                <TouchableOpacity>
                    <Text style={styles.btncardapio}
                        onPress={() => {navigation.navigate('PedidoRealizado')}}>Finalizar Pedido  
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        padding:12
    },
    h1:{
        fontSize:20,
        fontWeight:'bold',
        padding:12
    },
    input:{
        height:60,
        width:'90%',
        borderWidth:1,
        padding:10,
        marginTop:5,          
    },
    alert:{
        color:'red'
    }
});
