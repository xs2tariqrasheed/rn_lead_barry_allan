import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.zones, action) => {
    // console.log('action receive', action.payload)
  switch (action.type) {

    case types.ZONE:
      var zones = { ...state };
      zones = action.payload;
      return zones;
    
    default:
      return state;
  }
};