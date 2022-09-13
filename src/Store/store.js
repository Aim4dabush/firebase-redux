import { configureStore } from "@reduxjs/toolkit";

//slices
import userReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
