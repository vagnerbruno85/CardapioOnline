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
    }

    // //Style da página Content
    
    // //Styles página IMC
    
    // //Style da página Informação
    
    // //Styles Footer
      
});