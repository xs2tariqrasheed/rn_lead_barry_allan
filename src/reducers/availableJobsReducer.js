import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.availableJobs, action) => {
  switch (action.type) {
    case types.SET_AVAILABLE_JOBS:
      var availableJobs = { ...state };

      availableJobs = action.payload;

      return availableJobs;
    case types.UPDATE_AVAILABLE_JOBS:
      var availableJobs = state;

      var job = action.payload;

      availableJobs = availableJobs.filter((b) => b.id !== job.id);

      return availableJobs;
    default:
      return state;
  }
};
