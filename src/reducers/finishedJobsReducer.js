import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.finishedJobs, action) => {
  switch (action.type) {
    case types.SET_FINISHED_JOBS:
      var finishedJobs = { ...state };

      finishedJobs = action.payload;

      finishedJobs = finishedJobs.filter((b) => b.status === 'done');

      return finishedJobs;
    case types.UPDATE_FINISHED_JOBS:
      var job = action.payload;

      var new_jobs = state;
      var index = new_jobs.findIndex((b) => b.id === job.id);
      new_jobs[index] = job;

      return [...new_jobs];
    default:
      return state;
  }
};
