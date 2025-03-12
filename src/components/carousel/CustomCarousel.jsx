// components/carousel/CustomCarousel.jsx
import React, { useState, useEffect } from "react";
import { useGetAllServicesQuery } from "../../feature/service/serviceSlde"; // Adjust path as needed
import { NavLink } from "react-router-dom"; // Corrected import

export default function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, isLoading, isError } = useGetAllServicesQuery(1); // Fetch page 1 for carousel
  const services = data?.content || [];
  const totalSlides = services.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (totalSlides > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // 5000ms = 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [totalSlides]);

  // Manual navigation
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <img
          className="w-16 h-16"
          src="src/assets/animation/louding/Animation - 1741739020308 (1).gif"
          alt="Loading..."
        />
      </div>
    );
  }

  if (isError || totalSlides === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center text-gray-500">
        No services available
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {services.map((service) => (
          <div key={service.id} className="min-w-full px-4">
            <NavLink to={`/freelancer-page/${service.id}`}>
              <div className="relative h-[400px]"> {/* Adjusted to full height */}
                {/* Image */}
                <img
                  src={
                    service.jobImages.length > 0
                      ? service.jobImages[0]
                      : "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
                  }
                  className="object-cover h-full w-full rounded-lg bg-gray-200 dark:bg-gray-700"
                  alt="service banner"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/40 rounded-lg"></div>
                {/* Title */}
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white text-center w-full px-4">
                  {service.title}
                </h3>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        ›
      </button>

    </div>
  );
}