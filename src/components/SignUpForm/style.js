import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';
import {
  FUZZY_BROWN,
  DARK_GRAY,
  BLACK,
  WHITE,
  FLORAL_WHITE,
  BROWN,
} from '../../constants/colors';

export const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: DARK_GRAY,
    marginLeft: '9%',
    marginVertical: 5,
    marginTop: 15,
  },
  input: {
    borderRadius: 10,
    marginHorizontal: '8%',
    paddingLeft: 15,
    paddingVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    backgroundColor: WHITE,
    elevation: 2,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop: 8,
    marginLeft: 8,
  },
  passwordContainer: {
    marginTop: 25,
  },
  textContainer: {
    marginHorizontal: '9%',
    marginVertical: 15,
  },
  textHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: DARK_GRAY,
    marginVertical: 10,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: DARK_GRAY,
    lineHeight: 25,
  },
  boldText: {
    fontFamily: RUBIK_MEDIUM,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  inlineInput: {
    width: '50%',
  },
  checkContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
  },
  checkText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: DARK_GRAY,
  },
  pinkText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: FUZZY_BROWN,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  bottomText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
  },
  bottomPinkText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 19,
    color: FUZZY_BROWN,
    marginLeft: 5,
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
  modalCancel: {
    alignItems: 'flex-end',
  },
  modalHeadingContainer: {
    marginVertical: 15,
    marginBottom: 20,
  },
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: BLACK,
    textAlign: 'center',
  },
  modalMessageContainer: {
    marginBottom: 15,
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    lineHeight: 25,
    marginHorizontal: 5,
  },
  modalBoldText: {
    fontFamily: RUBIK_MEDIUM,
  },
  modalSmallText: {
    fontSize: 14,
  },
  modalBrownText: {
    color: BROWN,
  },
  modalButtonContainer: {
    marginVertical: 10,
  },
});
