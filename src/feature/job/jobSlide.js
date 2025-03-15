import { apiSlide } from "../api/apiSlide";

export const jobSlide = apiSlide.injectEndpoints({
  endpoints: (build) => ({
    getAllJobs: build.query({
      query: () => ({
        url: `/api/jobs-service/jobs`,
        method: "GET",
      }),
    }),
    getJobById: build.query({
      query: (id) => ({
        url: `/api/jobs-service/jobs/${id} =page${page}`,
        method: "GET",
      }),
    }),
    createJob: build.mutation({
      query: (data) => {
        const token = localStorage.getItem("accessToken");
        return {
          url: "/api/jobs-service/jobs/create-job",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        };
      },
    }),
    getMyOwnJobs: build.query({
      query: () => ({
        url: "/api/jobs-service/jobs/get-own-jobs",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const  {
    useGetAllJobsQuery,
    useGetMyOwnJobsQuery,
    useCreateJobMutation,
} = jobSlide;
