import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getWorkersRequest } from '../../api/admin.api';
import { Header, ListItemWorker } from '../../components/common';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { WORKER_DETAILS_SCREEN } from '../../constants/screens';
import { appColor, headerColor } from '../../constants/colors';

export default () => {
  const navigation = useNavigation();
  const [workers, setWorkers] = useState([]);
  const [search, setSearch] = useState('');

  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />;

  useFocusEffect(
    useCallback(() => {
      getWorkersRequest()
        .then((res) => setWorkers(res.data))
        .catch(() => Alert.alert('Error!', 'Unable to get workers'));
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={headerColor}
        leftPress={navigation.goBack}
      />

      <View style={styles.searchBar}>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Skriv in ID, namn eller personnr"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Icon name="search" type="font-awesome-5" color="#000" size={20} />
        </TouchableOpacity>
      </View>

      <Text style={styles.listHeading}>Sortera efter: Aktiva</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {workers &&
          workers
            .filter(
              (worker) =>
                String(worker.id).includes(search) ||
                worker.first_name.includes(search) ||
                worker.last_name.includes(search)
            )
            .map((worker) => {
              const name = worker.first_name + ' ' + worker.last_name;

              return (
                <ListItemWorker
                  key={worker.id}
                  title={name}
                  id={worker.id}
                  status={worker.active}
                  onPress={() =>
                    navigation.navigate(WORKER_DETAILS_SCREEN, {
                      worker: worker,
                    })
                  }
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor,
  },
  headerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    paddingHorizontal: '5%',
    marginVertical: 10,
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  searchInput: {
    width: '90%',
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    paddingVertical:10,
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
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
});
