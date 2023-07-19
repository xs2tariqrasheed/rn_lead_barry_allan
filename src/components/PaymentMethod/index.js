import React from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getClientToken } from '../../api/bookings.api';
import { Button } from '../common';
import { styles } from './style';
import { PEACH } from '../../constants/colors';
import { CHECKOUT_API_SCREEN, CHECKOUT_SCREEN, START_SCREEN } from '../../constants/screens';
export default ({ bookings,terms, setTermsModal }) => {
  const navigation = useNavigation();

  bookings = bookings.filter((booking) => booking.status === 'pending');

  const doPayment = () => {
    terms ?
    getClientToken()
      .then((res) =>
        navigation.navigate(CHECKOUT_API_SCREEN, { token: res.data.client_token })      )
      .catch(() => Alert.alert('Error!', 'Unable to get client token')) : setTermsModal(true);
  };

  return (
    <View style={styles.lowerContainer}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.klarnaLogo}
          source={require('../../assets/images/Klarna-logo-full.png')}
        />
        <Text style={styles.upperLine}>Betala med Klarna</Text>
      </View>

      <Button
        onPress={doPayment}
        text="Betala"
        color={PEACH}
        disabled={bookings.length === 0}
      />
      <Button
        text="Fixa mer"
        onPress={() => navigation.navigate(START_SCREEN)}
      />
    </View>
  );
};
