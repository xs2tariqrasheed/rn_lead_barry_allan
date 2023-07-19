import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base';
import { CheckBox } from 'react-native-elements';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { PEACH, appColor, black, lightOrange } from '../../constants/colors';

const JobCompleted = (props) => {
  const {
    visible,
    animationIn,
    animationOut,
    animationOutTiming,
    closeModal,
    handleCleandUpWork,
    cleanedUp,
    toolPacked,
    handleToolPacked,
    job_Completed,
  } = props;
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
            style={styles.iconStyle}
          />
          <Text style={styles.heading}>Job Completed?</Text>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              size={25}
              uncheckedColor={PEACH}
              checkedColor={PEACH}
              containerStyle={{
                alignSelf: 'flex-start',
                width: wp(10),
                marginTop: -5,
              }}
              checked={cleanedUp}
              onPress={handleCleandUpWork}
            />
            <Text style={styles.checkText}>
              I have cleaned up my work area.
            </Text>
          </View>

          <View style={[styles.checkBoxContainer, { marginTop: 10 }]}>
            <CheckBox
              size={25}
              uncheckedColor={PEACH}
              checkedColor={PEACH}
              containerStyle={{
                alignSelf: 'flex-start',
                width: wp(10),
                marginTop: -5,
              }}
              checked={toolPacked}
              onPress={handleToolPacked}
            />
            <Text style={styles.checkText}>
              I have packed all my tools and batteries.
            </Text>
          </View>

          <Button
            onPress={job_Completed}
            text="Job done"
            color={lightOrange}
            btnStyle={styles.btnStyle}
          />
        </View>
      </View>
    </Overlay>
  );
};
export default JobCompleted;

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
    textAlign: 'center',
    marginTop: 30,
  },
  textStyle: {
    color: black,
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    marginTop: 15,
    lineHeight: 30,
  },
  btnStyle: {
    backgroundColor: lightOrange,
    width: wp(60),
    marginTop: hp(5),
    marginBottom: hp(3),
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
    width: wp(50),
  },
});
