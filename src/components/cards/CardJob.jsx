import React from "react";
import { IoMdTime } from "react-icons/io";

export default function CardJob() {
  return (
    <>
      <div className="max-w-sm rounded-lg bg-white p-4 shadow-lg">
        <div className="relative mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="#" className="h-8 w-8 rounded-full bg-gray-200" alt="profile" />
            <div>
              <h2 className="text-xl font-bold">Headline</h2>
              <p className="text-sm text-gray-500">Subhead</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src="#" className="h-5 w-5 rounded-full bg-gray-200" alt="company" />
          </div>
        </div>

        <img src="#"  className="mb-4 aspect-video w-full rounded-lg bg-gray-200" alt="jobImage" />

        <div className="mb-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Title</h3>
              <p className="text-sm text-gray-500">Subtitle</p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Please add your content here. Keep it short and simple. And smile :)
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-gray-200 px-3 py-1 text-sm">
            Tag 1
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-sm">
            Tag 2
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-sm">
            Tag 3
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-sm">
            Tag 4
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoMdTime className="text-gray-500" />
            <span className="text-sm text-gray-500">01/01/2025</span>
          </div>
          <div className="flex gap-2">
            <button className="rounded-md px-4 py-2 text-sm border font-medium text-gray-600 hover:bg-gray-100">
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
