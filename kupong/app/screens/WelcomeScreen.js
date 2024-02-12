import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, Platform, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';

import { welcomeScreenStyle } from '../styles/styles';
import LoginButton from '../components/LoginButton/LoginButton';



 function WelcomeScreen(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {}

        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";

        setErrors(errors); 

        return Object.keys(errors).length === 0; 

    }

    const handleSubmit = () =>{
        if (validateForm()) {
            console.log("submitted", username, password); 
            setUsername("");
            setPassword("");
            setErrors({}); 

            props.navigation.navigate('CuponShop')
        }
    }
    return (
        <ImageBackground 
        blurRadius={Platform.OS === "android" ? 2 : 10}
        style={welcomeScreenStyle.background}
        source={require("../assets/dryck.png")}
        >

        <View style={welcomeScreenStyle.logoContainer}>
        <Image style={welcomeScreenStyle.logo} source={require("../assets/coupon.png")}></Image>  
        </View>

        <KeyboardAvoidingView 
        behavior='padding' 
        style={welcomeScreenStyle.loginContainer}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={welcomeScreenStyle.form}>
                <Text style={welcomeScreenStyle.label}>User</Text>
                <TextInput 
                style={welcomeScreenStyle.input} 
                placeholder='Enter your username'
                value={username}
                onChangeText={setUsername} 
                />
                {
                    errors.username ? <Text style={welcomeScreenStyle.errorText}>{errors.username}</Text> : null
                }
                
                <Text style={welcomeScreenStyle.label}>Password </Text>
                <TextInput 
                style={welcomeScreenStyle.input} 
                placeholder='Enter your password' 
                secureTextEntry
                value={password}
                onChangeText={setPassword} 
                
                />
                {
                    errors.password ? <Text style={welcomeScreenStyle.errorText}>{errors.password}</Text> : null
                }
            
                <View style={welcomeScreenStyle.buttonContainer}>
                <LoginButton 
                title="Login"
                //onPress={() => props.navigation.navigate('Cupon')}
                onPress={handleSubmit}
                />


                </View>
            </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    );

    }
    export default WelcomeScreen; 







