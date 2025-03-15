import React, { useState } from "react";
import {
  FaUserAlt,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaBuilding,
  FaPen,
  FaTimes,
} from "react-icons/fa";
import { useGetMeQuery } from "../../feature/auth/authSlide";
import {
  useDeleteServiceMutation,
  useGetMyOwnServiceQuery,
} from "../../feature/service/serviceSlde";
import { MdError, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetMyOwnJobsQuery } from "../../feature/job/jobSlide";

const BusinessProfile = () => {
  const { data, isLoading, error } = useGetMeQuery();
  const {
    data: myServices,
    isLoading: servicesLoading,
    error: servicesError,
  } = useGetMyOwnJobsQuery();
  console.log("Me As Business owner: ", data);
  console.log("My Services: ", myServices);
  const service = myServices?.content || [];
  console.log("My Services: ", service);

  const [deleteService, { isLoading: deleteLoading }] =
    useDeleteServiceMutation();
  const [showAllServices, setShowAllServices] = useState(false);

  const userData = data?.data || {};

  const handleDeleteService = async (serviceId) => {
    if (confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteService(serviceId);
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <MdError className="text-5xl mb-4 mx-auto text-red-500" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Unable to Load Profile
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We couldn't load your profile information. Please try again later.
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-10">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                {userData.profileImageUrl ? (
                  <img
                    src={userData.profileImageUrl}
                    alt={userData.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-100">
                    <span className="text-blue-800 text-4xl font-bold">
                      {userData.fullName?.charAt(0) || "B"}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                {userData.fullName}
              </h1>
              <p className="text-blue-100 text-lg">
                {userData.userType === "BUSINESS_OWNER"
                  ? "Business Owner"
                  : userData.userType}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                {userData.companyName && (
                  <div className="flex items-center">
                    <FaBuilding className="mr-2" />
                    <span>{userData.companyName}</span>
                  </div>
                )}
                {userData.industry && (
                  <div className="flex items-center">
                    <FaUserAlt className="mr-2" />
                    <span>{userData.industry}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="md:ml-auto flex gap-3">
              <Link
                to="/edit-profile-business-owner"
                className=" text-secondary px-4 py-2 rounded-lg shadow-lg border-2 border-secondary transition flex items-center">
                <FaPen className="mr-1" />
                Edite Profile
              </Link>
              <Link
                to="/create-job"
                className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg  hover:bg-primary-hover transition flex items-center">
                <MdAdd className="mr-1" />
                Add Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 border-b pb-3">
                Contact Information
              </h2>
              <div className="space-y-5">
                {userData.email && (
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-primary dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        {userData.email}
                      </p>
                    </div>
                  </div>
                )}

                {userData.phone && (
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <FaPhone className="text-primary dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        {userData.phone}
                      </p>
                    </div>
                  </div>
                )}

                {userData.companyWebsite && (
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <FaGlobe className="text-primary dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Website
                      </p>
                      <a
                        href={userData.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline">
                        {userData.companyWebsite}
                      </a>
                    </div>
                  </div>
                )}

                {userData.createdAt && (
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <FaCalendarAlt className="text-primary dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Joint At
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        {new Date(userData.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  My Services
                </h2>
                <button
                  onClick={() => setShowAllServices(!showAllServices)}
                  className="text-primary hover:underline font-semibold">
                  {showAllServices ? "Show Less" : "View All"}
                </button>
              </div>

              {/* Loading State */}
              {servicesLoading && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              )}

              {/* Error State */}
              {servicesError && (
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <MdError className="text-5xl mb-4 mx-auto text-red-500" />
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Unable to Load Services
                  </h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    We couldn't load your services. Please try again later.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
                    Retry
                  </button>
                </div>
              )}

              {/* Services List (Horizontal Layout) */}
              <div className="space-y-6">
                {service.map((serviceItem) => (
                  <div
                    key={serviceItem.id}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex">
                    {/* Service Image */}
                    <div className="relative w-[300px] h-[200] flex-shrink-0">
                      <img
                        src={
                          serviceItem.jobImages
                            ? serviceItem.jobImages[0]
                            : "https://via.placeholder.com/300"
                        }
                        alt={serviceItem.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Delete Button */}
                    </div>

                    {/* Service Details */}
                    <div className="p-4 flex-1">
                      {/* Title and Date */}
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(serviceItem.createdAt).toLocaleDateString()}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2 line-clamp-1">
                          {serviceItem.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">
                        {serviceItem.description}
                      </p>

                      {/* Budget and Actions */}
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-primary font-bold">
                          ${serviceItem.budget}/M
                        </span>
                        <Link
                          to={`/service/${serviceItem.id}`}
                          className="text-teal-600 hover:underline font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
