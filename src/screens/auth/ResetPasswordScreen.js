import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ResetPasswordForm } from '../../components';
import { Blur, Header } from '../../components/common';
import { FLORAL_WHITE, LIGHT_PEACH } from '../../constants/colors';
import { RUBIK_REGULAR } from '../../constants/fonts';

export default () => {
  const headerText = <Text style={styles.headerText}>Nytt lösenord</Text>;

  return (
    <View style={styles.container}>
      <Header text={headerText} color={LIGHT_PEACH} />
      <ResetPasswordForm />
      <Blur />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FLORAL_WHITE,
  },
  headerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 17,
  },
});
