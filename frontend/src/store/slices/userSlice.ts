import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user_slice',
  initialState: {
    currentUser: {},
    isUserLoggedIn: false,
  },
  reducers: {
    logIn: (state, action:PayloadAction<UserType>) => {
      state.isUserLoggedIn = true;
      state.currentUser = action.payload;
    },
    logOut:(state)=>{
      state.isUserLoggedIn = false;
      state.currentUser = {};
    }
  },
});

export const { logIn ,logOut} = userSlice.actions;
export default userSlice;
