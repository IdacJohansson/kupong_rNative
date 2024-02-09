import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../styles/colors';

function CouponScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/50.png')}></Image>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/100.png')}></Image> 
            <Image resizeMode='contain' style={styles.image} source={require('../assets/200.png')}></Image> 
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "30%",
        height: "30%",
    }, 
    container: {
        flex: 1,
        backgroundColor: colors.coolGray,
        alignItems: "center",
        justifyContent: "center",
        
    
    },
    closeIcon: {
        width: 50, 
        height: 50,
        backgroundColor: colors.lightGray, 
        position: "absolute", 
        top: 40,
        left: 30,
    },
    deleteIcon:{
        width: 50, 
        height: 50,
        backgroundColor: colors.black, 
        position: "absolute", 
        top: 40,
        right: 30,
    }
})

export default CouponScreen; 