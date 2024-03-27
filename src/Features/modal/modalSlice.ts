import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  showBookingsModal: boolean
}

const initialState: modalState = {
  showBookingsModal: false
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showBookingPopup: (state) => {
      state.showBookingsModal = true
    },
    closeBookingPopup: (state) => {
      state.showBookingsModal = false;
    }
  }
});

export const { showBookingPopup, closeBookingPopup } = modalSlice.actions;

export default modalSlice.reducer;

