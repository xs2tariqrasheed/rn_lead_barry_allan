import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';
import { FUZZY_BROWN, DARK_GRAY, BLACK, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: DARK_GRAY,
    marginLeft: '9%',
    marginTop: '8%',
  },
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
});
