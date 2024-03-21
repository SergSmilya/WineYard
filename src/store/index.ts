import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { wineApi } from "../RTK/wineApi";

export const store = configureStore({
  reducer: {
    [wineApi.reducerPath]: wineApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wineApi.middleware),
});

setupListeners(store.dispatch);

// ====================================
// import { configureStore } from "@reduxjs/toolkit";

// import winesReducer from "./winesSlice";
// import dishWinesReducer from "./dishWinesSlice";

// export const store = configureStore({
//   reducer: {
//     wines: winesReducer,
//     dishWines: dishWinesReducer
//   },
// });

