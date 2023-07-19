import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.error, action) => {
  switch (action.type) {
    case types.SET_ERROR_MESSAGE:
      var error = { ...state };

      error = action.payload;

      return error;
    default:
      return state;
  }
};
