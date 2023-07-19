import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { VideoOnCart, ServiceDetails } from '../../components';
import { Blur, Header } from '../../components/common';
import { Icon } from 'react-native-elements';
import { RUBIK_REGULAR } from '../../constants/fonts';
import {
  BLACK,
  FLORAL_WHITE,
  LIGHT_PEACH,
  PEACH,
} from '../../constants/colors';
import { PAYMENT_SCREEN } from '../../constants/screens';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const service = route.params.service;
console.log('services',service)

  const iconLeft = (
    <Icon name="chevron-left" type="font-awesome-5" color={BLACK} size={20} />
  );
  const headerText = <Text style={styles.headerText}>Bokning</Text>;
  const iconRight = (
    <Icon
      name="shopping-basket"
      type="font-awesome-5"
      color={PEACH}
      size={25}
    />
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={iconLeft}
        text={headerText}
        color={LIGHT_PEACH}
        iconRight={iconRight}
        leftPress={navigation.goBack}
        rightPress={() => navigation.navigate(PAYMENT_SCREEN)}
      />
      <ScrollView>
        <ServiceDetails service={service} />
      </ScrollView>
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
