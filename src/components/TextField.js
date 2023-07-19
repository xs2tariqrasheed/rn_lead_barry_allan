import React from 'react'
import { Platform } from 'react-native'
import {TextInput , StyleSheet} from 'react-native'
import { RUBIK_REGULAR } from '../constants/fonts'
import {lightGrey} from '../constants/colors'

const TextField =(props)=>{
    return(
        <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={lightGrey}
        onChangeText={props.onChangeText}
        value={props.value}
        multiline={props.multiline}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
       style={[styles.input,props.textFieldStyle]}
        
        />
    )
}
export default TextField

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        fontFamily:RUBIK_REGULAR,
        fontSize:16,
        paddingVertical:Platform.OS=='android'?10:12,
        paddingHorizontal:10,
        elevation:1,
        shadowColor:'#000',
        shadowOffset:{height:0.3,width:0.3},
        shadowOpacity:0.4,
        shadowRadius:0.2
    }
})