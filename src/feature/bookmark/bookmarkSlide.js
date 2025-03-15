import { apiSlide } from "../api/apiSlide";

export const bookmarkSlide = apiSlide.injectEndpoints({
  endpoints: (build) => ({
    // Get My Bookmarks
    getMyBookmark: build.query({
      query: () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("Token is missing. Please log in again.");
          return {};
        }
        return {
          url: "/api/jobs-service/service-bookmark",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    // Create a Bookmark
    createBookmark: build.mutation({
      query: (serviceId) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("Token is missing. Please log in again.");
          return {};
        }
        return {
          url: `/api/jobs-service/service-bookmark/${serviceId}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseHandler: "text", // Handle plain text responses
        };
      },
      transformResponse: (response) => {
        return {
          message: response,
        };
      },
    }),

    // Delete a Bookmark
    deleteBookmark: build.mutation({
      query: (serviceId) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("Token is missing. Please log in again.");
          return {};
        }
        return {
          url: `/api/jobs-service/service-bookmark/${serviceId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseHandler: "text", // Handle plain text responses
        };
      },
      transformResponse: (response) => {
        // Transform the plain text response into a meaningful object
        return {
          message: response, // "Bookmark deleted successfully!"
        };
      },
    }),
  }),
});

export const {
  useGetMyBookmarkQuery,
  useCreateBookmarkMutation,
  useDeleteBookmarkMutation, // Export the delete mutation
} = bookmarkSlide;
