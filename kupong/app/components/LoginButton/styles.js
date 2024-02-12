import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


export const loginButtonStyle = StyleSheet.create({
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
}); 