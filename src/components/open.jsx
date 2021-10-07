import React from 'react';
import {StyleSheet, View,Text} from 'react-native';


//paginas
import Cardapio from './cardapio';


export default function open(){
    return(
        <View style={styles.container}>      
            <View style={styles.centro}>
                <Image source={require('../../assets/background.png')} />
            </View>
            <View>
                <Text style={styles.h1}>Com Fome?</Text>
                <Text style={styles.h2}>Nós resolvemos isso</Text>
                <Text style={styles.texto}>Faça seu pedido agora mesmo
                    na IT Burguer e aproveite os
                    descontos e vantagens de
                    nossa plataforma!
                </Text>

                <View style={styles.botoes}>
                <TouchableOpacity>
                    <Text style={styles.btncardapio}>Ver Cardapio
                        onPress={() => {setLoading(true);navigation.navigate('Cardapio')}}
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FEA82F',
        alignItems:'center',
        justifyContent:'center',
    }, 
    h1:{
        fontSize:48,
        margin:20,
        fontWeight:'bold'
    },
    h2:{
        fontSize:26,
        fontWeight:'bold'
    },
    texto:{
        fontSize:18
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
    
    centro:{
        textAlign:'center'
    },
    box:{
        borderWidth:2,
        borderRadius:20,
        borderColor:'#FCECDD',
        margin:10,
        padding:10,
        alignItems:'center',
    }
  });
