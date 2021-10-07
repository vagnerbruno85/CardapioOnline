import React, {useEffect,useState} from 'react';
import {StyleSheet, Button, View,Text,FlatList} from 'react-native';

export default function Cardapio({navigation}){
 

    const pegadadosmenu = () => {
    return fetch('https://615b13564a360f0017a8147e.mockapi.io/menu')
        .then((response) => response.json())
        .then((json) => {
        return json;
        })
        .catch((error) => {
        console.error(error);
        });
    };
    const pegadadoscombos = () => {
        return fetch('https://615b13564a360f0017a8147e.mockapi.io/combos')
            .then((combos) => combos.json())
            .then((json) => {
            return json;
            })
            .catch((error) => {
            console.error(error);
            });
        };
    const pegadadosdrinks = () => {
        return fetch('https://615b13564a360f0017a8147e.mockapi.io/drinks')
            .then((drinks) => drinks.json())
            .then((json) => {
            return json;
            })
            .catch((error) => {
            console.error(error);
            });
        };
      
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Combos </Text>
            <FlatList
                data={state}
                renderItem={({ item })  => (
                <View style={styles.box} >
                    <Text>{item.img}</Text>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Descrição: {item.descrição}</Text>

                </View>
                )}    
            />
            <Text style={styles.h1}>Bebidas </Text>
            <FlatList
                data={state}
                renderItem={({ item })  => (
                <View style={styles.box} >
                    <Text>{item.img}</Text>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Descrição: {item.descrição}</Text>

                </View>
                )}    
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#FCECDD',
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
    box:{
        backgroundColor: 'white',
        borderWidth:2,
        borderRadius:10,
        margin:20,
        padding:30,
    }
});