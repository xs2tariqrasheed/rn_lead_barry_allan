/* eslint-disable prettier/prettier */
import axios from 'axios';
import { getUserToken } from '../helpers/userAuthHelper';
import { BASE_URL } from '../constants/api';

export const servicesRequest = async () => {
  const headers = await getUserToken();

  return axios.get(`${BASE_URL}/api/v1/customer/services`, {
    headers: {
      'content-type': 'application/json',
      'token-type': 'Bearer',
      'access-token': headers.token,
      client: headers.client,
      uid: headers.uid,
      expiry: headers.expiry,
      ACCEPT: 'application/json',
    },
  });
};


export const zoneRequest = async () => {
  return axios.get(`${BASE_URL}/api/v1/zones`);
};
export const zoneRequestFixer = async () => {
  const headers = await getUserToken();

  return axios.get(`${BASE_URL}/api/v1/worker/zones`, {
    headers: {
      'content-type': 'application/json',
      'token-type':   'Bearer',
      'access-token': headers.token,
      client:         headers.client,
      uid:            headers.uid,
      expiry:         headers.expiry,
      ACCEPT:         'application/json',
    },
  });
};
