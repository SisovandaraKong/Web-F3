import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaPenNib } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import { useGetMeQuery } from "../../feature/auth/authSlide";

const FreelancerProfile = () => {
  const { data, isLoading, error } = useGetMeQuery();
  console.log("User data:", data);

  // Use optional chaining to safely access data
  const userData = data?.data || {};
  console.log("User data :", userData);

  if (isLoading)
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        Error loading profile
      </div>
    );

  return (
    <>
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="p-5">
          <h1 className="text-Sub2Title font-bold text-primary">
            View Profile
          </h1>
        </div>
        <div className="flex space-x-2 justify-end mr-5">
          <button className="flex items-center px-3 py-1.5 border border-primary rounded bg-white text-TabText font-medium text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit
          </button>
          <button className="flex items-center px-3 py-1.5 bg-primary rounded text-TabText font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <ChatBubbleLeftEllipsisIcon className="w-4 h-4 text-white" />
            </svg>
            Let's Chat
          </button>
        </div>
        <div className="flex flex-col md:flex-row px-5 pb-10 gap-6">
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4 ">
                  {userData?.profileImageUrl ? (
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src={userData.profileImageUrl}
                      alt="user photo"
                    />
                  ) : (
                    <div className="w-18 h-18 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-4xl font-bold">
                        {userData?.fullName?.charAt(0) || "S"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-CardMainTitle font-bold text-primary">
                    {userData.fullName || ""}
                  </h2>
                  <span className="text-primary text-sm">
                    {userData.skills && userData.skills.length > 0
                      ? `• ${userData.skills[0]}`
                      : "• Web Development"}
                  </span>

                  <div className="flex items-center justify-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-900 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <FaUserAlt />
                    </svg>
                    <span className="text-sm text-primary">
                      {userData.userType || "Full-time"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-semibold text-primary mb-3 text-CardMainTitle">
                  Contact information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-hover mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm text-primary">
                      {userData.email || "Email not available"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-hover mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-primary">
                      {userData.phone || "Phone not available"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-hover mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-primary">
                      {userData.address || "Location not available"}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-CardMainTitle font-bold text-primary">
                About
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <p className="text-TabText text-black-text leading-relaxed">
                {userData.bio || "No bio information available."}
              </p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-primary">CV</h2>
              <a href="#" className="text-primary text-sm font-bold">
                Resume
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center">
                <div className=" mr-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <FaRegFileAlt />
                  </svg>
                </div>
                <span className="font-medium text-primary text-TabText">
                  {userData.fullName || "User"}_CV.pdf
                </span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary mb-4">
              Work Experience
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-5 mb-4 transition-transform transform hover:scale-105">
              <h3 className="font-semibold text-primary mb-2">
                Work Experience
              </h3>
              <div className="mt-1">
                <div className="text-TabText text-black-text">
                  {userData.experienceYears
                    ? `${userData.experienceYears} years of experience`
                    : "Experience information not available"}
                </div>
                <div className="font-medium text-primary">
                  {userData.skills && userData.skills.length > 0
                    ? userData.skills.join(", ")
                    : "Skills not specified"}
                </div>
                <div className="text-TabText text-black-text">
                  {userData.createdAt
                    ? new Date(userData.createdAt).getFullYear()
                    : "2018"}{" "}
                  -{" "}
                  {userData.updatedAt
                    ? new Date(userData.updatedAt).getFullYear()
                    : "2021"}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-5 mb-6 transition-transform transform hover:scale-105">
              <h3 className="font-semibold text-primary mb-2">
                Work Experience
              </h3>
              <div className="mt-1">
                <div className="text-TabText text-black-text">
                  University of Fine Art
                </div>
                <div className="font-medium text-primary">
                  Bachelor's degree, Graphic Design
                </div>
                <div className="text-TabText text-black-text">2014 - 2017</div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary mb-4">My Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Map through skills if available, otherwise show default services */}
              {userData.skills && userData.skills.length > 0 ? (
                userData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        {index % 3 === 0 ? (
                          <RiComputerLine />
                        ) : index % 3 === 1 ? (
                          <FaPenNib />
                        ) : (
                          <FaPencilAlt />
                        )}
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      {skill}
                    </span>
                  </div>
                ))
              ) : (
                // Default services if no skills are available
                <>
                  <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <RiComputerLine />
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      Programming
                    </span>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <FaPenNib />
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      Graphic
                    </span>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <FaPencilAlt />
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      Content Creator
                    </span>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <RiComputerLine />
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      Programming
                    </span>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <FaPenNib />
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      Graphic
                    </span>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105">
                    <div className="p-3 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-13 w-13 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <FaPencilAlt />
                      </svg>
                    </div>
                    <span className="text-TabText text-black-text">
                      Content Creator
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerProfile;
