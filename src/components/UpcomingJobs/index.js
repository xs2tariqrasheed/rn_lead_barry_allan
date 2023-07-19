import React, { useCallback , useState, } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getUpcomingJobs } from '../../actions/jobs.action';
import { timeParsed } from '../../utils/time';
import { CardFixer } from '../common';
import { CardFixerComponent2 } from '../index';
import InfoModal from '../Modals/InfoModal';
import { setBlur } from '../../actions/blur.action';


export default () => {
  const dispatch = useDispatch();
  const [isInfoVisible ,setInfoModalVisible] = useState(false)
  const [refreshing ,setRefreshing] = useState(false)
  const jobs = useSelector((state) => state.upcomingJobs);

 
  useFocusEffect(
    useCallback(() => {
      dispatch(getUpcomingJobs());
    }, [])
  );

  const closeInfoModal =()=>{
    setInfoModalVisible(false)
    dispatch(setBlur(false))
  }

  const handleInfoModa=()=>{
    setInfoModalVisible(true)
    dispatch(setBlur(true))


  }
  const onRefresh=()=>{
   setRefreshing(true)
   dispatch(getUpcomingJobs());
   setRefreshing(false)

  }
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
    <View style={{backgroundColor:"#FFF7F4"}}>
      {jobs &&
        jobs.map((item) => {
          const { month, date, time } = timeParsed(item.appointment_at);

          return (
            <CardFixer
              key={item.id}
              iconName={item.service.icon}
              text={item.service.title}
              color={item.service.color}
              lowerText={
                <Text>
                  {month}-{date} {time}
                </Text>
              }
              expanded={<CardFixerComponent2 
                data={item}
                handleInfoModa={handleInfoModa}
                 />}
            />
          );
        })}

        <InfoModal
        visible={isInfoVisible}
        iconName={'checkcircle'}
        iconType={'AntDesign'}
        infoText={'Job canceled'}
        handleSaveChanges={closeInfoModal}
      />
    </View>
    </ScrollView>
  );
};
