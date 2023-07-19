import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native';

import { CheckBox,Divider } from 'react-native-elements';
import { FIXER_SETTING } from '../../constants/screens';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { PEACH ,appColor, black, lightOrange } from '../../constants/colors';

const InfoModal = (props) => {
  const navigation = useNavigation();

    const {
        visible,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
        handleSaveChanges,
        infoText,
        infoDetail,
        iconName,
        iconType
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
                        // name={'checkcircle'}
                        // type={'AntDesign'}
                        name={iconName}
                        type={iconType}
                        // onPress={closeModal}
                        style={styles.iconStyle} />
                        <Text style={styles.textStyle}>{infoText}</Text>
                       <Divider
                       style={{
                        marginTop:6,
                        borderBottomWidth:2.5,
                        borderBottomColor:black,
                        fontFamily:RUBIK_MEDIUM
                       }}
                       />
                   <Text style={[styles.textStyle,{marginTop:5}]}>{infoDetail}</Text>


                        <Button
                            text="OK"
                            color={lightOrange}
                            btnStyle={styles.btnStyle}
                            onPress={handleSaveChanges}
                            // onPress={()=> {
                            //         navigation.push(FIXER_SETTING)

                            // }}
                        />

                </View>
            </View>

        </Overlay>
    )
}
export default InfoModal;

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
        alignSelf: 'center',
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
        fontSize:18,
        marginTop: 10,
        lineHeight: 30,
        textAlign:'center'
    },
    btnStyle: {
        backgroundColor: lightOrange,
        width: wp(60),
        marginTop: hp(5),
        marginBottom: hp(3)
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
