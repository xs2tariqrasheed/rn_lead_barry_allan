import { Dimensions, StyleSheet } from 'react-native';
import {
  BLACK,
  DARK_GRAY,
  EERIE_BLACK,
  FLORAL_WHITE,
  LIGHT_PEACH,
  WHITE,
} from '../../constants/colors';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: 'transparent',
    marginLeft: 25,
    marginRight: 25,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '8%',
    marginVertical: 15,
  },
  leftText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: EERIE_BLACK,
    width: '75%',
  },
  rightText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: EERIE_BLACK,
  },
  left: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
  },
  rightContainer: {
    width: '33%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: EERIE_BLACK,
  },
  rutContainer: {
    marginHorizontal: '8%',
    alignItems: 'flex-end',
    marginTop: -5,
    marginBottom: 15,
  },
  rutText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#A85A58',
  },
  dateModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  calendar: {
    borderRadius: 15,
    paddingBottom: 5,
  },
  inputContainer: {
    marginHorizontal: '6%',
    marginVertical: 20,
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
    marginLeft: 8,
    marginVertical: 10,
  },
  inputBox: {
    height: 120,
    padding: 15,
    borderRadius: 10,
    backgroundColor: WHITE,
    elevation: 3,
    textAlignVertical: 'top',
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
  },
  buttonBox: {
    marginBottom: 20,
  },
  coloredContainer: {
    backgroundColor: LIGHT_PEACH,
    marginTop: 10,
    marginBottom: '8%',
  },
  coloredContainerHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
    marginLeft: '9%',
    marginTop: '10%',
    marginBottom: 15,
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
  inputLabel: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: DARK_GRAY,
    marginLeft: '10%',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderRadius: 10,
    marginHorizontal: '8%',
    paddingLeft: 15,
    paddingVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    backgroundColor: WHITE,
  },
  mapContainer: {
    marginVertical: 10,
    marginBottom: '10%',
  },
  map: {
    flex: 1,
    height: Dimensions.get('screen').height / 3,
    marginHorizontal: '9%',
    marginBottom: 20,
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
  modalHeadingContainer: {
    marginVertical: 15,
  },
  modalText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: BLACK,
    textAlign: 'center',
  },
  modalButtonContainer: {
    marginBottom: 10,
  },
});


export const keyBoardAvoidStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});