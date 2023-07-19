import * as types from '../constants/actions';
import { servicesRequest , zoneRequest } from '../api/services.api';
import { Alert } from 'react-native';

const setServices = (payload) => ({
  type: types.SET_SERVICES,
  payload: payload,
});

export const getServices = () => {
  return (dispatch) => {
    servicesRequest()
      .then((res) => {
        dispatch(setServices(res.data));
      })
      .catch((err) => {
        Alert.alert('Unable to get services', err);
      });
  };
};


const setZoneRequst = (payload) => ({
  type: types.ZONE,
  payload: payload,
});

export const getZones = () => {
  return (dispatch) => {
    zoneRequest()
      .then((res) => {
        dispatch(setZoneRequst(res.data));
      })
      .catch((err) => {
        Alert.alert('Unable to get zones', err);
      });
  };
};
