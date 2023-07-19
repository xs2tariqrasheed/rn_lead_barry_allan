import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { assignJob } from '../actions/jobs.action';
import { Button } from '../components/common';
import { timeParsed } from '../utils/time';
import {
  RUBIK_MEDIUM,
  RUBIK_REGULAR,
  RUBIK_LIGHT_ITALIC,
} from '../constants/fonts';
import {appColor, black, headerColor, lightOrange} from '../constants/colors'
import moment from "moment";
import 'moment/locale/sv';

export default ({ data ,assign_Job }) => {
  const dispatch = useDispatch();
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

  const { month, date, time } = timeParsed(data.appointment_at);
  const time_appointment = moment.utc(new Date(data.appointment_at)).local('sv').format('HH:mm');

  return (
    <View style={styles.container}>
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
          <Text style={styles.text}>{time_appointment}</Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <Icon
          name="map-marker-alt"
          type="font-awesome-5"
          color={lightOrange}
          size={20}
        />
        <View style={styles.textContainer}>
          <Text style={styles.line1}>
            {data.place ? data.place : 'location not available'}
          </Text>
        </View>
      </View>
      <View style={styles.coloredContainer}>
        <Text style={styles.colorBoxText}>
          {data.notes ? data.notes : 'no additional info...'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Fix!"
          color={lightOrange}
          onPress={assign_Job}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
     backgroundColor:'#FFF3EF',
     borderBottomEndRadius:22,
     borderBottomLeftRadius:22,
     borderWidth:5,
     elevation:2,
     borderColor:'#FFF3EF',
     shadowColor:'#000000',
     shadowOffset:{height:0.6,width:0.3},
     shadowOpacity:0.7,
     shadowRadius:0.2,
    //  marginLeft:2,
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
    fontSize: 15,
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
    backgroundColor:headerColor,
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
    marginVertical: 15,
  },
  textContainer: {
    marginLeft: 15,
    width: '60%',
  },
  line1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: '#141414',
  },
  line2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: '#141414',
  },
  coloredContainer: {
    alignItems: 'center',
    backgroundColor:headerColor,
    marginBottom: 15,
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
    marginBottom: '6%',
  },
});
