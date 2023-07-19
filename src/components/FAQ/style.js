import { StyleSheet } from 'react-native';
import { BLACK } from '../../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: '15%',
    paddingTop: '5%',
  },
  headingContainer: {
    marginLeft: '10%',
  },
  heading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: BLACK,
    marginTop: '5%',
  },
  textContainer: {
    marginHorizontal: '10%',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  arrow: {
    marginTop: 2,
  },
  question: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    width: '80%',
    lineHeight: 20,
  },
  answerContainer: {
    width: '90%',
    marginVertical: 8,
  },
  answerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: BLACK,
    lineHeight: 20,
  },
});
