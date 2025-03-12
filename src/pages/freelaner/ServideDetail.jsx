import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetAllServicesQuery,
  useGetAllUsersQuery,
} from "../../feature/service/serviceSlde";

export default function ServiceDetail() {
  const { id } = useParams();
  const { data: serviceData, isLoading, isError } = useGetAllServicesQuery();
  const { data: userData } = useGetAllUsersQuery();

  console.log("All Users in Services:", userData);

  const users = userData?.data?.content || [];
  const services = serviceData?.content || [];

  // Find the matching service by ID
  const service = services.find((item) => String(item.id) === String(id));

  // Find the user that matches service.userId
  const user = users.find(
    (item) => String(item.id) === String(service?.userId)
  );

  console.log("Data Service in Service Detail:", services);
  console.log("Matched Service:", service);
  console.log("Matched User:", user);

  if (isLoading)
    return (
      <p className="text-center text-gray-500">Loading service details...</p>
    );

  if (isError || !service)
    return <p className="text-center text-red-500">Failed to load service</p>;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <img
              src={
                service.jobImages[0] ||
                "https://i.pinimg.com/originals/4f/7e/ab/4f7eab8b98913e658391c54b57980e68.gif"
              }
              className="rounded object-contain"
              alt={service.title}
            />
          </div>
          <div>
            <div className="max-w-lg md:max-w-none">
              <div>
                <img
                  src={
                    service.jobImages.length > 0
                      ? service.jobImages[0]
                      : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  className="h-8 w-8 rounded-full object-cover bg-gray-200 dark:bg-gray-700"
                  alt="service logo"
                />
              </div>
              <p className="my-2 text-gray-700">{service.category.name}</p>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {service.title}
              </h2>
              <p className="my-2 text-gray-700">{service.description}</p>
              <span className="whitespace-nowrap rounded-md border border-secondary px-2.5 py-0.5 text-sm mt-4 text-primary">
                {service.status}
              </span>

              {/* Render User Info */}
              {user ? (
                <div className="mt-4">
                  <p className="text-gray-700">
                    <strong>Posted by:</strong> {user.fullName}
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                </div>
              ) : (
                <p className="text-red-500 mt-4">User not found</p>
              )}

              <button className="text-white px-[17px] text-center py-[9px] z-20 rounded-[6px] transition-colors flex items-center bg-primary mt-4">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
