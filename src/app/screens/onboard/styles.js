import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    bigImage: {
        alignSelf: 'center',
        
    },
    backGroundBigImage: {
        alignSelf: 'center',
        marginTop: 86,
        width: 266,
        height: 266,
        backgroundColor: '#FFF5E1',
        borderRadius: 100
    },
    textImage :{
        alignSelf: 'center',
        marginTop: 43,
    },
    text :{
        fontSize: 14,
        color:'#616161',
        fontWeight:'400',
        alignSelf:'center',
        marginHorizontal: 67,
        marginTop: 13
    },
    button :{
        height :50,
        backgroundColor:'#319AB4',
        borderRadius : 5,
        marginHorizontal:66,
        marginTop: 50,
        justifyContent:'center'
    },
    textButton :{
        color:'white',
        fontSize :20,
       
        alignSelf:'center'
    },
    wrap:{
        width: width ,
        height: 20,
    }
})