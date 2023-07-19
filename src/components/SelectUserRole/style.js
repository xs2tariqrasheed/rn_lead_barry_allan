import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  lowerContainerHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 24,
    color: '#141414',
    textAlign: 'center',
    marginVertical: 10,
  },
  customer: {
    textAlign: 'center',
    marginVertical: 10,
  },
  worker: {
    textAlign: 'center',
    marginVertical: 10,
  },
  admin: {
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  selectedFont: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#141414',
  },
  defaultFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#5D5D5D',
  },
});
