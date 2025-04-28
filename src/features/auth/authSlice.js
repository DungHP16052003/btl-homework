import { createSlice } from "@reduxjs/toolkit";
import { getUser, postLogin, postRegister } from "./authAsync";

const initialState = {
  currentUser: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(postRegister.rejected, (state, action) => {
        state.error = action;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
