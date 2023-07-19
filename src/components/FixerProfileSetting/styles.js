import {StyleSheet} from 'react-native'
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts'
import {black, lightOrange} from '../../constants/colors'
export default styles  = StyleSheet.create({
    container:{
        flex:1,
    },
    imgView:{
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
        borderRadius:150/2,
        borderColor:lightOrange,
        borderWidth:2,
        alignSelf:'center',
        marginTop:25,
    },
    addPhoto:{
        color:lightOrange,
        fontSize:14,
        fontFamily:RUBIK_REGULAR,
        fontStyle:'normal',
        marginTop:15,
    },
    imgStyle:{
        width:150,
        height:150 ,
        borderRadius:150/2
    },
    content:{
     marginHorizontal:30,
     marginTop:30,
    },
    contactHeading:{
        color:black,
        fontSize:20,
        fontStyle:'normal',
        fontFamily:RUBIK_REGULAR,
    },
    telHeading:{
        color:black,
        fontSize:16,
        fontFamily:RUBIK_MEDIUM,
        marginTop:25,
    },
    addressHeading:{
        color:black,
        fontSize:16,
        fontFamily:RUBIK_MEDIUM,
        marginTop:15,
    },
    changePass:{
        color:'#A85A58',
        fontSize:16,
        fontFamily:RUBIK_MEDIUM,
    }
})