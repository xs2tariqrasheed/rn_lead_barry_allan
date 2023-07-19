import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import { appColor, black,lightOrange } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { FIXER_TIMER_SCREEN } from '../../constants/screens';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';

const RemoveEmployee = (props) => {
    const navigation = useNavigation();
    const {
        visible,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
        heading,
        deleteText,
        cancelText,
        subHeading,
        job_id
    } = props
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
                    <View style={styles.headingView}>
                        <Text style={styles.heading}>{heading}</Text>
                        <Text style={styles.textStyle}>{subHeading}</Text>

                        <Button
                         text={deleteText}
                         onPress={() => {
                             navigation.navigate(FIXER_TIMER_SCREEN, { jobId: job_id })}
                         }
                         color={lightOrange}
                         btnStyle={styles.btnStyle}
                        />

                        <Button
                         text={cancelText}
                         onPress={() => {
                             navigation.navigate(FIXER_TIMER_SCREEN, { jobId: job_id })}
                         }
                         btnStyle={styles.cancel_BtnStyle}
                        />
                       
                    </View>
                </View>
            </View>

        </Overlay>
    )
}
export default RemoveEmployee;

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
        borderBottomRightRadius:30,
        borderBottomLeftRadius: 30,
    },
    content: {
        width: wp(85),
        borderRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    iconStyle: {
        fontSize:25,
        alignSelf: 'flex-end',
    },
    headingView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    heading: {
        color: black,
        fontSize: 23,
        fontFamily:RUBIK_REGULAR
    },
    textStyle:{
        color:black,
        fontFamily:RUBIK_REGULAR,
        fontSize:15,
        marginTop:10,
        lineHeight:30,
    },
    btnStyle:{
        backgroundColor:lightOrange,
        width:wp(60),
        marginTop:hp(3),
        marginBottom:hp(1)
       },
       cancel_BtnStyle:{
        backgroundColor:appColor,
        borderColor:lightOrange,
        borderWidth:2,

        width:wp(60),
        // marginTop:hp(5),
        marginBottom:hp(1)
       }
})
