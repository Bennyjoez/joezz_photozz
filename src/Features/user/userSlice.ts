import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface userState {
  id: string,
  name: string,
  email: string,
  contact: string,
  userToken: string
}

const initialState: userState = {
  id: '',
  name: '',
  email: '',
  contact: '',
  userToken: ''
}

// create slice

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<userState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.contact = action.payload.contact;
      state.userToken = action.payload.userToken
    },
    logOutUser: (state) => {
      state.id = '';
      state.name = '';
      state.email = '';
      state.contact = '';
      state.userToken = ''
    }
  },
})

//export any actions
export const { saveUser } = userSlice.actions;

// select current user
export const selectUser = (state: RootState) => state.user;

//export reducer
export default userSlice.reducer;
