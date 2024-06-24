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
import categoriesReducer from "./categoriesSlice";
import adultSlice from "./adultSlice";
import cartOrderedSlice from "./cartOrderedSlice";
import searchSlice from "./serchSlice";
import lastSeenSlice from "./lastSeenSlice";
import giftBoxItemSlice from "./giftBoxItemSlice";
import { verifyNumber } from "../RTK/verifyNumber";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [wineApi.reducerPath, 'giftBoxItem'],
}

const rootReducer = combineReducers({
  categories: categoriesReducer,
  searchText: searchSlice,
  verify: adultSlice,
  cartOrdered: cartOrderedSlice,
  lastSeen: lastSeenSlice,
  giftBoxItem: giftBoxItemSlice,
  [wineApi.reducerPath]: wineApi.reducer,
  [verifyNumber.reducerPath]: verifyNumber.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }).concat(wineApi.middleware, verifyNumber.middleware),
   
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store);