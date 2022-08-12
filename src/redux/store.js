import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, themeReducer } from "./states";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  }
})