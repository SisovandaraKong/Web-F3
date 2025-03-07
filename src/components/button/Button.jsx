import React from "react";

export default function Button({ text, onClick, color }) {
  const defaultColorClasses = "bg-primary hover:bg-primary-hover";

  const colorClasses = color || defaultColorClasses;
  return (
    <button
      onClick={onClick}
      className={`${colorClasses} text-white px-[17px] py-[9px] z-20 rounded-[6px] transition-colors flex items-center`}>
      {text}
    </button>
  );
}
