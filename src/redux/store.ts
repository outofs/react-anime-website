import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { animeDbApi } from "./services/animeDB";

export const store = configureStore({
  reducer: {
    [animeDbApi.reducerPath]: animeDbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeDbApi.middleware),
});
