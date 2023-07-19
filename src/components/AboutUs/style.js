import { StyleSheet } from 'react-native';
import { RUBIK_LIGHT, RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, EERIE_BLACK, PEACH } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: '15%',
  },
  videoContainer: {
    height: 200,
    marginVertical: 20,
    marginTop: 40,
    borderRadius: 8,
    backgroundColor: PEACH,
    justifyContent: 'center',
  },
  textContainer: {
    marginHorizontal: '9%',
  },
  lightTextTop: {
    fontFamily: RUBIK_LIGHT,
    fontSize: 21,
    fontWeight:"bold",
    color: "#000",
    lineHeight: 31,
    marginBottom: 10,
  },
  lightText: {
    fontFamily: RUBIK_LIGHT,
    fontSize: 20,
    color: EERIE_BLACK,
    fontWeight:"600",
    marginBottom: 10,
    marginTop: 15,
  },
  lightTextPara:{
    fontFamily: RUBIK_LIGHT,
    fontSize: 20,
    color: EERIE_BLACK,
    fontWeight:"600",
    marginBottom: 10,
  },
  headingText: {
    fontFamily: RUBIK_LIGHT,
    fontSize: 20,
    color: EERIE_BLACK,
    fontWeight:"bold",
    marginBottom: 10,
    marginTop: 15,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
    lineHeight: 27,
  },
  boldText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    fontWeight:"bold",
    lineHeight:27,
    color: BLACK,
    marginTop: '10%',
    marginBottom: 10,
  },
});
