import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slicers/counterSlicer";

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
