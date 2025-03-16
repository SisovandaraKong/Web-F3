import React from "react";
import { useGetAllJobsQuery } from "../../feature/job/jobSlide";
import { useParams } from "react-router-dom";
import { useGetAllUsersQuery } from "../../feature/service/serviceSlde";

export default function JobDetailPage() {
  const { id } = useParams();
  const { data: jobs, isLoading, isError, error } = useGetAllJobsQuery();
  const { data: userData } = useGetAllUsersQuery();

  const jobData = jobs?.content?.find((job) => job.id === id);
  const users = userData?.data?.content || [];
  const jobPoster = users.find((user) => user.id === jobData?.userId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-red-500 dark:text-red-400">Error</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {error?.data?.message || "Failed to load job details."}
          </p>
        </div>
      </div>
    );
  }

  if (!jobData) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Job Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            The job you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg my-4 sm:my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column: Job Details */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">{jobData.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{jobData.description}</p>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center flex-col sm:flex-row">
              <span className="font-semibold text-gray-700 dark:text-gray-300 w-full sm:w-32 text-sm sm:text-base">Budget:</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">${jobData.budget}</span>
            </div>
            <div className="flex items-center flex-col sm:flex-row">
              <span className="font-semibold text-gray-700 dark:text-gray-300 w-full sm:w-32 text-sm sm:text-base">Status:</span>
              <span
                className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                  jobData.status === "OPEN"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {jobData.status}
              </span>
            </div>
            <div className="flex items-center flex-col sm:flex-row">
              <span className="font-semibold text-gray-700 dark:text-gray-300 w-full sm:w-32 text-sm sm:text-base">Posted On:</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {new Date(jobData.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="mt-4 sm:mt-6">
            <button className="bg-blue-500 dark:bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300 w-full text-sm sm:text-base">
              Apply for this job
            </button>
          </div>
        </div>

        {/* Right Column: Job Poster and Images */}
        <div className="space-y-4 sm:space-y-6">
          {jobPoster && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                Posted By:
              </h2>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {jobPoster.profilePicture && (
                  <img
                    src={jobPoster.profilePicture}
                    alt={`${jobPoster.name}'s profile`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-gray-800 dark:text-white font-semibold text-sm sm:text-base">{jobPoster.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{jobPoster.email}</p>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-3 sm:space-y-4">
            {jobData.jobImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Job Image ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}