import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from './common';
import {
  BLACK,
  BROWN,
  DARK_GRAY,
  LIGHT_PEACH,
  PEACH,
  SOFT_RED,
} from '../constants/colors';
import {
  RUBIK_REGULAR,
  RUBIK_MEDIUM,
  RUBIK_MEDIUM_ITALIC,
} from '../constants/fonts';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
          <Icon name="image" type="font-awesome-5" color={BLACK} size={25} />
        </View>
        <View style={styles.overlapImage}>
          <Icon name="image" type="font-awesome-5" color={BLACK} size={25} />
        </View>
        <View style={styles.cardText}>
          <View style={styles.textBlock}>
            <Text style={styles.heading}>Fixare</Text>
            <Text style={styles.desc1}>- Brooke Linja</Text>
            <Text style={styles.desc1}>- Laura Dern</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.heading}>På väg till</Text>
            <Text style={styles.desc2}>Drottninggatan 11 120 47 Stockholm</Text>
          </View>
        </View>
      </View>
      <View style={styles.coloredContainer}>
        <View style={styles.lowerContainer}>
          <View style={styles.inlineText}>
            <Text style={styles.text}>
              <Text style={styles.textMedium}>750kr</Text> - Betalt!
            </Text>
            <Icon
              name="check-circle"
              type="font-awesome-5"
              color={BLACK}
              size={18}
              solid
            />
          </View>
          <Button text="Godkänn jobb" color={PEACH} />
          <Button text="Avboka" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text1}>
            Du kan endast avboka ett jobb senast 24h timmar innan!
          </Text>
          <TouchableOpacity>
            <Text style={styles.text2}>Läs mer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF3EF',
    paddingVertical: 25,
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: SOFT_RED,
    backgroundColor: LIGHT_PEACH,
    justifyContent: 'center',
    marginRight: 15,
  },
  overlapImage: {
    height: 95,
    width: 95,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: SOFT_RED,
    backgroundColor: LIGHT_PEACH,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
  cardText: {
    width: '35%',
  },
  textBlock: {
    marginTop: 10,
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: SOFT_RED,
  },
  desc1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: DARK_GRAY,
  },
  desc2: {
    fontFamily: RUBIK_MEDIUM_ITALIC,
    fontSize: 12,
    color: DARK_GRAY,
    lineHeight: 17,
  },
  coloredContainer: {
    backgroundColor: LIGHT_PEACH,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  lowerContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginRight: 10,
    marginVertical: 5,
  },
  textMedium: {
    fontFamily: RUBIK_MEDIUM,
  },
  textContainer: {
    width: '60%',
    alignSelf: 'center',
    marginLeft: '10%',
    marginBottom: 20,
  },
  text1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 12,
    color: BLACK,
  },
  text2: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 12,
    color: BROWN,
    marginTop: 3,
  },
});
