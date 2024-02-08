import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, Platform, View } from 'react-native';

import Button from "../components/Button";




export default function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={Platform.OS === "android" ? 2 : 10}
        style={styles.background}
        source={require("../assets/dryck.png")}
        >

        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/coupon.png")}></Image>  
        <Text style={styles.textStyle}>Welcome! Let's shop!</Text> 
        </View>
        
        <View style={styles.buttonContainer}>
            <Button 
            title="Login"
            color= "white"
            onPress={() => props.navigation.navigate('Cupon')}
            />
            
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // tar upp hela skärmen
        justifyContent: "flex-end", 
        alignItems: "center", // justerar och centrerar allt innehåll på sidan 

    },
    buttonContainer: {
        width: "100%",
        padding: 15,
    },
    logo:{ 
        width: 300,
        height: 200,
    }, 
    logoContainer:{
        position: 'absolute', 
        top: 90,
        alignItems: "center", 
    },
    textStyle:{
        fontSize: 18, 
        fontWeight: "500", 
        color: "white"
    }
    
}); 

