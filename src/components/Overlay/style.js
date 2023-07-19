import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, BROWN, LIGHT_PEACH } from '../../constants/colors';

export const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    elevation: 0.5,
    paddingBottom: 20,
    position: 'absolute',
    top: 50,
    left: 0,
    backgroundColor: LIGHT_PEACH,
  },
  overlayItem: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: BLACK,
    marginVertical: 10,
    marginLeft: 20,
  },
  backdrop: {
    backgroundColor: 'transparent', 
  },
  pinkText: {
    color: BROWN,
  },
});
