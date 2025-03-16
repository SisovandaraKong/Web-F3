import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://202.178.125.77:1235/api/v1/" }),
  endpoints: (builder) => ({
    // Mutation for uploading an image
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: "medias",
        method: "POST",
        body: formData,
      }),
    }),

    // Query for fetching a file by its name
    getFileByName: builder.query({
      query: (fileName) => ({
        url: `medias/view/${fileName}`,
        method: "GET",
        responseHandler: async (response) => {
          if (response.ok) {
            // Handle the response as a blob (for files like images, PDFs, etc.)
            return await response.blob();
          }
          throw new Error("Failed to fetch file");
        },
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useUploadImageMutation, useGetFileByNameQuery } = fileUploadApi;