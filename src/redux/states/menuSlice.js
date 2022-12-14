import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
})

export const { toggleIsOpen } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;