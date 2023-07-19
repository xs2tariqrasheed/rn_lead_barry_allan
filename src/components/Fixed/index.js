import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { timeParsed } from '../../utils/time';
import { FixedJobDetails } from '../index';
import { CardProfile } from '../common';
import { styles } from './style';
import { BLACK } from '../../constants/colors';
import moment from "moment";
import 'moment/locale/sv';

export default ({ bookings }) => {
  const services = useSelector((state) => state.services);
  bookings = bookings.filter((booking) => booking.status === 'done');

  const displayFixed = (booking) => {
    const service = services.find((s) => s.id === booking.service_id);
    // const { month, date, time } = timeParsed(booking.appointment_at);
    let time_appointment = moment.utc(new Date(booking.appointment_at)).local('sv').format('lll');

    return (
      <CardProfile
        key={booking.id}
        iconName={service.icon}
        text={service.title}
        color={service.color}
        lowerText={time_appointment}
        expanded={<FixedJobDetails booking={booking} service={service} />}
      />
    );
  };

  return (
    <View>
      <View style={styles.heading}>
        <Icon
          name="check-circle"
          type="font-awesome-5"
          color={BLACK}
          size={16}
          solid
        />
        <Text style={styles.text}>Fixat!</Text>
      </View>
      {bookings.map((booking) => displayFixed(booking))}
    </View>
  );
};
