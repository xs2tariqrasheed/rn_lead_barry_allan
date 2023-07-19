import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import { CheckBox } from 'react-native-elements';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { PEACH ,appColor, black, lightOrange } from '../../constants/colors';
import { FlatList } from 'react-native';

let data =[
    {id:1,zone:'Östermalm'},
    {id:2,zone:'Norrmalm Vasastan'},
    {id:3,zone:'Kungsholmen'},
    {id:4,zone:'Södermalm Gamlastan'},
    {id:5,zone:'Essingeöarna'},
    {id:6,zone:'Essingeöarna'},
    {id:7,zone:'Liljeholmen'},
    {id:8,zone:'Årsta Enskede'},
    {id:9,zone:'Hammarby Kärrtorp Bagarmossen'},
    {id:10,zone:'Solna Södra'},
    {id:11,zone:'Solna Norra'},
    {id:12,zone:'Nacka'},
    {id:13,zone:'Lidingö Södra'},
    {id:14,zone:'Lidingö Östra'},
    {id:15,zone:'Lidingö Västra'},
    {id:16,zone:'Kungliga Djurgården'},
    {id:17,zone:'Norra Djurgården'},
    {id:18,zone:'Alvik Stora Mossen Abrahamsberg'},
    {id:19,zone:'Bromma'},
    {id:20,zone:'Djursholm'},
    {id:21,zone:'Djursholm Norra'},
    {id:22,zone:'Täby Västra'},
    {id:23,zone:'Täby Östra'},
    {id:24,zone:'Bergshamra'},
    {id:25,zone:'Skarpnäck'},
    {id:26,zone:'Farsta Gubbängen'},
    {id:27,zone:'Tyresö'},
    {id:28,zone:'Trollbäcken Kumla Gudö'},
    {id:29,zone:'Gamla Tyresö'},
    {id:30,zone:'Västberga Hägersten Älvsjö'}
]

const OurZones = (props) => {
    const {
        visible,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
        handleCancelJob,
        isCancel,
    } = props
const renderItem =({item,index})=>{
    return(
        <View style={styles.ourZones}>
            <Text style={styles.zonesStyle} >{`Zones ${index}`}</Text>
            <Text style={styles.textStyle}>{item.zone}</Text>
        </View>
    )
}

    return (
        <Overlay
            isVisible={visible ? visible : false}
            onBackdropPress={props.toggleOverlay}
            useNativeDriver={true}
            animationIn={props.animationIn}
            animationOut={props.animationOut}
            animationOutTiming={props.animationOutTiming}
            overlayStyle={styles.overlayStyle}
        >
            <View style={styles.wraper}>
                <View style={styles.content}>
                    <Icon
                        name={'close-thick'}
                        type={'MaterialCommunityIcons'}
                        onPress={closeModal}
                        style={styles.iconStyle} />
                        <Text style={styles.heading}>Våra zoner!</Text>
                    <View style={{height:hp(35),marginTop:20,marginBottom:20}}>
                      <FlatList
                      data ={data}
                      renderItem={renderItem}
                      keyExtractor={(item)=>item.id}
                      />
                      </View>
                </View>
            </View>

        </Overlay>
    )
}
export default OurZones;

const styles = StyleSheet.create({
    overlayStyle: {
        backgroundColor: 'transparent',
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        // borderBottomRightRadius:30,
        // borderBottomLeftRadius: 30,
        marginLeft: 25,
        marginRight: 25,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 0,
        paddingRight: 0,
    },
    wraper: {
        backgroundColor: appColor,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    content: {
        width: wp(85),
        borderRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'flex-end',
    },
    // headingView: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 30,
    // },
    heading: {
        color: black,
        fontSize: 23,
        fontFamily: RUBIK_REGULAR,
        textAlign:'center',
        marginTop: 30,

    },
    textStyle: {
        color: black,
        fontFamily: RUBIK_REGULAR,
        fontSize: 15,
        // marginTop: 15,
        lineHeight: 30,
        marginLeft:10,
    },
    zonesStyle:{
    color:black,
    fontSize:15,
    fontFamily:RUBIK_MEDIUM,
    lineHeight: 30,

    },
    
      ourZones:{
          flexDirection:'row',
          alignItems:'center',
        
      }
})
