import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Booking {
  client: { _id: string; name: string };
  event: string;
  message: string;
  reservationDate: Date;
  shootLocation: string;
  _id: string;
}

const initialState: Booking[] = [];

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    saveBookings: (state, action: PayloadAction<Booking[]>) => {
      state = action.payload;
    },
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      return state.filter(booking => booking._id !== action.payload);
    },
    clearBookings: () => {
      return initialState;
    }
  }
});

export const { saveBookings, addBooking, removeBooking, clearBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
