import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import { CheckBox, Divider } from 'react-native-elements';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { PEACH  ,appColor, black, lightOrange} from '../../constants/colors';

const ZoneChangeModal = (props) => {
    const {
        visible,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
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
                        name={'checkcircle'}
                        type={'AntDesign'}
                        onPress={closeModal}
                        style={styles.iconStyle} />
                    <Text style={styles.textStyle}>Fixaren uppbokat</Text>
                    <Divider
                        style={{
                            marginTop: 6,
                            borderBottomWidth: 2.5,
                            borderBottomColor: black,
                            fontFamily: RUBIK_MEDIUM
                        }}
                    />
                <View style={styles.textView}>
                    <Text style={styles.smallText}>Fixaren har jobb inbokade inom sin nuvarande roll. Invänta att jobben är utförda innan du ändrar roll.</Text>
                   
                </View>

                    <Button
                        text="OK"
                        onPress={closeModal}
                        color={lightOrange}
                        btnStyle={styles.btnStyle}
                    />

                </View>
            </View>

        </Overlay>
    )
}
export default ZoneChangeModal;

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
        alignSelf: 'center',
    },
    
    
    textStyle: {
        color: black,
        fontFamily: RUBIK_REGULAR,
        fontSize: 18,
        fontWeight:"bold",
        marginTop: 10,
        lineHeight: 30,
        textAlign: 'center'
    },
    btnStyle: {
        backgroundColor: lightOrange,
        width: wp(60),
        marginTop: hp(5),
        marginBottom: hp(3)
    },
    textView:{
        marginTop:15,
    },
    smallText:{
        color: black,
        fontFamily: RUBIK_REGULAR,
        fontSize: 15,
        lineHeight:35,
        fontWeight:'bold',
        marginTop: 10,
    }
})
