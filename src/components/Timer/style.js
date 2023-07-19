import { StyleSheet } from 'react-native';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

import { PINK, PEACH, FLORAL_WHITE, WHITE, DARK_GRAY, RED, BLACK ,black, lightOrange } from '../../constants/colors';


export const styles = StyleSheet.create({
  textContainer: {
    marginLeft: '6%',
    marginRight: '30%',
    marginTop: '15%',
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize:22,
    color: '#000',
  },
  pinkText: {
    // color: PINK,
    color:black,
    fontSize:22,
    fontFamily:RUBIK_MEDIUM,
  },
  timerContainer: {
    marginHorizontal: '6%',
    marginVertical: '5%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  timer: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 70,
    color:lightOrange,
    marginVertical: '10%',
  },
  buttonContainer: {
    position:'absolute',
    bottom:'5%',
    alignSelf:'center',
    width:'95%'
    // marginHorizontal: '10%',
    // marginVertical: '25%',
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
  alertText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: RED,
    textAlign: 'center',
  },
});
