import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { Confirmation, ServicePointsToKnow } from '../../components';
import { Header, Button } from '../../components/common';
import { FLORAL_WHITE, LIGHT_PEACH, PEACH } from '../../constants/colors';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { FAQ_SCREEN, PROFILE_SCREEN, PROFILE_STACK } from '../../constants/screens';

export default () => {
  const route = useRoute();
  const navigation = useNavigation();

  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = <Text style={styles.headerText}>Bekräftelse</Text>;

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={LIGHT_PEACH}
        leftPress={navigation.goBack}
      />

      <ScrollView>
        <Confirmation />
        {/* <ServicePointsToKnow booking={route.params.bookings[0]} /> */}

        <View style={styles.buttonContainer}>
          <Button
            color={PEACH}
            text="Se din beställning"
            onPress={() => navigation.navigate(PROFILE_STACK, { screen: PROFILE_SCREEN })}
          />
          <Button text="FAQ" onPress={() => navigation.navigate(FAQ_SCREEN)} />
        </View>
      </ScrollView>
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
  buttonContainer: {
    marginBottom: 20,
  },
});
