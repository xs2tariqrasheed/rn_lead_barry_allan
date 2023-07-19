import { Alert } from 'react-native';
import * as types from '../constants/actions';
import {
  loginRequest,
  signUpRequest,
  signUpRequestCompany,
  signUpRequestFixer,
  signOutRequest,
  sendDeviceId,
} from '../api/auth.api';
import { userInfoRequest } from '../api/currentUser.api';
import {
  setUserToken,
  deleteUserTokens,
  setUserSession,
  deleteUserSession,
  setUserCreds,
  deleteUserCreds,
} from '../helpers/userAuthHelper';

const loginSuccess = (payload) => {
  sendDeviceId();
  return {
    type: types.SIGNED_IN,
    payload: payload,
  };
};

const signOutSuccess = (payload) => ({
  type: types.SIGNED_OUT,
  payload: payload,
});

const setCurrentUser = (payload) => ({
  type: types.SET_CURRENT_USER,
  payload: payload,
});

export const setUserRole = (payload) => ({
  type: types.SET_USER_ROLE,
  payload: payload,
});

export const setNewUser = (payload) => ({
  type: types.SET_NEW_USER,
  payload: payload,
});

export const setErrorMessage = (payload) => ({
  type: types.SET_ERROR_MESSAGE,
  payload: payload,
});

export const validateTokenSucess = loginSuccess;

export const loadingComplete = () => ({ type: types.LOADING_COMPLETED });

export const signIn = ({ email, password, userSession }) => {
  return (dispatch) => {
    loginRequest(email, password)
      .then((res) => {
        const headers = res.headers;
        const currentUser = res.data.data;

        setUserToken({
          token: headers['access-token'],
          client: headers.client,
          uid: headers.uid,
          expiry: headers.expiry,
        });
        userSession === 'saved'
          ? setUserCreds(email, password)
          : deleteUserCreds();
        setUserSession(userSession);

        dispatch(loginSuccess(currentUser));
        dispatch(setUserRole(currentUser.user_role));
      })
      .catch((error) => {
        dispatch(setErrorMessage(true));
      });
  };
};

export const signUp = (data) => {
  return (dispatch) => {
    signUpRequest(data)
      .then((res) => {
        const headers = res.headers;
        const currentUser = res.data.data;

        setUserToken({
          token: headers['access-token'],
          client: headers.client,
          uid: headers.uid,
          expiry: headers.expiry,
        });

        dispatch(setNewUser(true));
        dispatch(loginSuccess(currentUser));
        dispatch(setUserRole(currentUser.user_role));
      })
      .catch((err) => {
        Alert.alert(
          'Invalid Information',
          err.response.data.errors.full_messages.join(', ')
        );
      });
  };
};

export const signUpCompany = (data) => {
  return (dispatch) => {
    signUpRequestCompany(data)
      .then((res) => {
        const headers = res.headers;
        const currentUser = res.data.data;

        setUserToken({
          token: headers['access-token'],
          client: headers.client,
          uid: headers.uid,
          expiry: headers.expiry,
        });

        dispatch(setNewUser(true));
        dispatch(loginSuccess(currentUser));
        dispatch(setUserRole(currentUser.user_role));
      })
      .catch((err) => {
        Alert.alert(
          'Invalid Information',
          err.response.data.errors.full_messages.join(', ')
        );
      });
  };
};

export const signUpFixer = (data) => {
  return (dispatch) => {
    signUpRequestFixer(data)
      .then((res) => {
        const headers = res.headers;
        const currentUser = res.data.data;

        setUserToken({
          token: headers['access-token'],
          client: headers.client,
          uid: headers.uid,
          expiry: headers.expiry,
        });

        dispatch(setNewUser(true));
        dispatch(loginSuccess(currentUser));
        dispatch(setUserRole(currentUser.user_role));
      })
      .catch((err) => {
        Alert.alert(
          'Invalid Information',
          err.response.data.errors.full_messages.join(', ')
        );
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    signOutRequest()
      .then(() => {
        deleteUserTokens();
        deleteUserSession();
        dispatch(signOutSuccess());
      })
      .catch(() => {
        Alert.alert('Error!', 'Unable to logout');
      });
  };
};

export const setUserInfo = () => {
  return (dispatch) => {
    userInfoRequest()
      .then((res) => {
        dispatch(setCurrentUser(res.data));
      })
      .catch((_err) => {
        console.log('Error in set user info action');
      });
  };
};
