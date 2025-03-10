import { apiSlide } from "../api/apiSlide";
export const serviceSlide = apiSlide.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/api/users?userType=freelancer&page=0&size=10&sortBy=email",
        method: "GET",
      }),
    }),
    getUserById: build.query({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = serviceSlide;
