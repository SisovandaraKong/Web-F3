import React from "react";

const categories = [
  { name: "All", link: "category/all" },
  { name: "React JS", link: "category/react-js" },
  { name: "Redux", link: "category/redux" },
  { name: "UI Design", link: "category/ui-design" },
  { name: "User Experience", link: "category/user-experience" },
  { name: "Productivity", link: "category/productivity" },
  { name: "Game", link: "category/game" },
];

export const LeftTags = () => {
  return (
    <aside className="w-[278px] h-[216px] bg-white border-2 border-purple-50 rounded-lg p-4 shadow-md mt-2">
      <h2 className="text-lg font-bold text-gray-800">Categories</h2>
      <ul className="flex flex-wrap gap-2 mt-3">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              className="block text-xs px-3 py-1 border bg-blue-50 text-gray-800 rounded-md hover:bg-purple-200 transition duration-300"
              href={category.link}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
