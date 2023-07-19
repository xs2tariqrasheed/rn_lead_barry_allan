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

export const bookingRequest = async (data) => {
  const headers = await getHeaders();

  return axios.post(
    `${BASE_URL}/api/v1/customer/bookings`,
    {
      booking: {
        service_id: data.serviceID,
        quantity: data.count,
        appointment_at: data.time,
        notes: data.notes,
        first_name: data.firstName,
        last_name: data.lastName,
        zip_code: data.zip,
        place: data.place,
        street_address: data.streetAddress,
        floor: data.floor,
        port_code: data.portCode,
        registration_number: data.regNumber,
        color: data.color,
        car_brand: data.carBrand,
        model: data.model,
        coordinates: data.region,
      },
    },
    {
      headers: headers,
    }
  );
};

export const changeAddressRequest = async (data, id) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/bookings/${id}`,
    {
      booking: {
        street_address: data.streetAddress,
        place: data.address,
        floor: data.floor,
        port_code: data.portCode,
        is_parent: data.is_parent,
      },
    },
    {
      headers: headers,
    }
  );
};

export const fetchBookings = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}/api/v1/customer/bookings`, {
    headers: headers,
  });
};

export const updateKlarnaStatus = async (bookingId, klarnaId) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/bookings/${bookingId}`,
    {      
      klarna_order_id: klarnaId,
      status: 1
    },
    {
      headers: headers,
    }
  );
};


export const updateBookingRequest = async (booking, status) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/bookings/${booking.id}`,
    {
      booking: {
        quantity:
          status === 'increment' ? booking.quantity + 1 : booking.quantity - 1,
      },
    },
    {
      headers: headers,
    }
  );
};

export const deleteBookingRequest = async (booking) => {
  const headers = await getHeaders();

  return axios.delete(`${BASE_URL}/api/v1/customer/bookings/${booking.id}`, {
    headers: headers,
  });
};

export const getClientToken = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}/api/v1/customer/bookings/token`, {
    headers: headers,
  });
};

export const submitAuthToken = async (token) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/bookings/pay`,
    {
      order_token: token,
    },
    {
      headers: headers,
    }
  );
};

export const starRatingRequest = async (id, rating) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/bookings/${id}`,
    {
      booking: {
        customer_rating: rating,
      },
    },
    {
      headers: headers,
    }
  );
};

export const cancelBookingRequest = async (id) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/bookings/${id}/refund`,
    {},
    {
      headers: headers,
    }
  );
};
