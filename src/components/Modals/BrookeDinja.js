import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base'
import {appColor, black, lightOrange} from '../../constants/colors'
import { useNavigation } from '@react-navigation/native';
import { FIXER_TIMER_SCREEN } from '../../constants/screens';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BrookeDinja = (props) => {
    const navigation = useNavigation();
    const {
        visible,
        fixerData,
        animationIn,
        animationOut,
        animationOutTiming,
        closeModal,
        heading,
        deleteText,
        cancelText,
        searchValue,
        handleSearchText,
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
                    <View style={styles.headingView}>
                        <Text style={styles.heading}>{fixerData.first_name} {fixerData.last_name}</Text>
                        <Text style={styles.textStyle}>{'Ersätt fixer'}</Text>

                        <View style={styles.searchBar}>
                            <TextInput
                                value={searchValue}
                                onChangeText={handleSearchText}
                                placeholder="Skriv in ID, namn eller personnr"
                                style={styles.searchInput}
                            />
                            <TouchableOpacity>
                                <Icon name="search" type="font-awesome-5" color="#000" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.resultView}>
                            <Text style={styles.resultText}>Ersätts med:</Text>
                            <Text style={styles.hiphen}>-</Text>
                        </View>

                        <Button
                            text={"Spara ändringar"}
                            onPress={closeModal}
                            color={lightOrange}
                            btnStyle={styles.btnStyle}
                        />
                        <Button
                            text={"Ta bort fixer"}
                            onPress={closeModal}
                            color={lightOrange}
                            btnStyle={styles.btn_Style}
                        />

                    </View>
                </View>
            </View>

        </Overlay>
    )
}
export default BrookeDinja;

const styles = StyleSheet.create({
    overlayStyle: {
        backgroundColor: 'transparent',
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
    headingView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    heading: {
        color: black,
        fontSize: 20,
        fontFamily: RUBIK_MEDIUM
    },
    textStyle: {
        color: black,
        fontFamily: RUBIK_MEDIUM,
        fontSize: 17,
        marginTop: 10,
        lineHeight: 30,
        alignSelf: 'flex-start'
    },
    btnStyle: {
        backgroundColor: lightOrange,
        width: wp(60),
        marginTop: hp(3),
        marginBottom: hp(1)
    },
    btn_Style: {
        backgroundColor: lightOrange,
        width: wp(60),
        marginTop: 0,
        marginBottom: hp(3)
    },
    cancel_BtnStyle: {
        backgroundColor: appColor,
        borderColor: lightOrange,
        borderWidth: 2,

        width: wp(60),
        // marginTop:hp(5),
        marginBottom: hp(1)
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '0%',
        paddingHorizontal: '5%',
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 50,
        borderColor:lightOrange,
        backgroundColor: '#FFF',
      },
      searchInput: {
        width: '90%',
        fontFamily: RUBIK_REGULAR,
        fontSize: 15,
        paddingVertical:10
      },
      resultView:{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          paddingVertical:'3%'
      },
      resultText:{
          width:'90%',
          fontFamily:RUBIK_REGULAR,
          fontSize:15,
          color:black,
      },
      hiphen:{
          color:black,
          fontSize:15,
          fontFamily:RUBIK_MEDIUM,
          
      }
})
