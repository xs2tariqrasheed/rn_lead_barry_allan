import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import { appColor, black, lightOrange } from '../../constants/colors';
import { CheckBox, Divider } from 'react-native-elements';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import TextField from '../TextField';

const ChangePassModal = (props) => {
    const {
        visible,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
        handle_CurrPass,
        curr_pass,
        handle_NewPass,
        new_pass,

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
                    <Text style={styles.heading}>Change password</Text>
                    <Text style={styles.telHeading}>Current password</Text>
                    <TextField
                        placeholder={'Current password'}
                        onChangeText={handle_CurrPass}
                        value={curr_pass}
                        autoCapitalize={'none'}
                        keyboardType={'default'}
                        textFieldStyle={styles.textFieldStyle}
                    // textFieldStyle={{ marginTop: 5 }}
                    />

                    <Text style={styles.telHeading}>New password</Text>
                    <TextField
                        placeholder={'New password'}
                        onChangeText={handle_NewPass}
                        value={new_pass}
                        autoCapitalize={'none'}
                        keyboardType={'default'}
                        textFieldStyle={styles.textFieldStyle}
                    />

                    <Button
                        text="Update"
                        color={lightOrange}
                        btnStyle={styles.btnStyle}
                    />
                </View>
            </View>

        </Overlay>
    )
}
export default ChangePassModal;

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
    textFieldStyle:{
         marginTop:7,
          borderWidth: 2,
           borderColor: lightOrange
    },
    heading: {
        color: black,
        fontSize: 23,
        fontFamily: RUBIK_REGULAR,
        textAlign: 'center',
        marginTop: 10,

    },
    textStyle: {
        color: black,
        fontFamily: RUBIK_REGULAR,
        fontSize: 18,
        marginTop: 10,
        lineHeight: 30,
        textAlign: 'center'
    },
    btnStyle: {
        width: wp(60),
        marginTop: hp(3),
        // marginBottom: hp(3)
    },
    telHeading: {
        color: black,
        fontSize: 16,
        fontFamily: RUBIK_MEDIUM,
        marginTop: 15,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkText: {
        fontFamily: RUBIK_REGULAR,
        fontSize: 15,
        color: black,
        width: wp(50)
    }
})
