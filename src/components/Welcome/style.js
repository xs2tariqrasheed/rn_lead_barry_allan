import { Dimensions, StyleSheet } from 'react-native';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';
import { PEACH } from '../../constants/colors';

export const styles = StyleSheet.create({
  subContainer: {
    height: Dimensions.get('screen').height * 0.4,
  },
  title: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 33,
    letterSpacing: 1.4,
    color: '#141414',
    marginTop: '20%',
    textAlign: 'center',
  },
  titlePeach: {
    color: PEACH,
  },
  upperLine2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 32,
    color: '#141414',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 25,
  },
  textBlock: {
    width: '70%',
    marginLeft: '14%',
    marginBottom: 20,
  },
  upperLine3: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: '#141414',
    textAlign: 'center'
  },
  headerLogo: {
    width: 120,
    height: 36,
    resizeMode: "contain"
  }
});
