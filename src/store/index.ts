import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { wineApi } from "../RTK/wineApi";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [wineApi.reducerPath],
}

const rootReducer = combineReducers({
  [wineApi.reducerPath]: wineApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }).concat(wineApi.middleware),
   
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);


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

