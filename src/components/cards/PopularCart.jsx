import React from "react";
import jobListings from "../../data/mockData"; 

export default function PopularCart() {
  return (
    <>
      {jobListings.slice(0, 3).map((jobData, index) => (
        <div
          key={index}
          className="relative block rounded-tr-3xl border border-gray-100">
          <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
            {jobData.publishedDate}
          </span>
          <img
            src={jobData.imageUrl}
            alt={jobData.companyName}
            className="h-80 w-full rounded-tr-3xl object-cover"
          />
          <div className="p-4 text-start">
            <strong className="text-xl font-medium text-gray-900">
              {jobData.companyName}
            </strong>
            <p className="mt-2 text-pretty text-gray-700 line-clamp-2">
              {jobData.companyDescription}
            </p>
            <span className="mt-4 block text-center  rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
              Learn More
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
