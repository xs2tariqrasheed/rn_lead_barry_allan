import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getBookings } from '../../api/admin.api';
import { OpenJobs, FinishedJobsAdmin } from '../../components';
import { Header } from '../../components/common';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import {appColor, headerColor}from '../../constants/colors'

export default () => {
  const navigation = useNavigation();

  const [openJobs, setOpenJobs] = useState([]);
  const [finishedJobs, setFinishedJobs] = useState([]);
  const [upcoming, setUpcoming] = useState(true);
  const [finished, setFinished] = useState(false);
  const [refreshing ,setRefreshing] = useState(false)


  const selectUpcoming = () => {
    setUpcoming(true);
    setFinished(false);
  };

  const selectFinished = () => {
    setUpcoming(false);
    setFinished(true);
  };

  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = <Text style={styles.headerText}>Manage jobs</Text>;

  useFocusEffect(
    useCallback(() => {
      getBookings()
        .then((res) => {
          setOpenJobs(
            res.data.filter(
              (job) => job.status === 'pending' || job.status === 'paid'
            )
          );
          setFinishedJobs(
            res.data.filter(
              (job) => job.status === 'done' || job.status === 'disputed'
            )
          );
        })
        .catch(() => Alert.alert('Error!', 'Unable to get bookings'));
    }, [])
  );
  const onRefresh=()=>{
    setRefreshing(true)
    getBookings()
        .then((res) => {
          setOpenJobs(
            res.data.filter(
              (job) => job.status === 'pending' || job.status === 'paid'
            )
          );
          setFinishedJobs(
            res.data.filter(
              (job) => job.status === 'done' || job.status === 'disputed'
            )
          );
        })
        .catch(() => Alert.alert('Error!', 'Unable to get bookings'));
    setRefreshing(false)
 
   }
  const Heading = () => (
    <View style={styles.headingContainer}>
      <TouchableOpacity
        onPress={selectUpcoming}
        style={[styles.heading, upcoming && styles.selected]}
      >
        <Text style={[styles.text, upcoming && styles.selectedText]}>
          Öppna jobb
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectFinished}
        style={[styles.heading, finished && styles.selected]}
      >
        <Text style={[styles.text, finished && styles.selectedText]}>
          Avslutade jobb
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={headerColor}
        leftPress={navigation.goBack}
      />
      
      <Heading />
      {upcoming ? (
        <OpenJobs jobs={openJobs} loadMore={() => {onRefresh}} refreshing={refreshing} />
      ) : (
        <FinishedJobsAdmin jobs={finishedJobs}  loadMore={() => {onRefresh}} refreshing={refreshing} />
      )}
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
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: '3%',
  },
  heading: {
    width: '50%',
    marginVertical: 10,
  },
  selected: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  text: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#000',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 7,
  },
  selectedText: {
    opacity: 1,
  },
});
