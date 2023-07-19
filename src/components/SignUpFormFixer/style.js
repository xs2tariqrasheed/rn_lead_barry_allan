import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';
import { DARK_GRAY, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: '8%',
  },
  inputLabel: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: DARK_GRAY,
    marginLeft: '9%',
    marginVertical: 6,
    marginTop: '5%',
  },
  input: {
    borderRadius: 10,
    marginHorizontal: '8%',
    paddingLeft: '5%',
    paddingVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: DARK_GRAY,
    backgroundColor: WHITE,
    elevation: 2,
  },
  subHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: DARK_GRAY,
    marginLeft: '8%',
    marginTop: '10%',
    marginBottom: 5,
  },
  checkContainer: {
    marginTop: 15,
    marginBottom: 10,
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
    color: '#A85A58',
  },
});
