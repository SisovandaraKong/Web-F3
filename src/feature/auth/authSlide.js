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
  }),
});

export const { useRegisterFreelancerMutation, useLoginMutation } =
  registerFreelancer;
