import axios from 'axios';
import { getUserToken } from '../helpers/userAuthHelper';
import { BASE_URL } from '../constants/api';

const getHeaders = async () => {
  const headers = await getUserToken();

  return {
    'content-type': 'application/json',
    'token-type': 'Bearer',
    'access-token': headers.token,
    client: headers.client,
    uid: headers.uid,
    expiry: headers.expiry,
    ACCEPT: 'application/json',
  };
};

export const dashboardDataRequest = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}/api/v1/admin/bookings/report`, {
    headers: headers,
  });
};

// export const bookingsSkvData = async () => {
//   const headers = await getHeaders();
//   return axios.get(`${BASE_URL}/api/v1/admin/bookings/skvdata`, {
//     headers: headers,
//   });
// };

export const getWorkersRequest = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}api/v1/admin/users?role=worker`, {
    headers: headers,
  });
};

export const updateWorkerDetails = async (data) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}api/v1/admin/users/${data.id}`,
    {
      user: {
        first_name: data.firstName,
        last_name: data.lastName,
        address: data.address,
        phone_no: data.telephone,
        active: data.status,
        ambassador: data.ambassador,
        zones: data.zones,
      },
    },
    {
      headers: headers,
    }
  );
};

export const updateWorkerFortnox = async (data) => {
  const headers = await getHeaders();
console.log(`${BASE_URL}api/v1/admin/users/send_worker_to_fortnox?userid=${data.worker_id}`)
  return axios.get(
    `${BASE_URL}api/v1/admin/users/send_worker_to_fortnox?userid=${data.worker_id}`,
    {
      headers: headers,
    }
  );
};

export const deleteWorker = async (id) => {
  const headers = await getHeaders();

  return axios.delete(`${BASE_URL}api/v1/admin/users/${id}`, {
    headers: headers,
  });
};

export const getBookings = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}/api/v1/admin/bookings`, {
    headers: headers,
  });
};

export const updateJobDetails = async (data) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/admin/bookings/${data.id}`,
    {
      booking: {
        status: data.status,
        quantity: data.quantity,
        appointment_at: data.appointment_at,
        fixer_ids: data.fixer_ids,
        ambassador_ids: data.amb_ids,
        first_name: data.first_name,
        last_name: data.last_name,
        place: data.place,
        rut_status: data.rut_status,
      },
    },
    {
      headers: headers,
    }
  );
};

export const deleteJob = async (id) => {
  const headers = await getHeaders();

  return axios.delete(`${BASE_URL}/api/v1/admin/bookings/${id}`, {
    headers: headers,
  });
};

export const fetchAllZones = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}/api/v1/admin/zones`, { headers: headers });
};

export const activateZones = async (zones) => {
  const headers = await getHeaders();

  return axios.patch(
    `${BASE_URL}/api/v1/admin/zones/make_active`,
    { zones },
    { headers: headers }
  );
};

export const getTotalEarnings = async () => {
  const headers = await getUserToken();

  return axios.get(`${BASE_URL}api/v1/user_salaries/1`, {
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