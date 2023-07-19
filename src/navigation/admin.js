import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import {
  StartScreenAdmin,
  ManageJobsScreen,
  JobDetailsScreen,
  FinishedJobDetailsScreen,
  ManageWorkersScreen,
  WorkerDetailsScreen,
  ProfileScreenAdmin,
} from '../screens/admin';
import {
  BOTTOM_TAB,
  HOME_STACK,
  ADMIN_START_SCREEN,
  MANAGE_JOBS_SCREEN,
  JOB_DETAILS_SCREEN,
  FINISHED_JOB_DETAILS_SCREEN,
  MANAGE_WORKERS_SCREEN,
  WORKER_DETAILS_SCREEN,
  PROFILE_STACK,
  ADMIN_PROFILE_SCREEN,
  TERMS_AND_CONDITIONS,
} from '../constants/screens';
import {appColor} from '../constants/colors'
import TermsAndConditions from '../screens/TermsAndConditions';

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
          backgroundColor:appColor,
          // paddingBottom: 3
       }
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
    <Stack.Navigator initialRouteName={ADMIN_START_SCREEN} headerMode={false}>
      <Stack.Screen name={ADMIN_START_SCREEN} component={StartScreenAdmin} />
      <Stack.Screen name={MANAGE_JOBS_SCREEN} component={ManageJobsScreen} />
      <Stack.Screen name={JOB_DETAILS_SCREEN} component={JobDetailsScreen} />
      <Stack.Screen name={FINISHED_JOB_DETAILS_SCREEN} component={FinishedJobDetailsScreen} />
      <Stack.Screen
        name={MANAGE_WORKERS_SCREEN}
        component={ManageWorkersScreen}
      />
      <Stack.Screen
        name={WORKER_DETAILS_SCREEN}
        component={WorkerDetailsScreen}
      />
       <Stack.Screen
        name={TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
      />
    </Stack.Navigator>
  );

  const ProfileStack = () => (
    <Stack.Navigator initialRouteName={ADMIN_PROFILE_SCREEN} headerMode={false}>
      <Stack.Screen
        name={ADMIN_PROFILE_SCREEN}
        component={ProfileScreenAdmin}
      />
    </Stack.Navigator>
  );

  return (
    <Stack.Navigator initialRouteName={BOTTOM_TAB} headerMode={false}>
      <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigator} />
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
