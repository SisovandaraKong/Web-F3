import React from "react";
import { IoMdTime } from "react-icons/io";

export default function CardJob({ job }) {
  return (
    <div className="rounded-lg bg-white dark:bg-black p-4 shadow-lg">
      <div className="relative mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={
              job.imageUrl ||
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            className="h-8 w-8 rounded-full object-cover bg-gray-200 dark:bg-gray-700"
            alt="company logo"
          />
          <div>
            <h2 className="text-lg font-bold text-black dark:text-white">
              {job.companyName}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {job.companyType}
            </p>
          </div>
        </div>
      </div>

      <img
        src={
          job.imageUrl ||
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }
        className="mb-4 object-cover aspect-video w-full rounded-lg bg-gray-200 dark:bg-gray-700"
        alt="job banner"
      />

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {job.role}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {job.jobType}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {job.companyDescription}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1 text-sm text-black dark:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        {job.requirements.length > 2 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {job.requirements.slice(2).map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1 text-sm text-black dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoMdTime className="text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {job.publishedDate}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md px-4 py-2 text-sm border font-medium text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
            Details
          </button>
          <button className="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
