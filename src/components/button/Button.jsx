import React from "react";

export default function Button({ text, onClick, color }) {
  const defaultColorClasses = "bg-primary hover:bg-primary-hover";

  const colorClasses = color || defaultColorClasses;
  return (
    <button
      onClick={onClick}
      className={`${colorClasses} text-white px-6 py-3 z-20 rounded-[6px] transition-colors flex items-center`}>
      {text}
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
  );
}
