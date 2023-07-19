import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, FLORAL_WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '10%',
    backgroundColor: FLORAL_WHITE,
    borderRadius: 30,
    padding: 20,
    elevation: 5,
  },
  modalHeadingContainer: {
    marginVertical: 15,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: BLACK,
    marginHorizontal: '5%',
    paddingBottom: 15,
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    textAlign: 'center',
  },
  modalSubHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 23,
    color: BLACK,
    textAlign: 'center',
  },
  modalMessageContainer: {
    marginHorizontal: '5%',
    marginTop: 15,
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    lineHeight: 22,
    marginBottom: 10,
  },
  modalButtonContainer: {
    marginVertical: 10,
  },
});
