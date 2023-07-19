import { StyleSheet } from 'react-native';
import {
  RUBIK_REGULAR,
  RUBIK_MEDIUM,
  RUBIK_LIGHT,
} from '../../constants/fonts';
import {
  BLACK,
  BROWN,
  DARK_GRAY,
  EERIE_BLACK,
  FLORAL_WHITE,
  LIGHT_PEACH,
  RED,
  SOFT_RED,
  WHITE,
} from '../../constants/colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: '5%',
  },
  topTextContainer: {
    borderBottomWidth: 2,
    borderColor: BLACK,
    marginHorizontal: '8%',
    marginBottom: '5%',
  },
  topText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: BLACK,
    marginVertical: '10%',
  },
  subContainer: {
    marginTop: 25,
    marginVertical: 10,
    borderBottomWidth: 2,
    marginHorizontal: '8%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  leftText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: EERIE_BLACK,
  },
  left: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
  },
  rightContainer: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: EERIE_BLACK,
  },
  coloredLine: {
    alignItems: 'flex-end',
    marginBottom: 15,
    paddingRight: 10,
    paddingVertical: 6,
    backgroundColor: LIGHT_PEACH,
  },
  coloredLine1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 11,
    color: EERIE_BLACK,
    marginBottom: 5,
  },
  coloredLine2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
  },
  midContainer: {
    marginHorizontal: '8%',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  midLine1: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
    marginVertical: 5,
  },
  midLine2: {
    fontFamily: RUBIK_LIGHT,
    fontSize: 15,
    color: EERIE_BLACK,
    marginBottom: 6,
  },
  totalSum: {
    marginHorizontal: '8%',
  },
  checkBoxContainer: {
    marginVertical: 10,
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginVertical: -8,
  },
  checkText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
  },
  inlineText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinkText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BROWN,
  },
  textContainer: {
    marginLeft: '8%',
    marginVertical: 15,
  },
  text1: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
  },
  text2: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BLACK,
    marginVertical: 8,
    marginRight: '40%',
  },
  text3: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: BROWN,
    marginRight: '30%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '8%',
    backgroundColor: FLORAL_WHITE,
    borderRadius: 30,
    padding: 20,
    elevation: 5,
  },
  modalTopMargin: {
    marginTop: '20%',
  },
  modalCancel: {
    alignItems: 'flex-end',
  },
  modalHeadingContainer: {
    marginHorizontal: '8%',
    marginBottom: 5,
    marginTop: 10,
  },
  infoModalHeadingContainer: {
    marginBottom: 5,
    marginTop: 10,
  },
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: BLACK,
    textAlign: 'center',
  },
  modalCheckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -15,
  },
  modalCheckText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginLeft: -15,
    marginRight: 5,
  },
  modalMessageContainer: {
    marginTop: 15,
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    lineHeight: 25,
    marginHorizontal: 5,
  },
  modalBrownText: {
    color: BROWN,
  },
  inputLabel: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: DARK_GRAY,
    marginLeft: '8%',
    marginVertical: 3,
  },
  errorInput: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 12,
    color: RED,
    marginLeft: '8%',
    marginVertical: 3,
  },
  input: {
    backgroundColor: WHITE,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: SOFT_RED,
    marginHorizontal: 10,
    paddingHorizontal: '5%',
    paddingVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: DARK_GRAY,
  },
  lineText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: BLACK,
    textAlign: 'center',
    marginVertical: 15,
  },
  opacity: {
    opacity: 0.5,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inlineInput: {
    width: '50%',
  },
  smallInputLabel: {
    marginLeft: '15%',
  },
  smallInput: {
    paddingLeft: '10%',
  },
  modalButtonContainer: {
    marginTop: '5%',
    marginHorizontal: '10%',
  },
});
