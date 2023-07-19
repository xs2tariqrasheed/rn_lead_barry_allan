import { StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';

export const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    paddingHorizontal: '5%',
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  searchInput: {
    width: '90%',
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    paddingVertical:10
  },
  listHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: '#000',
    marginLeft: '6%',
    marginTop: 15,
    marginBottom: 5,
  },
  scrollContainer: {
    paddingBottom: 10,
  },
});
