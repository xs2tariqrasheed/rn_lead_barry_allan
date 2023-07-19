import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { RUBIK_REGULAR } from '../../constants/fonts';

export default ({ heading, desc }) => (
  <>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
    <ScrollView
      style={styles.imageScroll}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {[1, 2, 3].map((index) => (
        <View key={index} style={styles.imageContainer}>
          <View style={styles.image} />
          <View style={styles.imageTab}>
            <Text style={styles.imageText}>{desc}</Text>
            <Icon
              name="arrow-forward"
              type="inoicon"
              size={20}
              color="#FF5D5D"
            />
          </View>
        </View>
      ))}
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  headingContainer: {
    width: '45%',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: '#000000',
  },
  imageScroll: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  image: {
    height: 220,
    width: 170,
    borderRadius: 15,
    backgroundColor: '#00000029',
  },
  imageTab: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: '#3C3C3C',
    marginRight: 5,
  },
});
