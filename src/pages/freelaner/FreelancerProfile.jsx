import React from "react";
import { FaUserAlt, FaRegFileAlt, FaPenNib, FaPencilAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import { useGetMeQuery } from "../../feature/auth/authSlide";

const FreelancerProfile = () => {
  const { data, isLoading, error } = useGetMeQuery();
  console.log("User data:", data);

  const userData = data?.data || {};
  console.log("User data :", userData);

  if (isLoading)
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center text-red-500 dark:text-red-400">
        Error loading profile
      </div>
    );

  return (
    <>
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 border border-red-500 rounded-lg bg-white text-red-500 hover:bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 transition">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
              Let's Chat
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full md:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              {/* Profile Picture & Info */}
              <div className="flex flex-col items-center text-center  ">
                <div>
                  <div className="w-40 h-40 mb-4 ">
                    {userData?.profileImageUrl ? (
                      <img
                        className="w-full h-full rounded-full object-cover border-2 border-blue-100 dark:border-blue-900"
                        src={userData.profileImageUrl}
                        alt="user photo"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-300 text-3xl font-bold">
                          {userData?.fullName?.charAt(0) || "S"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-t w-full">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {userData.fullName || ""}
                  </h2>
                  <span className="text-gray-600 dark:text-gray-400 text-sm mt-1 text-center">
                    {userData.skills && userData.skills.length > 0
                      ? userData.skills[0]
                      : ""}
                  </span>
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400 text-center">
                    {/* <FaUserAlt className="h-4 w-4 mr-1 text-blue-900 dark:text-blue-300" /> */}
                    <span className="text-sm text-primary font-extrabold text-center">
                      {userData.userType || "Freelancer"}
                    </span>
                  </div>
                </div>
              </div>
              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-900 dark:text-blue-300 mr-3 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm">
                      {userData.email || "Email not available"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-900 dark:text-blue-300 mr-3 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm">
                      {userData.phone || "Phone not available"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-900 dark:text-blue-300 mr-3 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      {userData.address || "Location not available"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/3 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                About
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {userData.bio || "No bio information available."}
                </p>
              </div>
            </div>

            {/* CV */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  CV
                </h2>
                <a
                  href="#"
                  className="text-blue-900 dark:text-blue-300 hover:underline text-sm font-medium">
                  Download Resume
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center">
                <FaRegFileAlt className="h-8 w-8 text-blue-900 dark:text-blue-300 mr-4" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {userData.fullName || "User"}_CV.pdf
                </span>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Professional Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {userData.experienceYears
                      ? `${userData.experienceYears} years of experience`
                      : "Experience information not available"}
                  </p>
                  <p className="text-blue-900 dark:text-blue-300 font-medium mt-1">
                    {userData.skills && userData.skills.length > 0
                      ? userData.skills.join(", ")
                      : "Skills not specified"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {userData.createdAt
                      ? new Date(userData.createdAt).getFullYear()
                      : "2018"}{" "}
                    -{" "}
                    {userData.updatedAt
                      ? new Date(userData.updatedAt).getFullYear()
                      : "2021"}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    University of Fine Art
                  </p>
                  <p className="text-blue-900 dark:text-blue-300 font-medium mt-1">
                    Bachelor's degree, Graphic Design
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    2014 - 2017
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                My Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {userData.skills && userData.skills.length > 0 ? (
                  userData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
                        {index % 3 === 0 ? (
                          <RiComputerLine className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                        ) : index % 3 === 1 ? (
                          <FaPenNib className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                        ) : (
                          <FaPencilAlt className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                        )}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))
                ) : (
                  <>
                    {["Programming", "Graphic", "Content Creator"].map(
                      (service, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition">
                          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
                            {index === 0 ? (
                              <RiComputerLine className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                            ) : index === 1 ? (
                              <FaPenNib className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                            ) : (
                              <FaPencilAlt className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                            )}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {service}
                          </span>
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerProfile;
