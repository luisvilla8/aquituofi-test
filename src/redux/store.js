import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./states/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
})