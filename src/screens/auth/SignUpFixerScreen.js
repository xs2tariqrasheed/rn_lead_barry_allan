import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { SignUpFormFixer } from '../../components';
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
          color="#000"
          size={18}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>Application Form - Fixer</Text>
      <SignUpFormFixer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_PEACH,
    paddingBottom: '8%',
  },
  backIcon: {
    flexDirection: 'row',
    marginTop: '13%',
    marginLeft: '6%',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 24,
    color: BLACK,
    marginLeft: '8%',
    marginTop: 20,
    marginBottom: 10,
  },
});
