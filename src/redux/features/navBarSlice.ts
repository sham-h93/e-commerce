import { createSlice } from "@reduxjs/toolkit";

interface NavBarState {
  isOpen: boolean;
}

const initialState: NavBarState = {
  isOpen: false,
};

export const navBarSlice = createSlice({
  name: "slideNavBar",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen } = navBarSlice.actions;

export default navBarSlice.reducer;
