import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  showPopup: boolean
}

const initialState: modalState = {
  showPopup: false
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.showPopup = true
    },
    closePopup: (state) => {
      state.showPopup = false;
    }
  }
});

export const { openPopup, closePopup } = modalSlice.actions;

export default modalSlice.reducer;

