import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, PEACH } from '../../constants/colors';

export const styles = StyleSheet.create({
  subContainer: {
    alignItems: 'center',
  },
  tickContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  upperLine1: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: BLACK,
    borderBottomWidth: 2,
    borderColor: BLACK,
    paddingHorizontal: '10%',
    paddingBottom: 20,
    marginBottom: 10,
  },
  iconContainer: {
    paddingVertical: 38,
    paddingHorizontal: 45,
    marginVertical: 20,
    borderRadius: 90,
    backgroundColor: PEACH,
  },
  upperLine2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 29,
    color: BLACK,
  },
  upperLine3: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: BLACK,
    marginTop: 10,
    marginBottom: 20,
  },
});
