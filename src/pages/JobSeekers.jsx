import React, { useState } from "react";
import { FaUsers, FaUserPlus, FaUserCheck } from "react-icons/fa";
import {FaRectangleXmark  } from "react-icons/fa6";
import { Link } from "react-router-dom";
const JobSeekers = () => {
  const [showEntries, setShowEntries] = useState(20);

  const jobSeekers = [
    { name: "Advance Search", lastModified: "29/07/2024", previews: 0, visibility: "Public" },
    { name: "Checkout login or Register", lastModified: "20/02/2025", previews: 0, visibility: "Public" },
    { name: "BuyWithAgreement", lastModified: "19/01/2024", previews: 0, visibility: "Public" },
  ];

  return (
    <div className="bg-white dark:bg-[#1A1A1A] min-h-screen flex">

      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0A2473] dark:text-white mb-4">
            Application Page
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <select
                value={showEntries}
                onChange={(e) => setShowEntries(e.target.value)}
                className="p-2 rounded bg-gray-200 dark:bg-[#2A2A2A] text-gray-800 dark:text-white"
              >
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <Link to="/add-application">
            <button className="bg-[#0A2473] text-white px-4 py-2 rounded hover:bg-[#2B407F]">
              Add Application
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-[#2A2A2A] p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-bold text-gray-600 dark:text-gray-300">
                <th className="p-2">Name</th>
                <th className="p-2">Last Modified</th>
                <th className="p-2">Previews</th>
                <th className="p-2">Visibility</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobSeekers.map((seeker, index) => (
                <tr key={index} className="text-gray-800 dark:text-white">
                  <td className="p-2 text-center">{seeker.name}</td>
                  <td className="p-2 text-center">{seeker.lastModified}</td>
                  <td className="p-2 text-center">
                    <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                      <span role="img" aria-label="preview">🔍</span>
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                      <span role="img" aria-label="visibility">👁️</span>
                    </button>
                  </td>
                  <td className="p-2 text-center flex justify-center space-x-2">
                    <button className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-white px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600">
                      Copy
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-white px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600">
                      Edit
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-white px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;