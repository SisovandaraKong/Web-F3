import React from "react";
import { IoMdTime } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useGetAllServicesQuery } from "../../feature/service/serviceSlde";


export default function ServiceDetail() {
  const { id } = useParams();
  const { data: service, isLoading, isError } = useGetAllServicesQuery(id);

  if (isLoading) return <p className="text-center text-gray-500">Loading service details...</p>;
  if (isError || !service) return <p className="text-center text-red-500">Failed to load service</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-black shadow-lg rounded-lg">
      {/* Service Image */}
      <img
        src={service.jobImages.length > 0 ? service.jobImages[0] : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
        alt="Service"
        className="w-full h-64 object-cover rounded-lg bg-gray-200 dark:bg-gray-700"
      />

      {/* Service Info */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-black dark:text-white">{service.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Category: <span className="font-medium">{service.category?.name || "Unknown"}</span></p>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">{service.description}</p>

        {/* Status & Created Date */}
        <div className="mt-4 flex items-center justify-between">
          <span className={`px-4 py-1 rounded-full text-sm font-medium ${service.status === "ACTIVE" ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-700"}`}>
            {service.status}
          </span>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <IoMdTime />
            <span>{new Date(service.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="w-full py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800">
            Order Now
          </button>
          <button className="w-full py-3 text-lg font-semibold text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-100">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}
