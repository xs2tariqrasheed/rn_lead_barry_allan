import axios from 'axios';
import { getUserToken } from '../helpers/userAuthHelper';
import { BASE_URL } from '../constants/api';

export const availableJobsRequest = async (zones) => {
  const headers = await getUserToken();

  return axios.get(`${BASE_URL}/api/v1/worker/bookings`, {
    params: { zones },
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

export const fixJobRequest = async (id) => {
  const headers = await getUserToken();

  return axios.put(
    `${BASE_URL}/api/v1/worker/bookings/${id}/assign`,
    {},
    {
      headers: {
        'content-type': 'application/json',
        'token-type': 'Bearer',
        'access-token': headers.token,
        client: headers.client,
        uid: headers.uid,
        expiry: headers.expiry,
        ACCEPT: 'application/json',
      },
    }
  );
};

export const upcomingJobsRequest = async () => {
  const headers = await getUserToken();

  return axios.get(`${BASE_URL}/api/v1/worker/bookings?assigned=true`, {
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

export const cancelJobRequest = async (id) => {
  const headers = await getUserToken();

  return axios.put(
    `${BASE_URL}/api/v1/worker/bookings/${id}/assign`,
    {},
    {
      headers: {
        'content-type': 'application/json',
        'token-type': 'Bearer',
        'access-token': headers.token,
        client: headers.client,
        uid: headers.uid,
        expiry: headers.expiry,
        ACCEPT: 'application/json',
      },
    }
  );
};

export const jobCompletionRequest = async (id, formData) => {
  const headers = await getUserToken();

  return axios.put(`${BASE_URL}/api/v1/worker/bookings/${id}`, formData, {
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

export const finishedJobsRequest = async () => {
  const headers = await getUserToken();

  return axios.get(`${BASE_URL}/api/v1/worker/bookings?assigned=true`, {
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

export const updateFinishedJobRequest = async (id, rating) => {
  const headers = await getUserToken();

  return axios.put(
    `${BASE_URL}/api/v1/worker/bookings/${id}`,
    {
      booking: {
        rating: rating,
      },
    },
    {
      headers: {
        'content-type': 'application/json',
        'token-type': 'Bearer',
        'access-token': headers.token,
        client: headers.client,
        uid: headers.uid,
        expiry: headers.expiry,
        ACCEPT: 'application/json',
      },
    }
  );
};
