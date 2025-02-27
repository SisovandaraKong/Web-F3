import React, { useState } from "react";
import {
  FaUsers,
  FaUserPlus,
  
  FaUserCheck,
  FaEllipsisV,
} from "react-icons/fa";
import {FaRectangleXmark  } from "react-icons/fa6";
const JobPosting = () => {
  const [openPopup, setOpenPopup] = useState({});

  const handlePopupToggle = (index) => {
    setOpenPopup((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const popupOptions = [
    "View on careers page",
    "Archive job posting",
    "Edit job posting",
    "Make a copy",
    "Delete job posting",
  ];

  const jobPostings = [
    { title: "IT Manager", department: "IT", location: "Phnom Penh", createdBy: "Marinet", activeApp: 10, status: "Active" },
    { title: "Customer Service", department: "Client", location: "Phnom Penh", createdBy: "Marinet", activeApp: 20, status: "Inactive" },
    { title: "Designer", department: "IT", location: "Phnom Penh", createdBy: "Marinet", activeApp: 30, status: "Active" },
    { title: "Programmer", department: "IT", location: "Phnom Penh", createdBy: "Marinet", activeApp: 15, status: "Active" },
    { title: "Network", department: "IT", location: "Phnom Penh", createdBy: "Marinet", activeApp: 5, status: "Inactive" },
  ];

  return (
    <div className="bg-white dark:bg-[#1A1A1A] min-h-screen flex">
      

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Job Postings
          </h1>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 dark:text-blue-400 underline">
              View Careers page
            </a>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search"
                className="p-2 rounded bg-gray-200 dark:bg-[#2A2A2A] text-gray-800 dark:text-white"
              />
              <button className="bg-[#EAB308] text-white px-4 py-2 rounded hover:bg-[#DEB229]">
                + Job Posting
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <button className="bg-gray-200 dark:bg-[#2A2A2A] text-gray-800 dark:text-white px-4 py-2 rounded flex items-center">
            Filter <span className="ml-2">≡</span>
          </button>
        </div>

        <div className="bg-white dark:bg-[#2A2A2A] p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-bold text-gray-600 dark:text-gray-300">
                <th className="p-2">Job Posting</th>
                <th className="p-2">Department</th>
                <th className="p-2">Location</th>
                <th className="p-2">Created by</th>
                <th className="p-2">Active App</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobPostings.map((job, index) => (
                <tr key={index} className="text-gray-800 dark:text-white">
                  <td className="p-2 text-center">{job.title}</td>
                  <td className="p-2 text-center">{job.department}</td>
                  <td className="p-2 text-center">{job.location}</td>
                  <td className="p-2 text-center">{job.createdBy}</td>
                  <td className="p-2 text-center">{job.activeApp}</td>
                  <td className="p-2 text-center flex items-center justify-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-1 ${
                        job.status === "Active" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    {job.status}
                  </td>
                  <td className="p-2 relative">
                    <FaEllipsisV
                      onClick={() => handlePopupToggle(index)}
                      className="cursor-pointer text-gray-600 dark:text-gray-300"
                    />
                    {openPopup[index] && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded z-10">
                        <ul>
                          {popupOptions.map((option, idx) => (
                            <li
                              key={idx}
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b last:border-b-0 text-gray-800 dark:text-white"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default JobPosting;