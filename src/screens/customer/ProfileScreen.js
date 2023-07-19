import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getBookings } from '../../actions/bookings.action';
import { Blur, Header } from '../../components/common';
import { Overlay, UpcomingFix, Fixed } from '../../components';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { FLORAL_WHITE, LIGHT_PEACH, WHITE } from '../../constants/colors';
import {
  ABOUT_US_SCREEN,
  CONTACT_SCREEN,
  FAQ_SCREEN,
  TERMS_AND_CONDITIONS,
  USER_SETTING,
} from '../../constants/screens';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  const [visible, setVisible] = useState(false);
  const [refreshing ,setRefreshing] = useState(false)


  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color="#141414"
      size={22}
    />
  );
  const headerText = <Text style={styles.headerText}>Din profil</Text>;
  const rightIcon = (
    <Icon
      name={!visible && 'cog'}
      type="font-awesome-5"
      color="#141414"
      size={22}
    />
  );

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigate = (screen) => {
    toggleOverlay();
    navigation.navigate(screen);
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getBookings());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );
  const onRefresh=()=>{
    setRefreshing(true)
    dispatch(getBookings());
    setRefreshing(false)
 
   }
  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={LIGHT_PEACH}
        iconRight={rightIcon}
        leftPress={toggleOverlay}
        rightPress={() => navigation.navigate(USER_SETTING)}
      />
      <ScrollView contentContainerStyle={styles.subContainer} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
        <UpcomingFix bookings={bookings} />
        <Fixed bookings={bookings} />
      </ScrollView>
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
  },
  subContainer: {
    paddingTop: '5%',
    paddingBottom: 10,
  },
});
