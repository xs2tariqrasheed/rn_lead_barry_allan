import { StyleSheet } from 'react-native';
import { PINK, PEACH, BROWN ,black, lightOrange, WHITE } from '../../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: '10%',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '7%',
    borderBottomWidth: 2,
    marginVertical: 15,
    marginTop: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color:black,
  },
  value: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 17,
    color: '#000',
  },
  inputContainer: {
    marginTop: 15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:'7%'
  
  },
  inputHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: '8%',
    marginTop: 5,
  },
  input: {
    marginHorizontal: '7%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius: 11,
    marginTop: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '8%',
    marginTop: '1%',
  },
  status: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
  },
  statusZon: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
    width:"80%"
  },
  bold: {
    fontFamily: RUBIK_MEDIUM,
    fontWeight:"bold",
    color: '#3C3C3C',
    fontSize: 16,
    marginHorizontal: '1%',
  },
  change: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BROWN,
  },
  fortnoxText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: WHITE,
  },
  pinkText: {
    color: lightOrange,
  },
  buttonContainer: {
    marginTop: '5%',
  },
  menu: {
    width: '85%',
    marginHorizontal: '5%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft:20
  },
  menuItemSelected: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: lightOrange,
    marginLeft: 20
  }
});
