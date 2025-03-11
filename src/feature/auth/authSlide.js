import { apiSlide } from "../api/apiSlide";

export const registerFreelancer = apiSlide.injectEndpoints({
  endpoints: (build) => ({
    registerFreelancer: build.mutation({
      query: (body) => ({
        url: "/api/users/register-freelancer",
        method: "POST",
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "/api/users/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    }),
    getMe: build.query({
      query: () => {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token is missing. Please log in again.");
          return {};
        }
        return {
          url: "/api/users/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterFreelancerMutation,
  useLoginMutation,
  useGetMeQuery,
} = registerFreelancer;
