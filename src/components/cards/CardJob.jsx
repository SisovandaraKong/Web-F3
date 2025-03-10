import React from "react";
import { IoMdTime } from "react-icons/io";
import { useGetAllServicesQuery } from "../../feature/service/serviceSlde";

export default function CardJob() {
  const { data, isLoading, isError } = useGetAllServicesQuery();

  if (isLoading) return <p>Loading services...</p>;
  if (isError) return <p>Failed to load services</p>;

  const services = data?.content || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service) => (
        <div key={service.id} className="rounded-lg bg-white dark:bg-black p-4 shadow-lg">
          {/* Service Header */}
          <div className="relative mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={
                  service.jobImages.length > 0
                    ? service.jobImages[0]
                    : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                }
                className="h-8 w-8 rounded-full object-cover bg-gray-200 dark:bg-gray-700"
                alt="service logo"
              />
              <div>
                <h2 className="text-lg font-bold text-black dark:text-white">
                  {service.category?.name || "Unknown Category"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.status}
                </p>
              </div>
            </div>
          </div>

          {/* Service Image */}
          <img
            src={
              service.jobImages.length > 0
                ? service.jobImages[0]
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            className="mb-4 object-cover aspect-video w-full rounded-lg bg-gray-200 dark:bg-gray-700"
            alt="service banner"
          />

          {/* Service Description */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {service.description}
            </p>
          </div>

          {/* Service Creation Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IoMdTime className="text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(service.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="rounded-md px-4 py-2 text-sm border font-medium text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                Details
              </button>
              <button className="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">
                Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
