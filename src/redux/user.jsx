import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload.user;
    },
    logout: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
