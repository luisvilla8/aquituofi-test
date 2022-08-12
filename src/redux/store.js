import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, themeReducer, modalReducer } from "./states";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    modal: modalReducer
  }
})