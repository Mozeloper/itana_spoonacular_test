import { createSlice } from "@reduxjs/toolkit";

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") return storedPrefs;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
  }
  return "light";
};

export const checkTheme = (existing) => {
  const root = window.document.documentElement;
  const isDark = existing === "dark";
  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(existing);
  localStorage.setItem("current-theme", existing);
};

const initialState = {
  initialTheme: getInitialTheme(),
};

export const darkModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleChangeTheme: (state, action) => {
      checkTheme(action.payload);
      state.initialTheme = action.payload;
    },
  },
});

export const { reducer, actions } = darkModeSlice;
export const { handleChangeTheme } = actions;

export default reducer;
