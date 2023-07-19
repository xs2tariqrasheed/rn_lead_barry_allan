import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR ,RUBIK_MEDIUM  } from '../../constants/fonts';
import {black, lightOrange} from '../../constants/colors'


export const styles = StyleSheet.create({
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginHorizontal: '5%'
  },
  zoneView: {
    flexDirection: 'row',
    width:"70%",
    alignItems:'center',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  zoneheading:{
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#A85A58',
    marginBottom:5,
  },
  welcomeView:{
    marginTop: '5%',
    marginHorizontal: '5%',

  },
  welcomeHeading:{
    fontFamily:RUBIK_REGULAR,
    fontSize: 22,
    color: '#000',
    marginTop:15,
    marginBottom: 15,
  },
  welcomeText:{
    color:black,
    textAlign:'left',
    fontSize:15,
    fontFamily:RUBIK_REGULAR,
  },
  filterView:{
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  filters:{
    paddingHorizontal:10,
    paddingVertical:5,
    borderColor:black,
    borderWidth:1,
   marginHorizontal:5, 
   alignItems:'center',
   justifyContent:'center',
   marginBottom:10,
   borderRadius:15,
  },

  filterSelected:{
    paddingHorizontal:10,
    paddingVertical:5,
    borderColor:lightOrange,
    borderWidth:1,
   marginHorizontal:5, 
   alignItems:'center',
   justifyContent:'center',
   marginBottom:10,
   borderRadius:15,
   backgroundColor:lightOrange,
  },

  filterText:{
    fontWeight:'normal',
    fontFamily:RUBIK_REGULAR,
    fontSize:13,
    color:'#000000'
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
    marginLeft: 20
  },
  menuItemSelected: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: lightOrange,
    marginLeft: 20
  }

});
