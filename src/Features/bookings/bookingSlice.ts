import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserBookings } from "../../utils/getBookings";

export interface Booking {
  client: { _id: string; name: string };
  event: string;
  message: string;
  reservationDate: Date;
  shootLocation: string;
  _id: string;
}

interface BookingState {
  bookings: Booking[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  status: "idle",
  error: null,
};

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (userId: string) => {
    const response = await getUserBookings(userId);
    return response.data.data;
  }
);

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking._id !== action.payload
      );
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch bookings";
      });
  },
});

export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
