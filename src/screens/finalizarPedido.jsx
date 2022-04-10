import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput} from 'react-native';
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