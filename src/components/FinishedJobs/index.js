import React, { useEffect,useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFinishedJobs } from '../../actions/jobs.action';
import { timeParsed } from '../../utils/time';
import { CardFixer } from '../common';
import { CardFixerComponent3 } from '../index';
import { styles } from './style';
import { getTotalEarnings } from '../../api/admin.api';

export default () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.finishedJobs);
  const [refreshing ,setRefreshing] = useState(false)
  const [total_count ,setTotalCount] = useState(0)

  useEffect(() => {
    dispatch(getFinishedJobs());
    totalEarnings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalEarnings = () => {
    getTotalEarnings()
    .then((_res) => {
      let responseObj = _res.data;
      let total_earned = responseObj.earned_total
      setTotalCount(total_earned)
    })
    .catch((_err) => console.log("total counts err", _err))
  };

  const Earnings = () => (
    <View style={styles.colorContainer}>
      <View style={styles.textBlock}>
        <Text style={styles.value}>
          {total_count}
          <Text style={styles.unit}>kr</Text>
        </Text>
        <Text style={styles.labels}>Total earnings</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.value}>{jobs.length}</Text>
        <Text style={styles.labels}>Finished jobs</Text>
      </View>
    </View>
  );
  const onRefresh=()=>{
    setRefreshing(true)
    dispatch(getFinishedJobs());
    setRefreshing(false)
 
   }
  return (
    <>
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
    <Earnings />
      {jobs &&
        jobs.map((job) => {
          const { month, date, time } = timeParsed(job.appointment_at);

          return (
            <CardFixer
              key={job.id}
              iconName={job.service.icon}
              text={job.service.title}
              color={job.service.color}
              lowerText={
                <Text>
                  {month}-{date} {time}
                </Text>
              }
              expanded={<CardFixerComponent3 data={job} />}
            />
          );
        })}
    </ScrollView>
     
    </>
  );
};
