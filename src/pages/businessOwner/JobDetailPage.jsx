import React from "react";
import { useGetAllJobsQuery } from "../../feature/job/jobSlide";
import { useParams } from "react-router-dom";
import { useGetAllUsersQuery } from "../../feature/service/serviceSlde";

export default function JobDetailPage() {
  const { id } = useParams();
  const { data: jobs, isLoading, isError, error } = useGetAllJobsQuery();
  const { data: userData } = useGetAllUsersQuery();

  const jobData = jobs?.content?.find((job) => job.id === id);
  console.log("Job Data", jobData);

  // Find the user who posted the job
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
          {/* Apply Button */}
          {/* <div className="mt-6">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 w-full md:w-auto">
              Apply for this job
            </button>
          </div> */}
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
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Job Description
          </h2>
          <p className="mt-2 text-gray-700">
            As a software development company dedicated to delivering
            high-quality, scalable, and innovative web solutions, we are looking
            for a highly skilled Senior Back-End Developer to join our team and
            help us build and maintain robust server-side applications. If you
            are passionate about coding, problem-solving, and working with the
            latest technologies, we want to hear from you!
          </p>
        </div>

        {/* Job Requirement Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Job Requirements
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
            <li>4+ years of experience in back-end web development.</li>
            <li>
              Proficiency in Node.js, Python (Django/Flask), Java, or PHP
              (Laravel).
            </li>
            <li>
              Strong experience with databases such as PostgreSQL, MySQL, or
              MongoDB.
            </li>
            <li>Knowledge of RESTful APIs, and microservices architecture.</li>
            <li>
              Familiarity with cloud platforms such as AWS, Google Cloud, or
              Azure.
            </li>
          </ul>
        </div>
        {/* Job Responsibility Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Job Responsibilities
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Design, develop, and maintain scalable and secure server-side
              applications.
            </li>
            <li>
              Write clean, efficient, and maintainable code following best
              practices.
            </li>
            <li>
              Build and maintain APIs and microservices for front-end and mobile
              applications.
            </li>
            <li>Optimize database performance and ensure data integrity.</li>
            <li>
              Collaborate with front-end developers, DevOps engineers, and other
              team members.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-primary pt-8 pb-8 ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631404683705!2d104.89921187452715!3d11.578259843893385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1skm!2skh!4v1741927447451!5m2!1skm!2skh"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"></iframe>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Phone
            </h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Email
            </h4>
            <p>support@itsolutions.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Working Hours
            </h4>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div calssName="pt-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Employee Benefits
        </h2>
        <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
          <li>Competitive salary and performance-based bonuses.</li>
          <li>Flexible work hours.</li>
          <li>Collaborative and dynamic work environment.</li>
        </ul>
      </div>
    </div>
  );
}