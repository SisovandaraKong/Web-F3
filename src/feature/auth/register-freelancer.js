import { apiSlide } from "../api/apiSlide";

export const registerFreelancer = apiSlide.injectEndpoints({
    endpoints: (build) => ({
        registerFreelancer: build.mutation({
        query: (body) => ({
            url: " https://jobbridge-api.devnerd.store/api/users/register-freelancer",
            method: "POST",
            body,
        }),
        }),
    }),
});

export const { useRegisterFreelancerMutation } = registerFreelancer;
