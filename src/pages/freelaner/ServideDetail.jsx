import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  useGetAllServicesQuery,
  useGetAllUsersQuery,
} from "../../feature/service/serviceSlde";

export default function ServiceDetail() {
  const { id } = useParams();
  const { data: serviceData, isLoading, isError } = useGetAllServicesQuery();
  const { data: userData } = useGetAllUsersQuery();

  const users = userData?.data?.content || [];
  const services = serviceData?.content || [];

  // Find the matching service and user
  const service = services.find((item) => String(item.id) === String(id));
  const user = users.find(
    (item) => String(item.id) === String(service?.userId)
  );

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const relatedServices = services.filter((s) => s.id !== service?.id); // Exclude current service
  const slidesToShow = 4;
  const totalSlides = Math.ceil(relatedServices.length / slidesToShow);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading service details...
        </p>
      </div>
    );
  }

  if (isError || !service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Failed to load service</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Main Service Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          <div className="relative">
            <img
              src={
                service.jobImages[0] ||
                "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
              }
              className="w-full h-[400px] object-cover rounded-lg"
              alt={service.title}
            />
            <span
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white ${
                service.status === "active"
                  ? "bg-green-500"
                  : service.status === "disable"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {service.status}
            </span>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={
                    service.jobImages.length > 0
                      ? service.jobImages[0]
                      : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  className="h-10 w-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                  alt="service logo"
                />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.category.name}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* User Info */}
              {user ? (
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Service Provider
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Name:</strong> {user.fullName}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                </div>
              ) : (
                <p className="text-red-500 mb-6">User not found</p>
              )}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        {/* Related Services Carousel */}
        {relatedServices.length > 0 && (
          <div className="mt-12">
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Related Services
              </h3>
              <div className="w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="flex min-w-full gap-4"
                    >
                      {relatedServices
                        .slice(
                          slideIndex * slidesToShow,
                          (slideIndex + 1) * slidesToShow
                        )
                        .map((related) => (
                          <NavLink
                            key={related.id}
                            to={`/freelancer-page/${related.id}`}
                            className="w-1/4 p-2"
                          >
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                              <img
                                src={
                                  related.jobImages[0] ||
                                  "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
                                }
                                className="w-full h-32 object-cover"
                                alt={related.title}
                              />
                              <div className="p-3">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                  {related.title}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                  {related.description}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    ‹
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}