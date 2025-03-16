import { apiSlide } from "../api/apiSlide";

export const editeSildeApi = apiSlide.injectEndpoints({
  endpoints: (build) => ({
    editeProfileBusinessOwner: build.mutation({
      query: (data) => {
        const token = localStorage.getItem("accessToken");
        console.log("Token", token);
        if (!token) {
          throw new Error("No token found in localStorage");
        }
        return {
          url: "/api/users/update-business-profile",
          method: "PUT",
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

export const { useEditeProfileBusinessOwnerMutation } = editeSildeApi;
