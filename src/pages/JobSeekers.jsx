import React, { useState } from "react";
import { FaUsers, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Eye, Search, Copy, Edit, Trash2 } from "lucide-react";

const JobSeekers = () => {
  const [showEntries, setShowEntries] = useState(20);

  const jobSeekers = [
    {
      name: "Advance Search",
      lastModified: "29/07/2024",
      previews: 0,
      visibility: "Public",
    },
    {
      name: "Checkout login or Register",
      lastModified: "20/02/2025",
      previews: 0,
      visibility: "Public",
    },
    {
      name: "BuyWithAgreement",
      lastModified: "19/01/2024",
      previews: 0,
      visibility: "Public",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#111827] min-h-screen text-black dark:text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2b407f] dark:text-white mb-4">
          Application Page
        </h1>
        <div className="flex justify-between items-center">
          <div className="relative">
            <select
              value={showEntries}
              onChange={(e) => setShowEntries(e.target.value)}
              className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded appearance-none pr-8"
            >
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <Link to="/add-application">
            <button className="bg-[#2b407f] text-white font-bold px-4 py-2 rounded hover:bg-[#2b406f] dark:hover:bg-[#6AA6D0]">
              Add Application
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Last Modified</th>
              <th className="p-2 text-left">Previews</th>
              <th className="p-2 text-left">Visibility</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobSeekers.map((seeker, index) => (
              <tr key={index} className="border-b border-gray-300 dark:border-gray-600">
                <td className="p-2 text-[#2b407f] dark:text-[#6AA6D0] font-semibold">{seeker.name}</td>
                <td className="p-2">{seeker.lastModified}</td>
                <td className="p-2 text-center">
                  <button className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    <Search size={18} />
                  </button>
                </td>
                <td className="p-2 text-center">
                  <button className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    <Eye size={18} />
                  </button>
                </td>
                <td className="p-2 flex space-x-2 justify-center">
                  <button className="cursor-pointer text-[#f5f5f5] bg-[#9ca3af] dark:bg-gray-700 rounded font-semibold px-2 pb-0.5 hover:bg-[#8c929e] dark:hover:bg-gray-600 flex items-center gap-1">
                    <Copy size={16} /> Copy
                  </button>
                  <button className="cursor-pointer text-[#f5f5f5] bg-[#9ca3af] dark:bg-gray-700 rounded font-semibold px-2 pb-0.5 hover:bg-[#8c929e] dark:hover:bg-gray-600 flex items-center gap-1">
                    <Edit size={16} /> Edit
                  </button>
                  <button className="cursor-pointer text-[#f5f5f5] bg-[#9ca3af] dark:bg-gray-700 rounded font-semibold px-2 pb-0.5 hover:bg-[#8c929e] dark:hover:bg-gray-600 flex items-center gap-1">
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobSeekers;