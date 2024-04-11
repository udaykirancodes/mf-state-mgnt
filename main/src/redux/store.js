import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/slice";

const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;
