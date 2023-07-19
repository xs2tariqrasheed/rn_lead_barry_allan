import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.upcomingJobs, action) => {
  switch (action.type) {
    case types.SET_UPCOMING_JOBS:
      var upcomingJobs = { ...state };

      upcomingJobs = action.payload;

      upcomingJobs = upcomingJobs.filter((b) => b.status === 'paid');

      return upcomingJobs;
    case types.UPDATE_UPCOMING_JOBS:
      var upcomingJobs = state;

      var job = action.payload;

      upcomingJobs = upcomingJobs.filter((b) => b.id !== job.id);

      return upcomingJobs;
    default:
      return state;
  }
};
