import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fileUplordSlide = createApi({
  reducerPath: 'fileUplordSlide',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BAST_URL_UPLORDFILE}` }),  // Set the base URL for the API
  endpoints: (builder) => ({
    uplordImageFile: builder.mutation({
      query: (formData) => ({
        url: '/api/v1/medias', 
        method: 'POST',
        body: formData,
        prepareHeaders: (headers) => {
          headers.delete('Content-Type');
          return headers;
        },
      }),
    }),

  }),
});

export const { useUplordImageFileMutation } = fileUplordSlide;
