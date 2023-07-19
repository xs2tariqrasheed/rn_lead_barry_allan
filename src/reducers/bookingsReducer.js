import initialState from './initialState';
import * as types from '../constants/actions';

export default (state = initialState.bookings, action) => {
  switch (action.type) {
    case types.SET_BOOKINGS:
      var bookings = { ...state };

      bookings = action.payload;

      return bookings;
    case types.UPDATE_BOOKING:
      var booking = action.payload;

      var new_bookings = state;
      var index = new_bookings.findIndex((b) => b.id === booking.id);
      new_bookings[index] = booking;

      return [...new_bookings];
    case types.DELETE_BOOKING:
      var booking = action.payload;

      var new_bookings = state;
      new_bookings = new_bookings.filter((b) => b.id !== booking.id);

      return new_bookings;
    default:
      return state;
  }
};
