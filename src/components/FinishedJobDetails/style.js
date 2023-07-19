import { StyleSheet } from 'react-native';
import { PINK, PEACH, BROWN, lightOrange, LIGHT_PEACH } from '../../constants/colors';
import { RUBIK_BLACK, RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';


export const styles = StyleSheet.create({
  scrollContainer: {
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
  subHeading: {
    marginHorizontal: '7%',
    borderBottomWidth: 2,
    marginVertical: 15,
    marginTop: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 20,
    color: '#000',
  },
  subTitle: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 17,
    color: '#000',
  },
  value: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 17,
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '7%',
    marginVertical: 12,
  },
  doneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7%',
    marginVertical: 12,
    paddingVertical: 12,
    backgroundColor:LIGHT_PEACH
  },
  status: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
  },
  detailStatus: {
    fontSize: 16,
    color: '#3C3C3C',
  },
  bold: {
    fontFamily: RUBIK_MEDIUM,
  },
  alignRight: {
    textAlign:"right",
    fontSize:16,
    color:"#3c3c3c"
  },
  alignRightSub: {
    textAlign:"right",
    fontSize:12

  },
  boldText: {
    fontWeight: "bold",
    fontSize:16,
    color:"#3c3c3c"
  },
  rightText: { 
    textAlign: "right",
    fontFamily:RUBIK_REGULAR,
     fontWeight: "bold",
      fontSize: 16 
    },
    rightSubText: { 
      textAlign: "right",
       fontWeight: "bold",
        fontSize: 13,
        color:"#141414"
      },
  change: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BROWN,
  },
  jobContainer: {
    marginVertical: 5,
    marginHorizontal: '7%',
  },
  jobHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobTitle: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    fontWeight: "bold",
    color: '#141414',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '7%',
  },
  quantityLeft: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
  },
  quantityRight: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: '#141414',
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '7%',
    marginTop: 15,
  },
  paymentLeft: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 18,
    color: '#000',
  },
  paymentRight: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: '#141414',
  },
  paymentText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: '#141414',
    textAlign: 'right',
    marginRight: '7%',
    marginVertical: 10,
  },
  inputHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: '8%',
    marginTop: 5,
  },
  fixerHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontWeight:"bold",
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: '8%',
    marginTop: 5,
  },
  fixerContainer: {
    marginHorizontal: '7%',
    marginVertical: 5,
    marginBottom: 15,
  },
  inlineData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  fixerName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 22,
    height: 22,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PEACH,
  },
  name: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: 10,
  },
  inputContainer: {
    marginTop: 15,
  },
  input: {
    marginHorizontal: '7%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 11,
    marginTop: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
  },
  timeBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
    marginHorizontal: '7%',
  },
  timeHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: 5,
  },
  leftBlock: {
    width: '45%',
  },
  rightBlock: {
    width: '30%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 11,
    elevation: 2,
  },
  time: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#3C3C3C',
    marginLeft: 10,
  },
  buttonContainer: {
    marginVertical: 15,
  },
  menu: {
    width: '85%',
    marginHorizontal: '5%',
    marginTop: -15,
  },
  menuItem: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#3C3C3C',
  },
  workerMenu: {
    height: '27%',
    width: '85%',
    marginHorizontal: '5%',
    marginTop: -15,
  },
  selectedMenu: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: lightOrange,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '8%',
    elevation: 5,
  },
  modalCancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  modalImage: {
    height: 450,
    width: '100%',
    borderRadius: 30,
  },

});
