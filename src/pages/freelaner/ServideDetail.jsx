import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  useGetAllServicesQuery,
  useGetAllUsersQuery,
} from "../../feature/service/serviceSlde";

export default function ServiceDetail() {
  const { id } = useParams();
  const { data: serviceData, isLoading, isError } = useGetAllServicesQuery(1);
  const { data: userData } = useGetAllUsersQuery();

  const users = userData?.data?.content || [];
  const services = serviceData?.content || [];
  const service = services.find((item) => String(item.id) === String(id));
  const user = users.find((item) => String(item.id) === String(service?.userId));

  const [currentSlide, setCurrentSlide] = useState(0);
  const relatedServices = services.filter((s) => s.id !== service?.id);
  const slidesToShow = 4;
  const totalSlides = Math.ceil(relatedServices.length / slidesToShow);

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (isError || !service) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-red-600 dark:text-red-400 text-lg font-medium">
            Oops! Couldn’t load this service
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Please try again later
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Service Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="relative">
            <img
              src={
                service.jobImages[0] ||
                "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
              }
              className="w-full h-[350px] object-cover"
              alt={service.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <span
              className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-sm font-medium text-white shadow-md ${
                service.status === "active"
                  ? "bg-green-500"
                  : service.status === "disable"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
            </span>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {service.description}
            </p>

            {user && (
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Service Provider
                </h3>
                <p><strong>Name:</strong> {user.fullName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            )}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Apply Now
            </button>
          </div>
        </div>

        {/* Related Services Carousel */}
        {relatedServices.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Explore Similar Services
            </h3>
            <div className="relative mt-6">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="flex min-w-full gap-6">
                      {relatedServices
                        .slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow)
                        .map((related) => (
                          <NavLink
                            key={related.id}
                            to={`/freelancer-page/${related.id}`}
                            className="w-1/4"
                          >
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                              <img
                                src={
                                  related.jobImages[0] ||
                                  "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
                                }
                                className="w-full h-40 object-cover"
                                alt={related.title}
                              />
                              <div className="p-4">
                                <h4 className="text-base font-semibold text-gray-900 dark:text-white truncate">
                                  {related.title}
                                </h4>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                    </div>
                  ))}
                </div>
              </div>

              {totalSlides > 1 && (
                <>
                  <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white w-10 h-10 rounded-full">
                    ‹
                  </button>
                  <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white w-10 h-10 rounded-full">
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
