import { StyleSheet } from 'react-native';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { PINK, PEACH ,black, lightOrange  } from '../../constants/colors';

export const styles = StyleSheet.create({
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: '#000',
    marginLeft: '8%',
    marginTop: '5%',
    marginRight: '18%',
  },
  headerText: {
    marginLeft: '8%',
    // marginTop: '5%',
    marginRight: '18%',
    color:black,
    fontSize:22,
    fontFamily:RUBIK_MEDIUM,
    fontWeight:'600'
  },
  imageContainer: {
    paddingLeft: '8%',
    // marginTop: 15,
    marginTop:'10%'
  },
  icon: {
    position: 'absolute',
    right: 25,
    top: 20,
    zIndex: 1,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 15,
  },
  buttonContainer: {
    position:'absolute',
    bottom:'5%',
    alignSelf:'center',
    width:'95%'
  },
  imgView:{
      backgroundColor:lightOrange,
      width:120,
      height:120,
      borderRadius:140/2,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:'10%'
  }
});
