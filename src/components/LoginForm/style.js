import { StyleSheet } from 'react-native';
import {
  BLACK,
  DARK_GRAY,
  FLORAL_WHITE,
  RED,
  WHITE,
} from '../../constants/colors';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    backgroundColor: '#FFF3EF',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 3,
  },
  inputHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: DARK_GRAY,
    marginTop: 15,
    marginLeft: '10%',
  },
  input: {
    marginHorizontal: '8%',
    marginVertical: 5,
    paddingLeft: '5%',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#FF8686',
    borderRadius: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    backgroundColor: WHITE,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '10%',
    marginLeft: '5%',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: DARK_GRAY,
    marginLeft: -15,
  },
  forgotPasswordText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: '#B45555',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginRight: 5,
  },
  peachText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: '#B45555',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '10%',
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
    fontSize: 19,
    color: BLACK,
    textAlign: 'center',
  },
  modalEmail: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: DARK_GRAY,
    marginLeft: 12,
    marginBottom: 5,
  },
  modalInput: {
    borderWidth: 2,
    borderColor: '#EF8C89',
    borderRadius: 11,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: DARK_GRAY,
    backgroundColor: WHITE,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  alertText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: RED,
    textAlign: 'center',
  },
});
