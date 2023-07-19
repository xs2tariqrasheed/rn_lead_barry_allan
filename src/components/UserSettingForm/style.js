import { StyleSheet } from 'react-native';
import {
  BLACK,
  BROWN,
  DARK_GRAY,
  FLORAL_WHITE,
  WHITE,
} from '../../constants/colors';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: DARK_GRAY,
    marginLeft: '9%',
    marginTop: '8%',
  },
  inputLabel: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: DARK_GRAY,
    marginLeft: '9%',
    marginVertical: 6,
    marginTop: 20,
  },
  input: {
    backgroundColor: WHITE,
    borderRadius: 10,
    marginHorizontal: '8%',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: DARK_GRAY,
    elevation: 2,
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
  smallInput: {
    paddingLeft: '10%',
  },
  changePassword: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BROWN,
    marginLeft: '9%',
    marginTop: '6%',
  },
  buttonContainer: {
    paddingVertical: 20,
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
    marginVertical: 10,
  },
  underlinedHeading: {
    borderBottomWidth: 2,
    borderColor: BLACK,
    marginHorizontal: '5%',
    paddingBottom: 10,
  },
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
    textAlign: 'center',
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalHeadingSmall: {
    fontSize: 18,
  },
  modalLabel: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: DARK_GRAY,
    marginVertical: 6,
    marginTop: 10,
    marginLeft: 15,
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
  modalButton: {
    marginVertical: 10,
  },
});
