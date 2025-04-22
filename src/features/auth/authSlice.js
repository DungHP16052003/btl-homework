import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "./authAsync";


const initialState = {
    currentUser: null,
  err:null
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action)=> {
        state.currentUser = action.payload;


    })
  }
});
export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
