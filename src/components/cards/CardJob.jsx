import React from "react";
import { IoMdTime } from "react-icons/io";
import { useGetAllServicesQuery } from "../../feature/service/serviceSlde";
import { NavLink } from "react-router"; // Make sure this is imported correctly
import dataMuck from "../../data/mockData";

export default function CardJob({ page }) {
  const { data, isLoading, isError } = useGetAllServicesQuery(page);
  console.log("Daata in CArt JOb", dataMuck);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-96">
        <img
          className="items-center text-9xl"
          src="src/assets/animation/louding/Animation - 1741739020308 (1).gif"
          alt=""
        />
      </div>
    );
  if (isError) return <p>Failed to load services</p>;

  const services = data?.content || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <NavLink key={service.id} to={`/freelancer-page/${service.id}`}>
          <div className="rounded-lg bg-white dark:bg-black p-4 shadow-lg">
            <img
              src={
                service.jobImages.length > 0
                  ? service.jobImages[0] || dataMuck.imageUrl
                  : "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
              }
              className="mb-4 object-cover aspect-video w-full rounded-lg bg-gray-200 dark:bg-gray-700"
              alt="service banner"
            />

            {/* Service Description */}
            <div className="mb-4">
              <p
                className={`text-sm px-2 py-1 rounded text-white w-fit ${
                  service.status === "active"
                    ? "bg-yellow-300 blur-sm"
                    : service.status === "disable"
                    ? "bg-red-500"
                    : "bg-blue-700"
                }`}>
                {service.status}
              </p>

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
        </NavLink>
      ))}
    </div>
  );
}
