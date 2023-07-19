import { StyleSheet } from 'react-native';
import {
  BLACK,
  DARK_GRAY,
  FLORAL_WHITE,
  SOFT_RED,
  WHITE,
} from '../../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

export const styles = StyleSheet.create({
  formContainer: {
    marginVertical: '10%',
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
    borderWidth: 2,
    borderColor: SOFT_RED,
    borderRadius: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: DARK_GRAY,
    backgroundColor: WHITE,
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
    fontSize: 22,
    color: BLACK,
    textAlign: 'center',
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    textAlign: 'center',
    lineHeight: 25,
  },
  modalEmail: {
    fontFamily: RUBIK_MEDIUM,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});
