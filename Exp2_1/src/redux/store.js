import { configureStore } from "@reduxjs/toolkit";
import platformReducer from "./platformSlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    platform: platformReducer,
    posts: postReducer,
  },
});

export default store;