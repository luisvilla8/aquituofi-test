import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "light"
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.value === "dark") state.value = "light"
      else state.value = "dark"
    },
    themeToDark: () => {
      state.value = "dark"
    },
    themeToLight: () => {
      state.value = "light"
    }
  }
})

export const { toggleTheme, themeToDark, themeToLight } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;