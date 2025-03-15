import { configureStore } from "@reduxjs/toolkit";
import { fileUploadApi } from "../feature/fileUplord/fileUplordSlide"; // Corrected import
import { apiSlide } from "../feature/api/apiSlide";

export const store = configureStore({
  reducer: {
    [apiSlide.reducerPath]: apiSlide.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer, // Corrected usage
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlide.middleware,
      fileUploadApi.middleware // Corrected usage
    ),
});

export default store;