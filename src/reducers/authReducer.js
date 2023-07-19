import initialState from './initialState';
import * as types from '../constants/actions';
import { saveUserRole } from '../helpers/userAuthHelper';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.SIGNED_IN:
      var auth = { ...state };

      auth.isSignedIn = true;
      auth.isLoading = false;

      auth.currentUser = action.payload;

      return auth;
    case types.SIGNED_OUT:
      var auth = { ...state };

      auth = initialState.auth;
      auth.isSignedIn = false;
      auth.isLoading = false;

      return auth;
    case types.LOADING_COMPLETED:
      var auth = { ...state };

      auth.isLoading = false;

      return auth;
    case types.SET_USER_ROLE:
      var auth = { ...state };

      auth.userRole = action.payload;

      saveUserRole(action.payload);
      return auth;
    case types.SET_NEW_USER:
      var auth = { ...state };

      auth.newUser = action.payload;

      return auth;
    default:
      return state;
  }
};
