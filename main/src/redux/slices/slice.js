import { createSlice } from "@reduxjs/toolkit";

import { getUserData } from "./action";

const initialState = {
  loading: false,
  user: {
    role: "",
    name: "",
    email: "",
    isVerified: false,
  },
};

export const userSlice = createSlice({
  name: "UserSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user.role = action.payload.role;
        state.user.name = action.payload.name;
        state.user.isVerified = action.payload.isVerified;
        state.user.email = action.payload.email;
        console.log("payload in main : ", action.payload);
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getUserData.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
