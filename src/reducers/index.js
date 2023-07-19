import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import availableJobsReducer from './availableJobsReducer';
import bookingsReducer from './bookingsReducer';
import servicesReducer from './servicesReducer';
import upcomingJobsReducer from './upcomingJobsReducer';
import finishedJobsReducer from './finishedJobsReducer';
import zoneReducer from './zoneReducer';
import blur from './blurReducer';
import error from './errorReducer';

export default combineReducers({
  auth: AuthReducer,
  services: servicesReducer,
  bookings: bookingsReducer,
  availableJobs: availableJobsReducer,
  upcomingJobs: upcomingJobsReducer,
  finishedJobs: finishedJobsReducer,
  zones: zoneReducer,
  blur: blur,
  error: error,
});
