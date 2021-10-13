import React, {useEffect,useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image,TextInput} from 'react-native';
import {styles} from '../style/style';
import { LinearGradient } from 'expo-linear-gradient';


export default function FinalizarPedido({navigation, route}){
    const { itemImg, itemName, itemDesc, itemId, otherParam } = route.params;
    
    const [qtd, setQtd] = useState(1);
    const soma = () => setQtd(qtd => qtd + 1);
    const subtracao = () => setQtd(qtd => qtd - 1);
    console.log(route);
    console.log(otherParam);
    console.log(itemImg);
    return(
        <View>
            <View>
                <Image source={{ uri: itemImg }}  style={styles.imgCardapio}/>
            </View>
           
            <View style={styles.boxPedido}>
                
                <Text style={styles.txtNomePedido}>{(itemName)}</Text>
                <Text style={styles.txtDescPedido}>{itemDesc}</Text>
                <Text style={styles.txtSubtitulo}>Quantidade</Text>

                <View style={styles.qtd}>
                    <TouchableOpacity onPress={subtracao}>
                        <Text style={{fontSize:20, color:'red', marginRight:10}}> - </Text>
                    </TouchableOpacity>
                    <Text>{qtd}</Text>
                    <TouchableOpacity onPress={soma}>
                        <Text style={{fontSize:20, color:'red', marginLeft:10}}> + </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txtSubtitulo}>
                        Observações
                    </Text>
                    <TextInput style={styles.input} placeholder='Digite sua observação aqui.' ></TextInput>
                    <Text style={styles.txtSubtitulo}>
                        Total
                    </Text>
                    <Text style={styles.total}>
                        R$ {parseInt(otherParam) * qtd},00
                    </Text>
                </View>
            </View>
            <View >
                <TouchableOpacity style={styles.btnPedido} 
                onPress={() => {navigation.navigate('PedidoRealizado')}}>
                    <LinearGradient 
                        style={{
                            position: 'absolute',
                            width: 365,
                            height: 57.75,
                            borderRadius: 32}}
                            colors={['#F26172','#FF919D']
                        }>
                        <Text style={styles.txtFinalizar}>Finalizar Pedido</Text>
                    </LinearGradient>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}


// import React, {useEffect, useState} from "react";
// import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// export default function Pedido({navigation, route}){
//     const { itemDesc, itemName, itemId, otherParam } = route.params;
//     const [qnt, setQnt] = useState(0);
//     const soma = () => setQnt(qnt => qnt + 1);
//     const subtracao = () => setQnt(qnt => qnt - 1);

// return (
//     <ScrollView style={{}}>
//         <ImageBackground source={require('../../image/cardImage.png')} style={{width:'100%', height:'60%'}}>
            
//         </ImageBackground>
        
//         <View style={{flexDirection:'column', borderTopLeftRadius:20, borderTopRightRadius:20,backgroundColor:'white', bottom:200, height:'auto', marginBottom:230 }}>
//             <Text style={{marginLeft:20, marginTop:20, fontSize:25, fontWeight:'bold'}}>
//             {JSON.stringify(itemName)}
//             </Text>
//             <Text style={{marginLeft:20,textAlign:'justify'}}>
//                 {itemDesc}
//             </Text>
//             <Text style={{margin:20, fontSize:15, fontWeight:'bold'}}>
//                 Quantidade
//             </Text>
            // <View style={{borderWidth:1, borderRadius:10, borderColor:'black', flexDirection:'row', width:80, marginLeft:20, alignItems:'center',justifyContent:'center' }}>
            //     <TouchableOpacity onPress={subtracao}>
            //          <Text style={{fontSize:20, color:'red', marginRight:10}}> - </Text>
            //     </TouchableOpacity>
            //     <Text>{qnt}</Text>
            //     <TouchableOpacity onPress={soma}>
            //          <Text style={{fontSize:20, color:'red', marginLeft:10}}> + </Text>
            //     </TouchableOpacity>


            // </View>
//             <Text style={{margin:20, fontSize:15, fontWeight:'bold'}}>
//                Observações
//             </Text>
//             <TextInput style={{borderRadius:10,borderColor:'black', width:'90%', padding:20, borderWidth:1 , marginLeft:20}}placeholder='Digite sua observação aqui.' ></TextInput>

//             <Text style={{marginLeft:20, fontSize:15, fontWeight:'bold'}}>
//                 Total
//             </Text>
//             <Text style={{marginLeft:20, fontSize:15, fontWeight:'bold'}}>
//                 R${otherParam * qnt} 
//             </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Finalizado')} style={{backgroundColor:'pink', margin:20, borderRadius:20, padding:10}}>
//                 <Text style={{fontSize:20, textAlign:'center'}}>Fazer pedido</Text>
                
//             </TouchableOpacity> 

//         </View>
        
//     </ScrollView>
// );
// }
