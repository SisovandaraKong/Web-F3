import { configureStore } from "@reduxjs/toolkit";
import { fileUplordSlide } from "../feature/fileUplord/fileUplordSlide";
import { apiSlide } from "../feature/api/apiSlide";

export const store = configureStore({
  reducer: {
    [apiSlide.reducerPath]: apiSlide.reducer,
    [fileUplordSlide.reducerPath]: fileUplordSlide.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlide.middleware,
      fileUplordSlide.middleware
    ),
});

export default store;
