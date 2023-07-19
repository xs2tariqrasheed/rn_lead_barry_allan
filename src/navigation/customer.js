import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StartScreen,
  CartScreen,
  PaymentScreen,
  CheckoutScreen,
  ConfirmationScreen,
  ContactScreen,
  ProfileScreen,
  UserSetting,
  AboutUsScreen,
  FAQScreen,
  CheckoutApiScreen,
} from '../screens/customer';
import TermsAndConditions from '../screens/TermsAndConditions';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import {
  BOTTOM_TAB,
  HOME_STACK,
  START_SCREEN,
  CART_SCREEN,
  PAYMENT_SCREEN,
  // CHECKOUT_SCREEN,
  CONFIRMATION_SCREEN,
  CONTACT_SCREEN,
  PROFILE_STACK,
  PROFILE_SCREEN,
  USER_SETTING,
  TERMS_AND_CONDITIONS,
  ABOUT_US_SCREEN,
  FAQ_SCREEN,
  CHECKOUT_API_SCREEN,
} from '../constants/screens';
import { FLORAL_WHITE } from '../constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default () => {
  const BottomTabNavigator = () => (
    <Tab.Navigator
      initialRouteName={HOME_STACK}
      tabBarOptions={{
        activeTintColor: '#FF8686',
        inactiveTintColor: '#FFB7B7',
        showLabel: false,
        style: {
          backgroundColor: FLORAL_WHITE,
        },
      }}
    >
      <Tab.Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              type="font-awesome-5"
              solid
              color={color}
              size={size}
              style={styles.leftIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="user"
              type="font-awesome-5"
              solid
              color={color}
              size={size}
              style={styles.rightIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );

  const HomeStack = () => (
    <Stack.Navigator initialRouteName={START_SCREEN} headerMode={false}>
      <Stack.Screen name={START_SCREEN} component={StartScreen} />
      <Stack.Screen name={CART_SCREEN} component={CartScreen} />
      <Stack.Screen name={PAYMENT_SCREEN} component={PaymentScreen} />
      <Stack.Screen name={CONFIRMATION_SCREEN} component={ConfirmationScreen} />
      <Stack.Screen name={ABOUT_US_SCREEN} component={AboutUsScreen} />
      <Stack.Screen name={CONTACT_SCREEN} component={ContactScreen} />
      <Stack.Screen name={FAQ_SCREEN} component={FAQScreen} />
      <Stack.Screen
        name={TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
      />
    </Stack.Navigator>
  );

  const ProfileStack = () => (
    <Stack.Navigator initialRouteName={PROFILE_SCREEN} headerMode={false}>
      <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      <Stack.Screen name={USER_SETTING} component={UserSetting} />
      <Stack.Screen name={ABOUT_US_SCREEN} component={AboutUsScreen} />
      <Stack.Screen name={CONTACT_SCREEN} component={ContactScreen} />
      <Stack.Screen name={FAQ_SCREEN} component={FAQScreen} />
    </Stack.Navigator>
  );

  return (
    <Stack.Navigator initialRouteName={BOTTOM_TAB} headerMode="none">
      <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigator} />
      <Stack.Screen name={CHECKOUT_API_SCREEN} component={CheckoutApiScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  leftIcon: {
    marginLeft: '20%',
  },
  rightIcon: {
    marginRight: '20%',
  },
});
