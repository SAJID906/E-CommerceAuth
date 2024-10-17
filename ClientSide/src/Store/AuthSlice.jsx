import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  error: null,
  user: null,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    LogOut: (state) => {
      state.user = "";
    },
  },
});
export const { SetUser, LogOut } = AuthSlice.actions;
export default AuthSlice.reducer;
