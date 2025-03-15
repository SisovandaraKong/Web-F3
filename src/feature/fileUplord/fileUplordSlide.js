import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://202.178.125.77:1235/api/v1/" }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: "medias",
        method: "POST",
        body: formData,
        // No need to set Content-Type manually; fetchBaseQuery handles it
      }),
    }),
  }),
});

export  const { useUploadImageMutation } = fileUploadApi;