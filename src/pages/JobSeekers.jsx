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
    <div className="bg-white  min-h-screen flex">
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-950 mb-4">
            Application Page
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <select
                value={showEntries}
                onChange={(e) => setShowEntries(e.target.value)}
                className="p-2 rounded bg-gray-200  text-dark-blue"
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

        <div className="bg-gray-100 p-4 rounded shadow">
          <table className="w-full text-sm ">
            <thead>
              <tr className="font-bold text-dark-blue border-b-1">
                <th className="p-2">Name</th>
                <th className="p-2">Last Modified</th>
                <th className="p-2">Previews</th>
                <th className="p-2">Visibility</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobSeekers.map((seeker, index) => (
                <tr key={index} className="text-dark-blue border-b-1">
                  <td className="p-2 text-center">{seeker.name}</td>
                  <td className="p-2 text-center">{seeker.lastModified}</td>
                  <td className="p-2 text-center">
                    <button className="text-dark-blue hover:text-gray-800">
                      <Search size={18} />
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    <button className="text-dark-blue hover:text-gray-800">
                      <Eye size={18} />
                    </button>
                  </td>
                  <td className="p-2 text-center flex justify-center space-x-2">
                    <button className="bg-gray-300 text-dark-blue px-2 py-1 rounded hover:bg-gray-400 flex items-center gap-1">
                      <Copy size={16} /> Copy
                    </button>
                    <button className="bg-gray-300 text-dark-blue px-2 py-1 rounded hover:bg-gray-400 flex items-center gap-1">
                      <Edit size={16} /> Edit
                    </button>
                    <button className="bg-gray-300 text-dark-blue px-2 py-1 rounded hover:bg-gray-400 flex items-center gap-1">
                      <Trash2 size={16} /> Delete
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
