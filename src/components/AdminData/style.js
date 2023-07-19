import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { PINK, PEACH ,black } from '../../constants/colors';

export const styles = ({ border }) =>
  StyleSheet.create({
    container: {
      marginBottom: '10%',
      marginTop:'2%'
    },
    colorContainer: {
      backgroundColor: '#FFECF3',
      marginVertical: '5%',
      marginBottom: '7%',
      paddingVertical: '5%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    textBlock: {
      alignItems: 'center',
    },
    labels: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 13,
      color: PINK,
      marginTop: 10,
    },
    value: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 45,
      color: PINK,
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: '8%',
      marginVertical: 5,
      paddingRight: 8,
      borderBottomWidth: border ? 0 : 1,
      borderColor: '#D8D8D8',
      paddingBottom: 10,
    },
    key: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 16,
      color:black,
      width: '60%',
    },
    count: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 26,
      color: black,
    },
  });
