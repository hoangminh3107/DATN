import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor:'white'
    },
    imageLogo:{
        alignSelf:'center',
        marginTop: 112
    },
    loginSignUp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 88,
        marginTop: 65
    },
    text :{
        fontSize: 20,
        color:'#616161',
    },
    rowOrange :{
        backgroundColor:'#FFAA00',
        height : 5,
        width : 30,
        alignSelf: 'center',
        marginTop : 12
    },
    viewLogin :{
        marginTop : 26,
        marginHorizontal : 16
    },
    textInput:{
        borderBottomWidth: 1,
        marginTop: 5,
        paddingTop: 10,
        borderColor:'#F0F0F0',
        marginBottom: 30
    },
    text2 :{
        fontSize: 16,
        color:'#616161',
    },
    forgotPass :{
        fontSize :14 ,
        color:'#616161',
        alignSelf :'flex-end' 
    },
    button: {
        height: 50,
        backgroundColor: '#319AB4',
        borderRadius: 5,
        marginHorizontal: 66,
        marginTop: 150,
        marginBottom: 150,
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
    buttonConfirm: {
        position: 'absolute',
        bottom: 90,
        alignSelf: 'center'
    },
    buttonConfirmStyle: {
        width: width - 16,
    }
})