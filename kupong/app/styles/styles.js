import { StyleSheet } from 'react-native';
import colors from './colors';


export const welcomeScreenStyle = StyleSheet.create({
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

export const couponScreenStyle = StyleSheet.create({
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

});