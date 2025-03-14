import React, { useState } from "react";
import { FaUserAlt, FaRegFileAlt, FaPenNib, FaPencilAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import { useGetMeQuery } from "../../feature/auth/authSlide";
import {
  useDeleteServiceMutation,
  useGetMyOwnServiceQuery,
} from "../../feature/service/serviceSlde";
import { MdError } from "react-icons/md";

const FreelancerProfile = () => {
  // State to toggle services view
  const { data, isLoading, error } = useGetMeQuery();
  const {
    data: myService,
    isLoading: myServiceIsLoading,
    error: myServiceError,
  } = useGetMyOwnServiceQuery();
  console.log("ME in profile", data);

  console.log("myService in in profile", myService);

  // Mutation hook for deleting a service
  const [
    deleteService,
    { isLoading: deleteServiceIsLoading, error: deleteServiceError },
  ] = useDeleteServiceMutation();

  const [showAllServices, setShowAllServices] = useState(false);
  const handleToggleServices = () => {
    setShowAllServices((prevState) => !prevState); // Toggle between showing all or limited services
  };

  const userData = data?.data || {};

  const handleDeleteService = async (serviceId) => {
    try {
      await deleteService(serviceId); // Call delete service mutation
      console.log("Service deleted successfully.");
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  if (isLoading)
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center text-primary dark:text-white">
        <div className="text-center p-6  ">
          <MdError className="text-4xl mb-4 mx-auto text-primary" />
          <h1 className="text-2xl font-bold">Internal Error</h1>
          <p className="mt-2 text-lg">
            Oops! Something went wrong on our end. Please try again later.
          </p>
        </div>
      </div>
    );

  return (
    <>
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto min-h-screen py-10 px-4 sm:px-6 lg:px- bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        {/* <div className="flex justify-between items-center mb-8 border-b-2 border-primary pb-2">
          <h1 className="text-3xl font-bold text-primary dark:text-white ">
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
        </div> */}

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full md:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              {/* Profile Picture & Info */}
              <div className="flex flex-col items-center text-center">
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
                        <span className="text-blue-600 dark:text-blue-300 text-5xl font-bold">
                          {userData?.fullName?.charAt(0) || ""}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-t w-full text-center p-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {userData.fullName || ""}
                  </h2>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    {/* <FaUserAlt className="h-4 w-4 text-blue-900 dark:text-blue-300" /> */}
                    <span className="text-sm font-extrabold text-primary">
                      I'm a {userData.userType || "NONE TYPE"}
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm mt-3 block">
                    Experience Years {userData.experienceYears}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm mt-3 block">
                    {userData.bio || "No bio available"}
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t dark:border-gray-700  items-center">
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
            {/* Services */}
            <div>
              <h2 className="text-md  text-gray-900 dark:text-white mb-4">
                My profile
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {myServiceIsLoading ? (
                  <p className="text-gray-500">Loading services...</p>
                ) : myServiceError ? (
                  <p className="text-red-500">Error loading services.</p>
                ) : myService && myService.length > 0 ? (
                  myService
                    .slice(0, showAllServices ? myService.length : 4)
                    .map((service) => (
                      <div
                        key={service.id}
                        className="relative block rounded-tr-3xl border border-gray-100">
                        {/* Service Image */}
                        <img
                          src={
                            service.imageUrls && service.imageUrls.length > 0
                              ? service.imageUrls[0]
                              : "defaultImage.jpg"
                          }
                          alt={service.title}
                          className="h-60 w-full rounded-tr-3xl object-cover"
                        />
                        <div className="p-4 text-start">
                          <strong className="text-xl font-medium text-gray-900">
                            {service.title}
                          </strong>
                          <p className="mt-2 text-gray-700">
                            {service.description || "No description available."}
                          </p>
                        </div>
                        {/* Delete Button */}
                        <button
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                          onClick={() => handleDeleteService(service.id)}>
                          Delete
                        </button>
                      </div>
                    ))
                ) : (
                  <p className="text-gray-500">No services available.</p>
                )}
              </div>
              <button
                className="mt-4 text-primary underline   p-3 rounded-md"
                onClick={handleToggleServices}>
                {showAllServices ? "See Less Service" : "See All Service"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerProfile;
