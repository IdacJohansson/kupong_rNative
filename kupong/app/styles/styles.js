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
    container: {
        backgroundColor: colors.white, 
        marginBottom: 32, 
        padding: 12, 
        borderRadius: 10, 
    }, 
    image: {
        width: '100%', 
        height: 250, 
        resizeMode: 'contain',
        marginBottom: 12 
    }, 
    ChooseButton:{
        padding: 8, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 2, 
        borderColor: colors.black, 
        marginTop: 12, 
        borderRadius: 10, 
        backgroundColor: colors.lightBlue,
    }, 
    buttonText:{
        fontSize: 14, 
        fontWeight: '600', 
        color: colors.white 
    }, 
    screenStyle: {
        backgroundColor: colors.onyx, 
        flex: 1, 
        paddingHorizontal: 20, 
        paddingVertical: 30
    }

});

export const couponDetailsScreenStyle = StyleSheet.create({
    bigContainer: {
        backgroundColor: colors.onyx, 
        flex: 1, paddingHorizontal: 20, 
        paddingVertical: 30 
    },
    container:{
        flex: 1, 
        backgroundColor: colors.white, 
        marginVertical: 8, 
        borderRadius: 10, 
        padding: 30
    }, 
    textNameStyle:{
        fontSize: 16, 
        fontWeight: '600', 
        color: colors.black, 
        textAlign: 'center' 
    },
    screenStyle: {
        backgroundColor: colors.onyx, 
        flex: 1, 
        paddingHorizontal: 20, 
        paddingVertical: 30
    }, 
    imageStyle:{
        width: '100%', 
        height: 250, 
        resizeMode: 'contain'
    },
    textDescriptionStyle:{
        flex: 1, 
        fontSize: 14, 
        fontWeight: '400', 
        marginTop: 16, 
        color: colors.black, 
        textAlign: 'center' 
    }, 
    buttonText:{
        fontSize: 14, 
        fontWeight: '600', 
        color: colors.white,
    },
    buttonChoose:{
        padding: 12, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.lightBlue, 
        borderWidth: 2, 
        borderColor: colors.white, 
        marginTop: 4, 
        borderRadius: 10
    }

});