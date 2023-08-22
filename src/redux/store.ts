import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./features/navBarSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
