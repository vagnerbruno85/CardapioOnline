import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
    
    //Styles Home.jsx
    home: {
        flex:1,
        flexDirection: 'column', 
    },
    imageHome: {
        position: 'absolute',
        width:'100%',
        height:511,
        left:0,
        top:0,
    },
    boxHome: {
        position:'absolute',
        width: '100%',
        height: 463,
        left: 0,
        top: 463,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#FFFFFF',
        textAlign: 'center'
    },
    text1: {
        // fontFamily: 'Roboto-Black',
        fontSize: 48,
        fontWeight:900,
        textAlign: 'center', 
        color: '#464646',
    },

    text2: {
        // fontFamily: 'Roboto-Black',
        fontSize: 26,
        fontWeight:500,
        textAlign: 'center',       
        color:'#F26172',
    },
    text3: {
        // fontFamily: 'Roboto-Black',
        fontSize: 18,
        fontWeight:500,
        textAlign: 'center',   
        color:'#252525',
    },
    boxA:{
        // position: 'absolute',
        position:'relative',
        alignItems:'center',
        // width: 264,
        // height: 56, 
        // left: 89,
        top: 495,
    },
    boxB:{
        // position: 'absolute',
        position:'relative',
        alignItems:'center',
        // width: 244,
        // height: 30,
        // left: 91,
        top: 551,
    },
    boxC:{
        // position:'absolute',
        position:'relative',
        alignItems:'center',
        // width: 241,
        // height:84,
        // left: 93,
        top: 613,
    },
    btncardapio:{
        // position: 'absolute',
        position:'relative',
        alignItems:'center',
        // width: 365,
        // height: 57.75,
        // left: 31,
        top: 831,
        borderRadius:32,
        backgroundColor:'#FF919D',
    },
    textbtn:{
        // fontFamily: 'Roboto-Black',
        fontSize: 24,
        fontWeight:500,
        textAlign: 'center',   
        color:'#FFFFFF',
        // position: 'absolute',
        position: 'relative',
        alignItems: 'center',
        // width: 180,
        // height: 24.5,
        // left: 146,
        top: 848,
    },

    // //Style da página Cardapio
    marca:{
        margin: 32,
    },
    txtMarca:{
        fontSize: 24,
        color: '#464646',
    },
    subtxtMarca:{
        fontSize:16,
        color:'#6D6D6D',
    },
    imgCardapio: {
        width: 'auto',
        height: 200,
    },
    txtCategoria:{
        color:'#696969',
        fontSize:20,
    },
    itemGeral:{
        marginVertical: 12, 
        backgroundColor: '#BFBFBF30', 
        borderRadius: 32, 
        flexDirection: 'row',
    },
    itemDesc:{
        width: '60%', 
        margin:12, 
        // paddingVertical: 0,
        justifyContent:'space-around',
    },
    txtProduto:{
        fontSize:16,
        fontWeight:500,
        color:'#696969',
    },
    imgProdutos:{ 
        width: 120, 
        height: 140, 
        borderTopLeftRadius: 32, 
        borderBottomLeftRadius: 32,
    },
    txtNome:{
        fontSize:16,
        color: '#696969',
    },
    txtDescricao:{
        fontSize:11,
        color:'#888888',
        paddingRight:16,
    },
    txtPreco:{
        textAlign: 'right', 
        color:'green',
        marginRight: 32,
    },
    boxCategoria:{
        margin:32,
    },
    boxProduto:{
        width: '100%', 
        height: 160,
    },

    // //Styles página ...
    
    // //Style da página Pedido Realizado

    container:{
        display: 'flex',
        flexDirection: 'column',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    imgVector:{
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        color:"#FFFFFF",
    },
    txt2:{
        fontSize:24,
        fontWeight:500,
        color: '#FFFFFF',
    },
    txt3:{
        fontSize:13,
        fontWeight:300,
        color: '#FFFFFF',
    },
    
})