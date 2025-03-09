import { configureStore } from "@reduxjs/toolkit";
import { apiSlide } from "../feature/api/apiSlide";


export const store = configureStore({
    reducer: {
        [apiSlide.reducerPath]: apiSlide.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlide.middleware),
});

export default store;
