import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../constants/fonts';
import {
  EERIE_BLACK,
  PEACH,
  appColor,
  black,
  headerColor,
  lightOrange,
} from '../constants/colors';

export default ({ data }) => {
  const dummyData = [
    '5 x Hänga upp gardiner',
    'Hänga upp tavlor/speglar',
    'Hänga upp hyllor',
  ];

  const coinIcon = (
    <Icon name="coins" type="font-awesome-5" color="#000" size={20} />
  );
  const clockIcon = (
    <Icon name="clock" type="font-awesome-5" color="#000" size={20} solid />
  );

  const price =
    data.service.price_type === 'hourly'
      ? data.service.price == null
        ? '0'
        : data.service.price * data.quantity + ' kr'
      : `${data.service.prices[data.quantity - 1]} kr`;

  const name = data.first_name + ' ' + data.last_name;

  const StarRatings = () => (
    <View style={styles.coloredContainer}>
      <Text style={styles.colorBoxHeading}>Your Rating</Text>
      <View style={styles.customerRatingView}>
        <Text style={styles.colorBoxHeading}>By Customer:</Text>
        <Text style={styles.colorBoxHeading}>{name}</Text>
      </View>

      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.star}>
            <Icon
              name="star"
              type="font-awesome-5"
              color={lightOrange}
              size={35}
              solid={data.customer_rating >= item}
            />
          </View>
        ))}
      </View>
    </View>
  );

  const ServiceDetails = () => (
    <View style={styles.serviceDetails}>
      <View style={styles.inline}>
        <View>{coinIcon}</View>
        <Text style={styles.text}>{price}</Text>
      </View>
      <View style={styles.inline}>
        <View>{clockIcon}</View>
        <Text style={styles.text}>
          {data.time_taken.substr(3, 2)} min {data.time_taken.substr(6, 2)} sek
        </Text>
      </View>
    </View>
  );

  const Tasks = () => (
    <View style={styles.pointerContainer}>
      {dummyData.map((item, index) => (
        <View key={index} style={styles.pointer}>
          <Icon
            name="arrow-right"
            type="font-awesome-5"
            color={PEACH}
            size={15}
          />
          <Text style={styles.pointText}>{item}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <>
      <StarRatings />
      <ServiceDetails />
    </>
  );
};

const styles = StyleSheet.create({
  coloredContainer: {
    // backgroundColor: '#FFEDF4',
    backgroundColor: appColor,
    // marginBottom: 15,
    paddingVertical: 30,
  },
  colorBoxHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 17,
    color: '#2E2E2E',
    textAlign: 'center',
    marginTop: 5,
    // marginVertical: 10,
  },
  colorBoxCustomer: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: EERIE_BLACK,
    textAlign: 'center',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  star: {
    marginHorizontal: 5,
  },
  serviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    // marginBottom: 25,
    backgroundColor: headerColor,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: black,
    marginLeft: 15,
  },
  name: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 21,
    color: black,
    marginBottom: 5,
    textAlign: 'center',
  },
  pointerContainer: {
    marginLeft: '25%',
    marginVertical: 10,
    marginBottom: '8%',
  },
  pointer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color: '#3C3C3C',
    marginVertical: 4,
    marginLeft: '6%',
  },
  customerRatingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
