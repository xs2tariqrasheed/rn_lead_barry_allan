import { StyleSheet } from 'react-native';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK } from '../../constants/colors';

export const styles = StyleSheet.create({
  lowerContainer: {
    marginHorizontal: '12%',
    marginVertical: 20,
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 25,
    color: BLACK,
  },
  lowerHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginTop: 20,
  },
  lowerHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: BLACK,
    marginLeft: 8,
  },
  linesContainer: {
    marginVertical: 10,
    marginRight: 12,
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lowerLine1: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
  },
});
