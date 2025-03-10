import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlide = createApi({
  reducerPath: "apiSlide",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BAST_URL}` }),
  endpoints: (build) => ({}),
});
