import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import { Button } from '../../components/common';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, EERIE_BLACK, LIGHT_PEACH, PEACH } from '../../constants/colors';
import { VERIFY_ZIP_SCREEN } from '../../constants/screens';

const Welcome = () => (
  <>
      <View style={{width:"100%", alignItems:"center", alignContent:"center", marginTop:"30%",marginVertical: 20,marginTop: '40%',}}>
        <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
      </View>

    <Text style={styles.upperLine2}>Välkommen till ifix!</Text>

    <View style={styles.textBlock}>
      <Text style={styles.upperLine3}>
        Det nya enkla sättet att boka bestyr till hemmet och kontoret!
      </Text>
    </View>
  </>
);

const BulletPoints = () => {
  const points = ['Inga offerter', 'Enkelt att boka', 'RUT-avdrag', 'Sjyssta arbetsvillkor'];

  return (
    <View style={styles.bulletContainer}>
      {points.map((item) => (
        <View key={item} style={styles.pointers}>
          <Icon
            name="check"
            type="font-awesome-5"
            color="#FFF"
            size={13}
            style={styles.icon}
          />
          <Text style={styles.pointerText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Welcome />
      <BulletPoints />

      <View style={styles.buttonContainer}>
        <Button
          text="Kom igång"
          color={PEACH}
          onPress={() => navigation.navigate(VERIFY_ZIP_SCREEN)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PEACH,
  },
  title: {
    marginVertical: 20,
    marginTop: '40%',
    textAlign: 'center',
  },
  titlePeach: {
    color: PEACH,
  },
  upperLine2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 32,
    color: EERIE_BLACK,
    textAlign: 'center',
    marginBottom: 20,
  },
  textBlock: {
    width: '80%',
    marginLeft: '15%',
    marginBottom: 20,
  },
  upperLine3: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: EERIE_BLACK,
    marginBottom: 20,
  },
  bulletContainer: {
    marginVertical: '5%',
  },
  pointers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '25%',
    marginVertical: 7,
  },
  icon: {
    height: 20,
    width: 20,
    backgroundColor: BLACK,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  pointerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: EERIE_BLACK,
  },
  buttonContainer: {
    marginTop: '10%',
  },
  headerLogo: {
    width: 120,
    height: 36,
    resizeMode: "contain"
  }
});
