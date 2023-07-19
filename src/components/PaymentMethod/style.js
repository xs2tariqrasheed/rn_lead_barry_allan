import { StyleSheet } from 'react-native';
import { RUBIK_MEDIUM } from '../../constants/fonts';
import { BLACK, LIGHT_PEACH } from '../../constants/colors';

export const styles = StyleSheet.create({
  lowerContainer: {
    paddingVertical: 10,
    backgroundColor: LIGHT_PEACH,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    elevation: 5,
    height: '30%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginTop: 15,
  },
  klarnaLogo: {
    width: 120,
    height: 30,
    marginRight: 10,
    marginBottom: 6,
  },
  upperLine: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 17,
    color: BLACK,
  },
});
