import { StyleSheet } from 'react-native';
import { RUBIK_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  heading: {
    marginHorizontal: '6%',
    marginTop: 10,
    marginBottom: 3,
    paddingVertical: 10,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
});
