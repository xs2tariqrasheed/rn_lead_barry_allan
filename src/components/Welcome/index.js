import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

export default () => {
  return (
    <View style={styles.subContainer}>
      <View style={{width:"100%", alignItems:"center", alignContent:"center", marginTop:"20%"}}>
      <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
      </View>
      <Text style={styles.upperLine2}>Vi fixar hos dig!</Text>
      <View style={styles.textBlock}>
        <Text style={styles.upperLine3}>
          Logga in eller skapa ett konto för att välja bland våra tjänster och
          få hjälpen du behöver!
        </Text>
      </View>
    </View>
  );
};
