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
    getAllServices: build.query({
      query: (page = 1) => ({
        url: `/api/jobs-service/services?page=${page}`,
        method: "GET",
      }),
    }),
    // Create service mutation
    createService: build.mutation({
      query: (serviceData) => ({
        url: "/api/jobs-service/services/create-new",
        method: "POST",
        body: serviceData,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetAllServicesQuery,
  useCreateServiceMutation, // Export the mutation hook
} = serviceSlide;
