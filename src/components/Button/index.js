import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'

export default function Button(title, onPress){

    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.btnMenu}
                    onPress={onPress}>
                    <LinearGradient 
                            colors={['#F26172','#FF919D']
                        }>
                        <Text style={styles.textbtn} >{title}</Text>   
                    </LinearGradient>
                        
                </TouchableOpacity>
            </View>
    )
}


