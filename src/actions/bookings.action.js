import * as types from '../constants/actions';
import {
  fetchBookings,
  updateBookingRequest,
  deleteBookingRequest,
  starRatingRequest,
  updateKlarnaStatus,
  updateBookingStatus,
} from '../api/bookings.api';
import { Alert } from 'react-native';

const setBookings = (payload) => ({
  type: types.SET_BOOKINGS,
  payload: payload,
});

const update = (payload) => ({
  type: types.UPDATE_BOOKING,
  payload: payload,
});

export const remove = (payload) => ({
  type: types.DELETE_BOOKING,
  payload: payload,
});

export const getBookings = () => {
  return (dispatch) => {
    fetchBookings()
      .then((res) => dispatch(setBookings(res.data)))
      .catch((err) => console.log(err));
  };
};

export const updateKlarnaPayed = (bookingId, klarnaId) => {
  return (dispatch) => {
    updateKlarnaStatus(bookingId, klarnaId)
      .then((res) => {
        dispatch(update(res.data));
      })
      .catch((e) => {
        Alert.alert('Error!', 'Unable to update klarna id', e);
      });
  };
};

export const updateStatus = (orderId, status) => {
  return (dispatch) => {
    updateBookingStatus(orderId, status)
      .then((res) => {
        dispatch(update(res.data));
      })
      .catch((e) => {
        Alert.alert('Error!', 'Unable to update', e);
      });
  };
};



export const updateBooking = (booking, status) => {
  return (dispatch) => {
    updateBookingRequest(booking, status)
      .then((res) => {
        dispatch(update(res.data));
      })
      .catch(() => {
        Alert.alert('Error!', 'Unable to update');
      });
  };
};

export const deleteBooking = (booking) => {
  return (dispatch) => {
    deleteBookingRequest(booking)
      .then((res) => {
        dispatch(remove(booking));
      })
      .catch(() => {
        Alert.alert('Error!', 'Unable to delete');
      });
  };
};

export const updateStarRating = (id, rating) => {
  return (dispatch) => {
    starRatingRequest(id, rating)
      .then((res) => {
        // Alert.alert('Success!', 'Thank you for rating!');
        dispatch(update(res.data));
      })
      .catch(() => {
        Alert.alert('Error!', 'Unable to rate');
      });
  };
};
