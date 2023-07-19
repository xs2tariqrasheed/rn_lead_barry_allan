import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  BLACK,
  DARK_GRAY,
  LIGHT_PEACH,
  PEACH,
  SOFT_RED,
} from '../constants/colors';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../constants/fonts';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
          <Icon
            name="hourglass-start"
            type="font-awesome-5"
            color="#F4F9FF"
            size={50}
          />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.heading}>Fixare</Text>
          <Text style={styles.desc}>Letar fixare…</Text>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: 'row',
    paddingLeft: '15%',
    alignItems: 'center',
    backgroundColor: '#FFF3EF',
    paddingVertical: 25,
  },
  imageContainer: {
    height: 110,
    width: 110,
    borderRadius: 55,
    backgroundColor: PEACH,
    justifyContent: 'center',
    elevation: 2,
  },
  textBlock: {
    marginLeft: '6%',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: SOFT_RED,
  },
  desc: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: DARK_GRAY,
  },
  coloredContainer: {
    backgroundColor: LIGHT_PEACH,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  lowerContainer: {
    width: '70%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginRight: 10,
  },
  textMedium: {
    fontFamily: RUBIK_MEDIUM,
  },
});
