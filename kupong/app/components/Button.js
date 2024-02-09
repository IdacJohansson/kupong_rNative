import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../styles/colors';

const Button = ({title, onPress}) => {
    return (
     
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        activeOpacity={0.9}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;


const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
        marginVertical: 10,    
        backgroundColor: colors.onyx,
    }, 
    text:{
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",  
    }
})