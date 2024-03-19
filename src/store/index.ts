import { configureStore } from "@reduxjs/toolkit";

import winesReducer from "./winesSlice";
import dishWinesReducer from "./dishWinesSlice";

export const store = configureStore({
  reducer: {
    wines: winesReducer,
    dishWines: dishWinesReducer
  },
});

