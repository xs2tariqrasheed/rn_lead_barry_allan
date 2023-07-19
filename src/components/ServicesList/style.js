import { StyleSheet, Platform } from 'react-native';
import { EERIE_BLACK } from '../../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

export const styles = StyleSheet.create({
  textContainer: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: '8%',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: '#000',
  },
  text: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: EERIE_BLACK,
    marginVertical: 15,
    marginRight: '10%',
    lineHeight: 25,
    fontWeight: Platform.OS == "ios" ? "500" : "bold"
  },
  question: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: EERIE_BLACK,
  },
});
