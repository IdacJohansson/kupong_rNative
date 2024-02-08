import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { View } from 'react-native';



function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/wood.jpg")}>

        <Image style={styles.logo} source={require("../assets/canIcon.png")}></Image>    
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // tar upp hela skärmen
        justifyContent: "flex-end", 
        alignItems: "center", // justerar och centrerar allt innehåll på sidan 

    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "white",
    }, 
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "grey",
    },
    logo:{ 
        width: 100,
        height: 100,
        position: 'absolute', 
        top: 70,

    }
    
}); 

export default WelcomeScreen;