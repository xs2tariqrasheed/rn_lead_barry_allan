import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getBookings } from '../../actions/bookings.action';
import { PaymentInvoice, PaymentMethod } from '../../components';
import { Blur, Header } from '../../components/common';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import {
  BLACK,
  FLORAL_WHITE,
  LIGHT_PEACH,
  PEACH,
} from '../../constants/colors';
import MessageModal from '../../components/Modals/MessageModal';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  const [termsAccepted, setTermsAccepted ]= useState("");
  const [termsModal, setTermsModal ]= useState(false);
  const termsHandler = (val) => {setTermsAccepted(val)}
  const [useRut, setUseRut] = useState(false);
  const closeBasicModal = () =>{ setTermsModal(!termsModal)}
  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = <Text style={styles.headerText}>Betalning</Text>;
  const rightIcon = (
    <Icon
      name="shopping-basket"
      type="font-awesome-5"
      color={PEACH}
      size={25}
    />
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getBookings());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={LIGHT_PEACH}
        iconRight={rightIcon}
        leftPress={navigation.goBack}
      />
      <PaymentInvoice bookings={bookings} termsHandler={termsHandler} />
      <PaymentMethod bookings={bookings} terms={termsAccepted} setTermsModal={setTermsModal} />
      <MessageModal
        visible={termsModal}
        closeModal={closeBasicModal}
        title={"Accepter villkoren"}
        body={"Du måste acceptera villkoren innan du fortsätter."}
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
    fontSize: 17,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FCB3C7',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  bannerText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BLACK,
  },
  bannerLogo: {
    height: 30,
    width: 60,
    borderRadius: 8,
  },
});
