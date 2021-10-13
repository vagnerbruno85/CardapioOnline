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
        fontSize: 48,
        fontWeight:900,
        textAlign: 'center', 
        color: '#464646',
    },

    text2: {
        fontSize: 26,
        fontWeight:500,
        textAlign: 'center',       
        color:'#F26172',
    },
    text3: {
        fontSize: 18,
        fontWeight:500,
        textAlign: 'center',   
        color:'#252525',
    },
    boxA:{
        position:'relative',
        alignItems:'center',
        top: 490,
    },
    boxB:{
        position:'relative',
        alignItems:'center',
        top: 500,
    },
    boxC:{
        position:'relative',
        alignItems:'center',
        top: 550,
    },
    btn:{
        alignItems:'center',
    },

    btncardapio:{
        width: 365,
        height: 57.75,
        top: 631,
        borderRadius:32,
        backgroundColor:'#FF919D',
    },
    textbtn:{
        fontSize: 24,
        fontWeight:500,
        textAlign: 'center',   
        color:'#FFFFFF',
        position: 'relative',
        alignItems: 'center',
        padding:10,
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

    // //Styles página Finalizar Pedido

    txtNomePedido:{
        fontSize:24,
        fontWeight:500,
        color:'#464646',
    },
    txtDescPedido:{
        fontSize:13,
        fontWeight:300,
        color:'#464646',
        marginTop:16,
    },
    txtSubtitulo:{
        fontSize:16,
        fontWeight:500,
        marginTop:16,
    },
    boxPedido: {
        position:'absolute',
        width: '100%',
        height:751,
        left: 0,
        top: 180,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#FFFFFF',
        textAlign: 'left',
        padding:32,
    },
    qtd:{
        borderWidth:1, 
        borderRadius:12, 
        borderColor:'##88888840', 
        flexDirection:'row', 
        width:80,  
        alignItems:'center',
        justifyContent:'center',
        
    },
    input:{
        borderRadius:10,
        borderColor:'black', 
        height:90, 
        padding:20, 
        borderWidth:1,   
    },
    total:{
        fontSize:24,
        fontWeight:500,
        color:'green',
    },
    btnPedido:{
        position:'relative',
        alignItems:'center',
        width: 365,
        height: 57.75,
        marginTop:32,
        top: 400,
        borderRadius:32,
        backgroundColor:'#FF919D',
    },
    txtFinalizar:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:500,
        alignItems:'center',
        fontSize:24,
        padding:10
    },

    // //Style da página Pedido Realizado

    container:{
        display: 'flex',
        flexDirection: 'column',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',

    },
    boxRealizado:{
        height:'auto',
        // padding:32,
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
        padding:32,
    },
    txt3:{
        fontSize:13,
        fontWeight:300,
        color: '#FFFFFF',
        padding:32,
    },
    txtVoltar:{
        textAlign:'center',
        marginTop:150,
        alignItems:'flex-end',
        fontSize:24,
        fontWeight:500,
        color: '#FFFFFF',
        padding:32,
    },
    
})