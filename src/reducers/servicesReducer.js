import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.services, action) => {
  switch (action.type) {

    case types.SET_SERVICES:
      var services = { ...state };
      services = action.payload;
      return services;

    
    default:
      return state;
  }
};
