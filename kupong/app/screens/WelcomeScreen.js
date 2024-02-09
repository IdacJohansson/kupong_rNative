import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, Platform, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import colors from '../styles/colors';
import { Button } from 'react-native';




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
        }


    }

    return (
        <ImageBackground 
        blurRadius={Platform.OS === "android" ? 2 : 10}
        style={styles.background}
        source={require("../assets/dryck.png")}
        >

        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/coupon.png")}></Image>  
        </View>

        <KeyboardAvoidingView 
        behavior='padding' 
        style={styles.loginContainer}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.form}>
                <Text style={styles.label}>User</Text>
                <TextInput 
                style={styles.input} 
                placeholder='Enter your username'
                value={username}
                onChangeText={setUsername} 
                />
                {
                    errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
                }
                
                <Text style={styles.label}>Password </Text>
                <TextInput 
                style={styles.input} 
                placeholder='Enter your password' 
                secureTextEntry
                value={password}
                onChangeText={setPassword} 
                />
                {
                    errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
                }
            
                <View style={styles.buttonContainer}>
                <Button 
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
        top: 30,
        alignItems: "center", 
    },
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        top: 100,
    },
    form:{
        backgroundColor: colors.white,
        width: 250,
        height: 275,
        padding: 30,
        borderRadius: 10,
    },
    label:{
        fontSize: 16,
        marginBottom: 5, 
        fontWeight: "bold",
    }, 
    input:{
        height: 40,
        borderColor: colors.black,
        borderBottomWidth: 1, 
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    errorText: {
        color: colors.darkPurple,
        marginBottom: 10,
    }
    
}); 




