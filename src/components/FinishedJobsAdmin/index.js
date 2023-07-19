import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { ListItem } from '../common';
import { styles } from './style';
import { FINISHED_JOB_DETAILS_SCREEN } from '../../constants/screens';

export default ({ jobs, loadMore, refreshing }) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  return (
    <>
      <View style={styles.searchBar}>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Skriv in Jobb-ID"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Icon name="search" type="font-awesome-5" color="#000" size={20} />
        </TouchableOpacity>
      </View>

      <Text style={styles.listHeading}>Sortera efter: Dispyt</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={loadMore} />
    }>
        {jobs &&
          jobs
            .filter(
              (job) =>
                String(job.id).includes(search) ||
                job.service.title.includes(search)
            )
            .map((job) => (
              <ListItem
                key={job.id}
                title={job.service.title}
                id={job.id}
                status={job.status}
                onPress={() =>
                  navigation.navigate(FINISHED_JOB_DETAILS_SCREEN, { job: job })
                }
              />
            ))}
      </ScrollView>
    </>
  );
};
