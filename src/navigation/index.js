import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import {
  WelcomeScreen,
  VerifyZipScreen,
  LoginScreen,
  SignUpScreen,
  SignUpFixerScreen,
  SignUpCompany,
  ResetPassword,
} from '../screens/auth';
import TermsAndConditions from '../screens/TermsAndConditions';
import { Loading } from '../components/common';
import {
  getUserSession,
  getUserStatus,
  getUserToken,
} from '../helpers/userAuthHelper';
import { setUserRole } from '../actions/auth.action';
import CustomerNavigations from './customer';
import FixerNavigations from './fixer';
import AdminNavigations from './admin';
import {
  WELCOME_SCREEN,
  VERIFY_ZIP_SCREEN,
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  SIGNUP_SCREEN_FIXER,
  SIGNUP_SCREEN_COMPANY,
  RESET_PASSWORD_SCREEN,
  TERMS_AND_CONDITIONS,
} from '../constants/screens';

const ADMIN = 'ADMIN';
const WORKER = 'WORKER';
const CUSTOMER = 'CUSTOMER';
const NEW_USER = 'NEW_USER';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [status, setStatus] = useState('');
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authState.isSignedIn) {
      (async () => {
        setStatus(await getUserStatus());
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack.Navigator initialRouteName={WELCOME_SCREEN} headerMode={false}>
      {!status && (
        <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
      )}
      {!status && (
        <Stack.Screen name={VERIFY_ZIP_SCREEN} component={VerifyZipScreen} />
      )}
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={SIGNUP_SCREEN_FIXER} component={SignUpFixerScreen} />
      <Stack.Screen name={SIGNUP_SCREEN_COMPANY} component={SignUpCompany} />
      <Stack.Screen name={RESET_PASSWORD_SCREEN} component={ResetPassword} />
      <Stack.Screen
        name={TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
      />
    </Stack.Navigator>
  );
};

const NAVIGATIONS = {
  [ADMIN]: AdminNavigations,
  [WORKER]: FixerNavigations,
  [CUSTOMER]: CustomerNavigations,
  [NEW_USER]: AuthStack,
};

export default () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(authState.isLoading);

  let Navigator;

  useEffect(() => {
    (async function () {
      const headers = await getUserToken();
      const session = await getUserSession();
      if (session === 'saved' && headers.token) {
        dispatch({ type: 'SIGNED_IN' });
        dispatch(setUserRole(headers.userRole));
        setIsLoading(false);
      } else {
        dispatch({ type: 'SIGNED_OUT' });
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authState.isSignedIn && authState.userRole === 'customer') {
    const userRole = CUSTOMER;

    Navigator = NAVIGATIONS[userRole];
  } else if (authState.isSignedIn && authState.userRole === 'worker') {
    const userRole = WORKER;

    Navigator = NAVIGATIONS[userRole];
  } else if (authState.isSignedIn && authState.userRole === 'admin') {
    const userRole = ADMIN;

    Navigator = NAVIGATIONS[userRole];
  } else {
    const userRole = NEW_USER;

    Navigator = NAVIGATIONS[userRole];
  }

  const AppStack = () => (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );

  return isLoading ? <Loading /> : <AppStack />;
};
