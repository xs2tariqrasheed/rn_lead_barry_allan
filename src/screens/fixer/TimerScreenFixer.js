import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { Timer } from '../../components';
import { Header,Blur } from '../../components/common';
import { PINK, PEACH ,appColor, headerColor, lightOrange } from '../../constants/colors';

export default () => {

  const navigation = useNavigation();
  const route = useRoute();
  // navigation.setOptions({ tabBarStyle: { display: "none" }})
   
  

  const [hasStarted, setHasStarted] = useState(false);
  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = (
    <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
  );
  const timer_started = () => {
    setHasStarted(!hasStarted)
  }

  
  

  return (
    <View style={styles.container}>
      <Header
        iconLeft={!hasStarted ? leftIcon : null}
        text={headerText}
        color={headerColor}
        leftPress={!hasStarted ? navigation.goBack : null}
        
      />
      <Timer jobId={route.params.jobId} hasStarted={() => timer_started()} />
      
      <Blur/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor
    // backgroundColor: '#EDF6FF',
  },
  headerText: {
    color:lightOrange,
    fontWeight:'600',
    fontSize:26,
  },
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
});
