import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { JobDetails } from '../../components';
import { Header } from '../../components/common';
import { PINK, PEACH ,appColor, headerColor } from '../../constants/colors';


export default () => {
  const route = useRoute();
  const navigation = useNavigation();

  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = (
    <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={headerColor}
        leftPress={navigation.goBack}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
      />
      <JobDetails job={route.params.job} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor,
  },
  headerText: {
    color: PINK,
  },
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
});
