import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, LIGHT_PEACH } from '../../constants/colors';

export const styles = StyleSheet.create({
  shadedBox: {
    backgroundColor: LIGHT_PEACH,
    paddingVertical: 30,
    marginBottom: '5%',
    paddingHorizontal: '10%',
  },
  shadedBoxHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: BLACK,
    marginBottom: 10,
    marginLeft: '8%',
  },
  subHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    textAlign: 'center',
    marginBottom: 5,
  },
  shadedLines: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginRight: '10%',
    marginVertical: 10,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
  },
  dot: {
    marginVertical: 18,
    marginHorizontal: 10,
  },
});
