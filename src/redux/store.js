import { combineReducers,configureStore } from '@reduxjs/toolkit';
import {reduxAPI} from "./services/reduxApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "./features/authSlice";
import blogSlice from './features/blogSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import CategorySlice from './features/CategorySlice';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const rootReducer = combineReducers({
  [reduxAPI.reducerPath]: reduxAPI.reducer,
  auth: authSlice,
  blogs: blogSlice,
  category: CategorySlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(reduxAPI.middleware),
})
setupListeners(store.dispatch);
export const rootState = store.getState();