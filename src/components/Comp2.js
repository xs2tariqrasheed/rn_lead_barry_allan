import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from './common';
import { PINK, PEACH } from '../constants/colors';
import {
  RUBIK_REGULAR,
  RUBIK_MEDIUM,
  RUBIK_MEDIUM_ITALIC,
} from '../constants/fonts';

export default () => {
  const dummyData = [
    '5 x Hänga upp gardiner',
    'Hänga upp tavlor/speglar',
    'Hänga upp hyllor',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
          <Icon name="image" type="font-awesome-5" color="#000" size={25} />
        </View>
        <View style={styles.cardText}>
          <View>
            <Text style={styles.heading}>Fixare</Text>
            <Text style={styles.desc1}>Brooke Linja</Text>
          </View>
          <View>
            <Text style={styles.heading}>På väg till</Text>
            <Text style={styles.desc2}>Drottninggatan 11 120 47 Stockholm</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
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
        <View style={styles.inlineText}>
          <Text style={styles.text}>
            <Text style={styles.textMedium}>750kr</Text> - Betalt!
          </Text>
          <Icon
            name="check-circle"
            type="font-awesome-5"
            color="#47DBFE"
            size={18}
            solid
          />
        </View>
        <Button text="Godkänn jobb" color={PEACH} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFEDF4',
    paddingVertical: 25,
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: PINK,
    justifyContent: 'center',
    marginRight: 15,
  },
  cardText: {
    width: '35%',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: PINK,
  },
  desc1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: '#3C3C3C',
  },
  desc2: {
    fontFamily: RUBIK_MEDIUM_ITALIC,
    fontSize: 12,
    color: '#3C3C3C',
    lineHeight: 17,
  },
  lowerContainer: {
    width: '70%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  pointerContainer: {
    marginBottom: 15,
    marginLeft: '10%',
  },
  pointer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: '#3C3C3C',
    marginVertical: 4,
    marginLeft: '6%',
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: '#000',
    marginRight: 10,
  },
  textMedium: {
    fontFamily: RUBIK_MEDIUM,
  },
});
