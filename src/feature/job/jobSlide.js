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
          url: "/api/jobs-service/jobs/create-new",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        };
      },
    }),
  }),
});

export const  {
    useGetAllJobsQuery,
} = jobSlide;
