import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { PINK, PEACH ,headerColor, lightOrange } from '../../constants/colors';


export const styles = StyleSheet.create({
  colorContainer: {
    // backgroundColor: '#FFECF3',
    backgroundColor:headerColor,
    marginVertical: '5%',
    paddingVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textBlock: {
    alignItems: 'center',
  },
  unit: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 21,
    color:lightOrange,
  },
  labels: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color:lightOrange,
    marginTop: 15,
  },
  value: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 32,
    color:lightOrange,
  },
});
