import React from "react";
import { useGetAllJobsQuery } from "../../feature/job/jobSlide";
import { useParams } from "react-router-dom";
import { useGetAllUsersQuery } from "../../feature/service/serviceSlde";

export default function JobDetailPage() {
  const { id } = useParams();
  const { data: jobs, isLoading, isError, error } = useGetAllJobsQuery();
  const { data: userData } = useGetAllUsersQuery();

  // Find the job with the matching ID
  const jobData = jobs?.content?.find((job) => job.id === id);

  // Find the user who posted the job
  const users = userData?.data?.content || [];
  const jobPoster = users.find((user) => user.id === jobData?.userId);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="text-gray-600">
            {error?.data?.message || "Failed to load job details."}
          </p>
        </div>
      </div>
    );
  }

  // Handle case where jobData is undefined or empty
  if (!jobData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Job Not Found</h1>
          <p className="text-gray-600">
            The job you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  // Render job details
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Job Details */}
        <div className="space-y-6">
          {/* Job Title */}
          <h1 className="text-3xl font-bold text-gray-800">{jobData.title}</h1>

          {/* Job Description */}
          <p className="text-gray-600">{jobData.description}</p>

          {/* Job Details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">Budget:</span>
              <span className="text-gray-600">${jobData.budget}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">Status:</span>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  jobData.status === "OPEN"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
                {jobData.status}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">
                Posted On:
              </span>
              <span className="text-gray-600">
                {new Date(jobData.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-6">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 w-full md:w-auto">
              Apply for this job
            </button>
          </div>
        </div>

        {/* Right Column: Job Poster and Images */}
        <div className="space-y-6">
          {/* Job Poster Information */}
          {jobPoster && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Posted By:
              </h2>
              <div className="flex items-center space-x-4">
                {jobPoster.profilePicture && (
                  <img
                    src={jobPoster.profilePicture}
                    alt={`${jobPoster.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-gray-800 font-semibold">
                    {jobPoster.name}
                  </p>
                  <p className="text-gray-600">{jobPoster.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Job Images */}
          <div className="space-y-4">
            {jobData.jobImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Job Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
