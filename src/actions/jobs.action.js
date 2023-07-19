import * as types from '../constants/actions';
import { Alert } from 'react-native';
import {
  availableJobsRequest,
  cancelJobRequest,
  fixJobRequest,
  upcomingJobsRequest,
  finishedJobsRequest,
  updateFinishedJobRequest,
} from '../api/jobs.api';

const setAvailableJobs = (payload) => ({
  type: types.SET_AVAILABLE_JOBS,
  payload: payload,
});

const updateAvailableJobs = (payload) => ({
  type: types.UPDATE_AVAILABLE_JOBS,
  payload: payload,
});

const setUpcomingJobs = (payload) => ({
  type: types.SET_UPCOMING_JOBS,
  payload: payload,
});

const updateUpcomingJobs = (payload) => ({
  type: types.UPDATE_UPCOMING_JOBS,
  payload: payload,
});

const setFinishedJobs = (payload) => ({
  type: types.SET_FINISHED_JOBS,
  payload: payload,
});

const updateFinishedJobs = (payload) => ({
  type: types.UPDATE_FINISHED_JOBS,
  payload: payload,
});

export const getAvailableJobs = (zones) => {
  return (dispatch) => {
    availableJobsRequest(zones)
      .then((res) => {
        dispatch(setAvailableJobs(res.data));
      })
      .catch((err) => {
        Alert.alert('Unable to get jobs', err);
      });
  };
};

export const assignJob = (id) => {
  return (dispatch) => {
    fixJobRequest(id)
      .then((res) => {
        dispatch(updateAvailableJobs(res.data));
        Alert.alert('Success!', 'job assigned successfully.');
      })
      .catch((err) => {
        Alert.alert('Unable to assign job', err);
      });
  };
};

export const getUpcomingJobs = () => {
  return (dispatch) => {
    upcomingJobsRequest()
      .then((res) => {
        dispatch(setUpcomingJobs(res.data));
      })
      .catch((err) => {
        Alert.alert('Unable to get upcoming jobs', err);
      });
  };
};

export const unassignJob = (id) => {
  return (dispatch) => {
    cancelJobRequest(id)
      .then((res) => {
        dispatch(updateUpcomingJobs(res.data));
        Alert.alert('Success!', 'job unassigned');
      })
      .catch(() => {
        console.log('error');
      });
  };
};

export const getFinishedJobs = () => {
  return (dispatch) => {
    finishedJobsRequest()
      .then((res) => {
        dispatch(setFinishedJobs(res.data));
      })
      .catch((err) => {
        Alert.alert('Unable to get finished jobs', err);
      });
  };
};

export const updateFinishedJob = (id, rating) => {
  return (dispatch) => {
    updateFinishedJobRequest(id, rating)
      .then((res) => {
        Alert.alert('Success!', 'rating done successfully');
        dispatch(updateFinishedJobs(res.data));
      })
      .catch((err) => {
        Alert.alert('Unable to rate job', err);
      });
  };
};
