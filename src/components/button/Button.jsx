import React from "react";

export default function Button(text) {
  return (
    <>
      <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 z-20 rounded-full transition-colors flex items-center ">
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </>
  );
}
