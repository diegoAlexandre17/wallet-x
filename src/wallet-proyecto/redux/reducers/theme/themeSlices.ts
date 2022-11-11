import { createSlice } from "@reduxjs/toolkit";

interface Theme {
  theme: boolean;
}

const initialState: Theme = {
  theme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      return {
        ...state,
        theme: !state.theme,
      };
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
