import React from "react";
import { IoMdTime } from "react-icons/io";

export default function CardJob() {
  return (
    <>
      <div className="max-w-sm rounded-lg bg-white dark:bg-black p-4 shadow-lg">
        <div className="relative mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" className="h-8 w-8 rounded-full object-cover bg-gray-200 dark:bg-gray-700" alt="profile" />
            <div>
              <h2 className="text-xl font-bold text-black dark:text-white">Headline</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Subhead</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className="h-5 w-5 rounded-full object-cover bg-gray-200 dark:bg-gray-700" alt="company" />
          </div>
        </div>

        <img src="https://images.unsplash.com/photo-1560264280-88b68371db39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMHBsYWNlfGVufDB8fDB8fHww" className="mb-4 object-cover aspect-video w-full rounded-lg bg-gray-200 dark:bg-gray-700" alt="jobImage" />

        <div className="mb-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Title</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Subtitle</p>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Please add your content here. Keep it short and simple.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1 text-sm text-black dark:text-white">
            Tag 1
          </span>
          <span className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1 text-sm text-black dark:text-white">
            Tag 2
          </span>
          <span className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1 text-sm text-black dark:text-white">
            Tag 3
          </span>
          <span className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1 text-sm text-black dark:text-white">
            Tag 4
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoMdTime className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">01/01/2025</span>
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
    </>
  );
}