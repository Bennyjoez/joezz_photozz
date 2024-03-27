import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  showBookingsModal: boolean
  showReviewsModal: boolean
}

const initialState: modalState = {
  showBookingsModal: false,
  showReviewsModal: true,
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showBookingPopup: (state) => {
      state.showBookingsModal = true
    },
    showReviewsPopup: (state) => {
      state.showReviewsModal = true
    },
    closeBookingPopup: (state) => {
      state.showBookingsModal = false;
    },
    closeReviewsPopup: (state) => {
      state.showReviewsModal = false;
    }
  }
});

export const { showBookingPopup, showReviewsPopup, closeBookingPopup, closeReviewsPopup } = modalSlice.actions;

export default modalSlice.reducer;

