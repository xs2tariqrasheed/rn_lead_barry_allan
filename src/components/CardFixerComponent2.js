import React, { useState } from 'react';
import * as types from '../constants/actions';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Platform} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { Button } from '../components/common';
import { timeParsed } from '../utils/time';
import { updateUpcomingJobs } from '../actions/jobs.action';
import { cancelBookingRequest } from '../api/bookings.api';
import MapView, { Marker } from 'react-native-maps';
import {
  RUBIK_MEDIUM,
  RUBIK_REGULAR,
  RUBIK_LIGHT_ITALIC,
  RUBIK_BLACK,
  RUBIK_LIGHT,
} from '../constants/fonts';
import { PINK, PEACH, LIGHT_PEACH, BLACK } from '../constants/colors';
import { FIXER_TIMER_SCREEN } from '../constants/screens';
import {appColor, black, headerColor, lightOrange} from '../constants/colors'
import ViewMoreText from 'react-native-view-more-text';
import StartFixing from '../components/Modals/StartFixingModal'
import JobCancel from './Modals/CancelJobModal'
import InfoModal from './Modals/InfoModal'
import { flatMap } from 'lodash';
import { cancelJobRequest } from '../api/jobs.api';
import { setBlur } from '../actions/blur.action';
import moment from "moment";
import { bookingRequest } from '../api/bookings.api';


