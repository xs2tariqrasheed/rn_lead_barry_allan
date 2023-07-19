import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { Overlay, UserSettingForm } from '../../components';
import { Blur, Header } from '../../components/common';
import { RUBIK_REGULAR } from '../../constants/fonts';
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
  TERMS_AND_CONDITIONS,
} from '../../constants/screens';

export default () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color={EERIE_BLACK}
      size={22}
    />
  );
  const headerText = <Text style={styles.headerText}>Din profil</Text>;
  const rightIcon = (
    <Icon name="cog" type="font-awesome-5" color={PEACH} size={22} />
  );

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigate = (screen) => {
    toggleOverlay();
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={LIGHT_PEACH}
        iconRight={!visible && rightIcon}
        leftPress={toggleOverlay}
      />
      <UserSettingForm />
      <Overlay
        visible={visible}
        toggle={toggleOverlay}
        aboutPress={() => navigate(ABOUT_US_SCREEN)}
        FAQPress={() => navigate(FAQ_SCREEN)}
        contactPress={() => navigate(CONTACT_SCREEN)}
        policyPress={() => navigate(TERMS_AND_CONDITIONS)}
      />
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
    fontSize: 18,
    color: EERIE_BLACK,
  },
});
