import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { setUserStatus } from '../../helpers/userAuthHelper';
import { Welcome, LoginForm } from '../../components';
import { Blur } from '../../components/common';
import { LIGHT_PEACH } from '../../constants/colors';

export default () => {
  useEffect(() => {
    setUserStatus('user');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Welcome />
        <LoginForm />
      </ScrollView>
      <Blur />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PEACH,
  },
});