export default ({ data , handleInfoModa , }) => {
  console.log("===>")
  var __date = new Date();
  var minute20 = __date.setMinutes(__date.getMinutes()+20);
  let curr_time = moment().utc(new Date(minute20)).local().format('YYYY-MM-DD HH:mm')
  let start_time = moment().utc(new Date(data.appointment_at)).local().format('YYYY-MM-DD HH:mm')
  const { month, date, time } = timeParsed(data.appointment_at);
  const { cmonth, cdate, ctime } = timeParsed(__date);
  const [cd, ct]   = curr_time.split(' ') 
  const [sd, st] = start_time.split(' ') 
  let disable = false

  if(data < cdate){
    disable = true
  }else{
    if(cd >=sd && ct >= st){
      disable = false
    }else{
      disable = true
    }
  }
 

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setCancelModal] = useState(false);
  const [isJobCancle, setJobCancel] = useState(false)
  const [isAndroid, setIsAndroid] = useState(Platform.OS == "android" ? true : false)
  

  const handle_cancel_job_checkbox = () => {
    setJobCancel(!isJobCancle)
  }
  const onCancelJob = (job_id) => {
    

    dispatch(unassignJob(job_id))
    dispatch(setBlur(false))
    setCancelModal(false)
    
    
  }
  // console.log('here is data',data.coordinates)
 
  const unassignJob =(id)=>{
    return (dispatch) => {
      cancelJobRequest(id)
        .then((res) => {
          dispatch(updateUpcomingJobs(res.data));

          setTimeout(() => {
            handleInfoModa()
          }, 1500);
          // Alert.alert('Success!', 'job unassigned');
        })
        .catch((err) => {
          console.log('error',err);
        });
    };
  }

  const updateUpcomingJobs = (payload) => ({
    type: types.UPDATE_UPCOMING_JOBS,
    payload: payload,
  });
  const close_Cancel_Modal = () => {
    setCancelModal(false)
    dispatch(setBlur(false))

  }

  const close_Fixing_Modal = () => {
    setShowModal(false)
    dispatch(setBlur(false))
  }
  function startJob() {
    setShowModal(false)
    dispatch(setBlur(false))
    navigation.navigate(FIXER_TIMER_SCREEN, { jobId: data.id })
  }
  const coinIcon = (
    <Icon name="coins" type="font-awesome-5"
      color={black}
      size={20} />
  );
  const calendarIcon = (
    <Icon
      name="calendar"
      type="font-awesome-5"
      color={black}
      size={20}
      solid
    />
  );
  const clockIcon = (
    <Icon name="clock" type="font-awesome-5"
      color={black}
      size={20} solid />
  );

  const price =
    data.service.price_type === 'hourly'
      ? data.service.price == null
        ? '0'
        : data.service.price * data.quantity + ' kr'
      : `${data.service.prices[data.quantity - 1]} kr`;

  const renderViewMore = (onPress) => {
    return (
      <Text
        style={{
          color: '#A85A58',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 5,
        }}
        onPress={onPress}>View more</Text>
    )
  }

  const renderViewLess = (onPress) => {
    return (
      <Text
        style={{
          color: '#A85A58',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 5,
        }}
        onPress={onPress}>View less</Text>
    )
  }

  return (
    <View style={styles.container}>
          <Text style={styles.orderNo}>Ordernr: {data.id}</Text>

      <View style={styles.topText}>
        <Text style={styles.name}>
          {data.first_name} {data.last_name}
        </Text>
        <Text style={styles.item}>
          {data.quantity} x {data.service.title}
        </Text>
      </View>

      <View style={styles.elevatedCard}>
        <View>
          {coinIcon}
          <Text style={styles.text}>{price}</Text>
        </View>
        <View>
          {calendarIcon}
          <Text style={styles.text}>
            {month}-{date}
          </Text>
        </View>
        <View>
          {clockIcon}
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addressContainer} onPress={() => {
        let url = `geo:0,0?q=${data.coordinates.latitude},${data.coordinates.longitude}`;
        if(!isAndroid){
         url = `http://maps.apple.com/?ll=${data.coordinates.latitude},${data.coordinates.longitude}`;

        }
        Linking.openURL(url)

   
      }}>
        <Icon
          name="map-marker-alt"
          type="font-awesome-5"
          color={lightOrange}
          size={20}
        />
        <View style={[styles.textContainer, { top: 6 }]}>
          <Text style={styles.line1}>
            {data.place ? data.place : 'location not available'}
          </Text>
          <Text style={styles.subline}>
            {data.street_address}
          </Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.addressContainer} onPress={() => Linking.openURL("tel:"+data.customer.phone_no)}>
        <Icon
          name="mobile-alt"
          type="font-awesome-5"
          color="#FEA88D"
          size={20}
        />
        <View style={styles.textContainer}>
          <Text style={styles.line1}>
            {data.customer.phone_no}
          </Text>

        </View>
      </TouchableOpacity>

      {/* <View style={styles.late_heading}>
        <Text style={styles.line1}>Are tou late?</Text>
        <Text style={styles.notifyText}> Notify Customer</Text>
      </View> */}

      <View style={{ width: "100%", backgroundColor: LIGHT_PEACH, alignItems: "center", alignContent: "center", paddingBottom: 15 }}>
        <View style={{ width: "70%" }}>
          <View style={{ marginTop: 25 }}>
            <Text style={styles.fromCust}>From Customer</Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.locStyle}> Portkod: {data.place}, {data.port_code}</Text>
          </View>

          <View style={{ marginVertical: 5, width: "80%" }}>
            <Text style={styles.sublineItalic}>
              {data.notes}
        </Text>
          </View>
          {data.service.icon =='dot-circle' || data.service.icon =='car-side' ?

<View style={{ width: "100%" }}>
<View style={{ marginVertical: 5 }}>
            <Text style={styles.locStyle}>Car information</Text>
          </View>

          <View style={{ width: "100%", borderBottomColor: "#000", borderBottomWidth: 1 }}></View>

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo}>Registreringnr.</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo2}>{data.registration_number ? data.registration_number : 'Not available'}</Text>
            </View>
          </View>

          <View style={{ marginTop: 10, flexDirection: "row" }}>

            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo}>Brand</Text>
            </View>

            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo2}>{data.car_brand ? data.car_brand : 'Not available'}</Text>
            </View>

          </View>

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo}>Model</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo2}>{data.model ? data.model : 'Not available'}</Text>
            </View>

          </View>

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo}>Color</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.carInfo2}>{data.color ? data.color : 'Not available'}</Text>
            </View>

          </View>
