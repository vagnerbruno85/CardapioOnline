import React from "react";
import {SafeAreaView, View, Text, Image,TouchableOpacity} from 'react-native';
import { styles } from "../style/style";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}){

    return (
        <SafeAreaView style={styles.home}>
            <Image source={require('../../assets/background.png')}
                    style={styles.imageHome}
            />
            <Text> Home</Text>
            <View style={styles.boxHome}></View>
            <View style={styles.boxA}><Text style={styles.text1}>Com fome?</Text></View>
            <View style={styles.boxB}><Text style={styles.text2}>Nós resolvemos isso</Text></View>
            <View style={styles.boxC}><Text style={styles.text3}>Faça seu pedido agora mesmo
                    na IT Burguer e aproveite os descontos e vantagens de nossa plataforma!</Text></View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btncardapio} 
                    onPress={() => {navigation.navigate('Cardapio')}}>
                    <LinearGradient 
                        style={{
                            position: 'absolute',
                            width: 365,
                            height: 57.75,
                            borderRadius: 32}}
                            colors={['#F26172','#FF919D']
                        }>
                        <Text style={styles.textbtn} >Ver Cardapio</Text>   
                    </LinearGradient>
                        
                </TouchableOpacity>
            </View>                
            
        </SafeAreaView>
    );
}