import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { SignUpForm } from '../../components';
import { Blur } from '../../components/common';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, EERIE_BLACK, LIGHT_PEACH } from '../../constants/colors';
import { SIGNUP_SCREEN_COMPANY } from '../../constants/screens';

export default () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
        <Icon
          name="chevron-left"
          type="font-awesome-5"
          color="#000"
          size={18}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Skapa konto</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Företagskund?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(SIGNUP_SCREEN_COMPANY)}
          >
            <Text style={styles.pinkTextTop}>Klicka här</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.starText}>*obligatoriskt fält</Text>
      </View>
      <SignUpForm />
      <Blur />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_PEACH,
    paddingTop: '15%',
  },
  headingContainer: {
    marginBottom: 5,
    marginHorizontal: '8%',
  },
  backIcon: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginBottom: 5,
  },
  heading: {
    marginVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: EERIE_BLACK,
  },
  pinkTextTop: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#A85A58',
    marginLeft: 5,
  },
  starText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 12,
    color: BLACK,
    marginTop: 15,
  },
});
