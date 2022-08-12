import { createSlice } from '@reduxjs/toolkit'

const initialState = "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state === "dark") state = "light"
      else state = "dark"
    },
    themeToDark: (state) => {
      state = "dark"
    },
    themeToLight: (state) => {
      state = "light"
    }
  }
})

export const { toggleTheme, themeToDark, themeToLight } = themeSlice.actions;
export default themeSlice.reducer;