import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getServices } from '../../actions/services.action';
import { Overlay, ServicesList, StartScreenModal } from '../../components';
import { Blur, Header } from '../../components/common';
import {
  EERIE_BLACK,
  FLORAL_WHITE,
  LIGHT_PEACH,
  PEACH,
  WHITE,
} from '../../constants/colors';
import {
  ABOUT_US_SCREEN,
  CONTACT_SCREEN,
  FAQ_SCREEN,
  PAYMENT_SCREEN,
  TERMS_AND_CONDITIONS,
} from '../../constants/screens';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigate = (screen) => {
    toggleOverlay();
    navigation.navigate(screen);
  };

  useEffect(() => {
    dispatch(getServices());
  }, []);

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color={EERIE_BLACK}
      size={22}
    />
  );
  const headerText = (
    <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
  );
  const rightIcon = (
    <Icon
      name={!visible && 'shopping-basket'}
      type="font-awesome-5"
      color={PEACH}
      size={25}
    />
  );
  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={LIGHT_PEACH}
        iconRight={rightIcon}
        leftPress={toggleOverlay}
        rightPress={() => navigation.navigate(PAYMENT_SCREEN)}
      />
      <ServicesList services={services}
       />
      <Overlay
        visible={visible}
        toggle={toggleOverlay}
        aboutPress={() => navigation.navigate(ABOUT_US_SCREEN)}
        FAQPress={() => navigation.navigate(FAQ_SCREEN)}
        contactPress={() => navigation.navigate(CONTACT_SCREEN)}
        policyPress={() => navigation.navigate(TERMS_AND_CONDITIONS)}
      />
      <Blur />
      <StartScreenModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FLORAL_WHITE,
  },
  headerText: {
    color: PEACH,
  },
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
});