</View>:
 null 
}
          
          {data.service.icon =='dot-circle' || data.service.icon =='car-side' ?

          <View style={{ marginTop: 25 }}>
            <Text style={styles.parkHeading}>The car is parked here</Text>
          </View>:
           null 
          }

        </View>
        {data.service.icon == 'dot-circle' || data.service.icon =='car-side' ?
        <View style={{ width: "90%", }}>
          <MapView
            mapType={"standard"}
            style={{ width: "100%", height: 180 }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            zoomEnabled={true}
            region={{
              latitude:data?.coordinates?.latitude,
              longitude:data?.coordinates?.longitude,
              latitudeDelta:data?.coordinates?.latitudeDelta,
              longitudeDelta:data?.coordinates?.longitudeDelta,
            }}
          >
            <Marker coordinate={{
              latitude:data?.coordinates?.latitude,
              longitude:data?.coordinates?.longitude,
              latitudeDelta:data?.coordinates?.latitudeDelta,
              longitudeDelta:data?.coordinates?.longitudeDelta,
            }} />
          </MapView>
        </View> : null 
        }


      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Start Fixing"
          color={lightOrange}
          onPress={() => {
            setShowModal(true)
            dispatch(setBlur(true))
          }}
          disabled={disable}
        />
        <Button
          text="Cancel job"
          onPress={() => {
            setCancelModal(true)
            dispatch(setBlur(true))

          }}
        />
      </View>
      <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            You can only cancel a job up until 24h before it starts
          </Text>
      </View>
      <StartFixing
        visible={showModal}
        job_id={data.id}
        startJob={startJob}
        closeModal={close_Fixing_Modal}
      />

      <JobCancel
        visible={showCancelModal}
        job_id={data.id}
        onCancelJob={() => onCancelJob(data.id)}
        handle_chekBox={handle_cancel_job_checkbox}
        isCancel={isJobCancle}
        closeModal={close_Cancel_Modal}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:appColor
    backgroundColor: '#FFF3EF',
    borderBottomEndRadius: 22,
    borderBottomLeftRadius: 22,
    borderWidth: 5,
    elevation: 2,
    borderColor: '#FFF3EF',
    shadowColor: '#000000',
    shadowOffset: { height: 0.6, width: 0.3 },
    shadowOpacity: 0.7,
    shadowRadius: 0.2,
  },
  orderNo: {
    fontFamily: RUBIK_REGULAR,
    fontWeight:"bold",
    fontSize: 16,
    color: BLACK,
    marginTop: '5%',
    marginBottom: 5,
    marginRight: 10,
    textAlign:"right"
   
  },
  topText: {
    marginVertical: 20,
  },
  name: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 21,
    color: '#141414',
    marginBottom: 5,
    textAlign: 'center',
  },
  item: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
    textAlign: 'center',
  },
  elevatedCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '8%',
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 3,
    backgroundColor: headerColor,
    // backgroundColor: '#FFF',
    borderRadius: 20,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
    marginTop: 7,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  textContainer: {
    width: '60%',
    marginLeft: 15,
  },

  subline: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: black,
  },
  notifyText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: '#A85A58',
    marginRight: 5,
  },
  line1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: '#141414',
  },
  line2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: '#141414',
  },
  coloredContainer: {
    alignItems: 'center',
    backgroundColor: headerColor,
    marginBottom: 15,
    marginTop: 15,
    paddingVertical: 20,
  },
  colorBoxText: {
    fontFamily: RUBIK_LIGHT_ITALIC,
    fontSize: 16,
    color: '#141414',
    marginHorizontal: '21%',
  },
  buttonContainer: {
    marginHorizontal: '15%',
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '30%',
    marginBottom: '7%',
  },
  bottomText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 10,
    color: black,
    marginLeft: 10,
    textAlign: 'center',
  },
  late_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,

  },
  fromCust: {
    fontSize: 14,
    fontFamily: RUBIK_REGULAR,
    color: black
  },
  locStyle: {
    fontSize: 16,
    fontFamily: RUBIK_REGULAR,
    color: black,
  },
  sublineItalic: {
    fontSize: 14,
    fontFamily: RUBIK_LIGHT_ITALIC,
    color: black
  },
  carInfo: {
    color: black,
    fontFamily: RUBIK_MEDIUM,
    fontSize: 12,
  },
  carInfo2: {
    fontSize: 12,
    fontFamily: RUBIK_REGULAR,
    textAlign: "right",
    color: black
  },
  parkHeading: {
    color: black,
    fontSize: 16,
    fontFamily: RUBIK_MEDIUM,
    marginBottom: 12,
  }
});
