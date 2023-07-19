import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import {
  FixerVerificationScreen,
  StartScreenFixer,
  ProfileScreenFixer,
  TimerScreenFixer,
  PhotoScreenFixer,
  Setting,

} from '../screens/fixer';
import {
  ContactScreen,
  AboutUsScreen,
  FAQScreen,
} from '../screens/customer';
import TermsAndConditions from '../screens/TermsAndConditions';
import {
  FIXER_VERIFICATION_SCREEN,
  BOTTOM_TAB,
  HOME_STACK,
  FIXER_START_SCREEN,
  PROFILE_STACK,
  FIXER_PROFILE_SCREEN,
  FIXER_TIMER_SCREEN,
  FIXER_PHOTO_SCREEN,
  FIXER_SETTING,
  TERMS_AND_CONDITIONS,
  ABOUT_US_SCREEN,
  CONTACT_SCREEN,
  FAQ_SCREEN

} from '../constants/screens';
import {appColor}from '../constants/colors'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default () => {
  const authState = useSelector((state) => state.auth);

  const BottomTabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF8686',
        inactiveTintColor: '#FFB7B7',
        showLabel: false,
        style: {
          backgroundColor:appColor,
          // paddingBottom: 3
       }
      }}
      
    >
       <Tab.Screen
        name={HOME_STACK}
        component={HomeStack}
        options={() => ({
          
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
        })}
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


  const HomeStack = ({}) => (
    
    <Stack.Navigator initialRouteName={FIXER_START_SCREEN} headerMode={false}>
      <Stack.Screen name={FIXER_START_SCREEN} component={StartScreenFixer} />
      <Stack.Screen
        name={TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
      />
      <Stack.Screen name={ABOUT_US_SCREEN} component={AboutUsScreen} />
      <Stack.Screen name={CONTACT_SCREEN} component={ContactScreen} />
      <Stack.Screen name={FAQ_SCREEN} component={FAQScreen} />
    </Stack.Navigator>
  );

  const ProfileStack = () => (
    <Stack.Navigator initialRouteName={FIXER_PROFILE_SCREEN} headerMode={false}>
      <Stack.Screen
        name={FIXER_PROFILE_SCREEN}
        component={ProfileScreenFixer}
      />
      <Stack.Screen name={FIXER_SETTING} component={Setting} />

    </Stack.Navigator>
  );

  
  return (
    
    <Stack.Navigator headerMode={false}>
      {authState.newUser && (
        <Stack.Screen
          name={FIXER_VERIFICATION_SCREEN}
          component={FixerVerificationScreen}
        />
      )}
      <Stack.Screen name={FIXER_START_SCREEN} component={BottomTabNavigator}/>
      <Stack.Screen name={FIXER_TIMER_SCREEN} component={TimerScreenFixer} />
      <Stack.Screen name={FIXER_PHOTO_SCREEN} component={PhotoScreenFixer} />
      <Stack.Screen name={ABOUT_US_SCREEN} component={AboutUsScreen} />
      <Stack.Screen name={CONTACT_SCREEN} component={ContactScreen} />
      <Stack.Screen name={FAQ_SCREEN} component={FAQScreen} />
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
