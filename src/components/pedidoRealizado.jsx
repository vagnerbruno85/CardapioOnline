import React from 'react';
import {View,Text} from 'react-native';

export default function PedidoRealizado({navigation}){
   
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/Vector.png')} />
            <Text style={styles.texto1}>Pedido realizado com sucesso!</Text>
            <Text style={styles.texto2}>Seu pedido está sendo preparado e logo logo saíra para a entrega.</Text>
            <Text style={styles.voltar}>Voltar para o cardápio</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:' #E5E5E5',
        alignItems:'center',
        padding:12
    },
    texto1:{
        fontSize:24,
        fontWeight:'bold',
        padding:12
    },
    texto2:{
        fontSize:13,
        fontWeight:'bold',
        padding:12
    },
    botoes:{
        flexDirection:'row',
        marginBottom:20
        
    },
    btncardapio:{
        fontSize:24,
        backgroundColor:'#F26172',
        color:'white',
        marginHorizontal:10,
        borderWidth:2,
        borderRadius:20,
        width:80,
        textAlign:'center',
        padding:'2%'
    },
});
