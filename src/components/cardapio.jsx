import React, { useEffect, useState } from 'react';
import {View, Text,FlatList,Image, TouchableOpacity,ActivityIndicator} from 'react-native';
import { styles } from "../style/style";



export default function Cardapio({navigation}){
    const [menu, setMenu] = useState([])
    const [isLoading, setLoading] = useState(true);

    const pegaMenu = async () => {
        try {
            const produtos = await fetch('https://615b13564a360f0017a8147e.mockapi.io/menu');
            const menu = await produtos.json();
            setMenu(menu[0]);
            console.log(menu);
            
        }catch (error) {
            console.error(error);

        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        pegaMenu();
    },[]);

return (
    <View>
        <Image source={require('../../assets/burger.png')} style={styles.imgCardapio}/>
        <View style={styles.marca}>
            <Text style={styles.txtMarca}>{menu.name}</Text>
            <Text style={styles.subtxtMarca}>{menu.type}, {menu.distance}, {menu.stars}</Text>   
        </View>
        <View style={styles.boxCategoria}>
            <Text style={styles.txtCategoria}>Combos</Text>
            <View style={styles.boxProduto}>
                {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={menu.combos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('FinalizarPedido',{itemImg:item.image, itemDesc:item.description, itemName:item.name, otherParam:item.price}) }}>
                            <View style={styles.itemGeral}>
                                <Image source={{ uri: item.image }} style={styles.imgProdutos}/>
                                <View style={styles.itemDesc}>
                                    <Text style={styles.txtProduto}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.txtDescricao}>
                                        {item.description}
                                    </Text>
                                    <Text style={styles.txtPreco}>
                                        R$ {item.price}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                )}
            </View>
        </View>
        <View style={styles.boxCategoria}>
            <Text style={styles.txtCategoria}>Bebidas</Text>
            <View style={styles.boxProduto}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={menu.drinks}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                            onPress={() => { navigation.navigate('PedidoRealizado', {itemImg:item.image, itemName:item.name, itemDesc:item.description, otherParam: item.price}) }}>
                                <View style={styles.itemGeral}>
                                    <Image source={{ uri: item.image }} style={styles.imgProdutos}/>
                                    <View style={styles.itemDesc}>
                                        <Text style={styles.txtProduto}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.txtDescricao}>
                                            {item.description}
                                        </Text>
                                        <Text style={styles.txtPreco}>
                                            R$ {item.price}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </View>
    </View>

);
}