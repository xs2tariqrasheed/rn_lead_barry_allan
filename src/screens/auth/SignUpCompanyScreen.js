import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import { SignUpFormCompany } from '../../components';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, LIGHT_PEACH } from '../../constants/colors';

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
        <Icon
          name="chevron-left"
          type="font-awesome-5"
          color={BLACK}
          size={18}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Skapa företagskonto</Text>
        <Text style={styles.starText}>*obligatoriskt fält</Text>
      </View>

      <SignUpFormCompany />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_PEACH,
    paddingTop: '15%',
  },
  backIcon: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginBottom: 5,
  },
  headingContainer: {
    marginHorizontal: '8%',
  },
  heading: {
    marginVertical: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
  },
  starText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 12,
    color: BLACK,
    marginTop: 15,
  },
});
