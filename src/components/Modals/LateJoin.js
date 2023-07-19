import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import { CheckBox,Divider } from 'react-native-elements';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { PEACH ,appColor, black, lightOrange } from '../../constants/colors';

const LateJoinModal = (props) => {
    const {
        visible,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
        handleCleandUpWork,
        handle_10_MinLate,
        handle_20_MinLate,
        handle_30_MinLate,

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
                        <Text style={styles.heading}>How late are you?</Text>
    
                        <Button
                            text="10 min"
                            onPress={handle_10_MinLate}
                            btnStyle={[styles.btnStyle,{marginTop:30}]}
                        />
                        <Button
                            text="20 min"
                            onPress={handle_20_MinLate}
                            btnStyle={styles.btnStyle}
                        />
                        <Button
                            text="30 min"
                            onPress={handle_30_MinLate}
                            btnStyle={styles.btnStyle}
                        />

                </View>
            </View>

        </Overlay>
    )
}
export default LateJoinModal;

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
        fontSize:25,
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
        marginTop: 10,

    },
    textStyle: {
        color: black,
        fontFamily: RUBIK_REGULAR,
        fontSize:18,
        marginTop: 10,
        lineHeight: 30,
        textAlign:'center'
    },
    btnStyle: {
        width: wp(60),
        // marginTop: hp(5),
        // marginBottom: hp(3)
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:20,
      },
      checkText:{
          fontFamily:RUBIK_REGULAR,
          fontSize:15,
          color:black,
          width:wp(50)
      }
})
