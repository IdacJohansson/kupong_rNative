import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { loginButtonStyle } from './styles'; 



const LoginButton = ({title, onPress}) => {
    return (
     
        <TouchableOpacity style={loginButtonStyle.button}
        onPress={onPress}
        activeOpacity={0.9}
        >
            <Text style={loginButtonStyle.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LoginButton;


