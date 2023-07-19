import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.blur, action) => {
  switch (action.type) {
    case types.SET_BLUR_VIEW:
      var blur = state;

      blur = action.payload;

      return blur;
    default:
      return state;
  }
};
