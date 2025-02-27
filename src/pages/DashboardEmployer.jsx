import React, { useState } from "react";
import {
  FaUsers,
  FaInfoCircle,
  FaUserPlus,
  FaUserCheck,
  FaEllipsisV,
  FaExternalLinkAlt,
  FaUserCircle,
} from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";

const DashboardEmployer = () => {
  const [openPopup, setOpenPopup] = useState({
    recentlyHiring: null,
    interviewerBoard: null,
  });

  const handlePopupToggle = (table, index) => {
    setOpenPopup((prev) => ({
      ...prev,
      [table]: prev[table] === index ? null : index,
    }));
  };

  const popupOptions = [
    "View on careers page",
    "Archive job posting",
    "Edit job posting",
    "Make a copy",
    "Delete job posting",
  ];

  return (
    <div className="bg-white dark:bg-[#1A1A1A] min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Chats Card */}
          <div
            className="bg-white dark:bg-[#2A2A2A] p-4 rounded-lg shadow-md"
            style={{ width: "45%" }}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="mb-2">
                <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Chats
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  2 Unread Messages
                </p>
              </div>
              <div className="flex justify-center items-center space-x-6 mt-8 ">
                {/* Desktop and larger screens (default or md: and up) - 4 icons */}
                <div className="gap-4 flex md:flex ">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center md:block"
                    >
                      <FaUserCircle className="text-gray-500 dark:text-gray-400 text-2xl" />
                    </div>
                  ))}
                </div>

              </div>
              <a
                href="#"
                className="text-sm text-[#B69A0A] hover:underline mt-auto"
              >
                View messages
              </a>
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <div className="w-[400px] h-[250px] bg-white dark:bg-[#2A2A2A] p-4 rounded shadow-md text-center flex flex-col items-center">
              <div className="mt-2 w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full mb-2 flex items-center justify-center">
                <FaUserCircle className="text-gray-500 dark:text-gray-400 text-3xl" />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                John Doe
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manager
              </p>
              <a
                href="#"
                className="mt-8 p-2 text-sm text-gray-800 hover:underline mt-2 inline-flex items-center border dark:border-[#71747f] dark:text-white dark:hover:text-blue-500 dark:hover:border-blue-500 rounded transition"
              >
                <FaExternalLinkAlt title="Edit Profile" className="mr-1" />
                <span>Edit Profile</span>
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Last updated: February 26, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-row gap-3 bg-light-gray dark:bg-[#303980] p-4 rounded shadow">
          <FaUserPlus className="text-dark-blue text-3xl mb-2 dark:text-white" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Jobs Post
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              880
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-light-gray dark:bg-[#303980] p-4 rounded shadow">
          <FaRectangleXmark className="text-dark-blue text-3xl mb-2 dark:text-white" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Jobs Closed
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              1289
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-light-gray dark:bg-[#303980] p-4 rounded shadow">
          <FaUsers className="text-dark-blue text-3xl mb-2 dark:text-white" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Candidates
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              2509
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-light-gray dark:bg-[#303980] p-4 rounded shadow">
          <FaUserCheck className="text-dark-blue text-3xl mb-2 dark:text-white" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Got Hired
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              580
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Recently Hiring
        </h2>
        <div className="bg-light-gray dark:bg-[234821] p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-bold text-gray-600 dark:text-gray-300">
                <th className="p-2"></th> {/* Checkbox column */}
                <th className="p-2 ">Job Title</th>
                <th className="p-2">Department</th>
                <th className="p-2">Interviewer</th>
                <th className="p-2">Shortlisted</th>
                <th className="p-2">RW</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-800 dark:text-white">
                <td className="p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 text-center">UI/UX Designer</td>
                <td className="p-2 text-center">Design</td>
                <td className="p-2 text-center flex justify-center items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </td>
                <td className="p-2 text-center">30</td>
                <td className="p-2 text-center">12</td>
                <td className="p-2 flex items-center justify-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                </td>
                <td className="p-2 relative ">
                  <FaEllipsisV
                    onClick={() => handlePopupToggle("recentlyHiring", 0)}
                    className="cursor-pointer text-gray-600 dark:text-gray-300"
                  />
                  {openPopup.recentlyHiring === 0 && (
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
            </tbody>
          </table>
        </div>
        <button className="mt-2 bg-gold text-white px-4 py-2 rounded shadow hover:bg-opacity-90">
          View More
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Interviewer Board
        </h2>
        <div className="bg-light-gray dark:bg-[234821] p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-bold text-gray-600 dark:text-gray-300">
                <th className="p-2"></th> {/* Checkbox column */}
                <th className="p-2">Name</th>
                <th className="p-2">Expertise</th>
                <th className="p-2">Department</th>
                <th className="p-2">Type</th>
                <th className="p-2">Fees</th>
                <th className="p-2">Rating</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-800 dark:text-white">
                <td className="p-2">
                  <input type="checkbox" />
                </td>
                <td className="p-2 text-center">John</td>
                <td className="p-2 text-center">Communication</td>
                <td className="p-2 text-center">Design</td>
                <td className="p-2 text-center">
                  <FaExternalLinkAlt />
                </td>
                <td className="p-2 text-center">$2500</td>
                <td className="p-2 text-center">⭐</td>
                <td className="p-2 relative">
                  <FaEllipsisV
                    onClick={() => handlePopupToggle("interviewerBoard", 0)}
                    className="cursor-pointer text-gray-600 dark:text-gray-300"
                  />
                  {openPopup.interviewerBoard === 0 && (
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
            </tbody>
          </table>
        </div>
        <button className="mt-2 bg-gold text-white px-4 py-2 rounded shadow hover:bg-opacity-90">
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Growth
          </h2>
          <div className="bg-white dark:bg-[111827] p-4 rounded shadow">
            <div className="h-48 bg-gray-200 dark:bg-[111827]"></div>{" "}
            {/* Placeholder for Growth graph */}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-light-gray dark:bg-[234821] p-4 rounded shadow">
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300">
                Top Research
              </h3>
              <p className="text-sm text-gray-800 dark:text-white">
                Placeholder
              </p>
            </div>
            <div className="bg-light-gray dark:bg-[234821] p-4 rounded shadow">
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300">
                Top Year
              </h3>
              <p className="text-sm text-gray-800 dark:text-white">2023</p>
            </div>
            <div className="bg-light-gray dark:bg-[234821] p-4 rounded shadow">
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300">
                Top Buyer
              </h3>
              <p className="text-sm text-gray-800 dark:text-white">Company X</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Top States
          </h2>
          <div className="bg-white dark:bg-[111827] p-4 rounded shadow">
            <div className="h-48 bg-gray-200 dark:bg-[111827]"></div>{" "}
            {/* Placeholder for Top States graph */}
          </div>
          <div className="mt-4">
            <div className="bg-light-gray dark:bg-[234821] p-4 rounded shadow">
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                New Deals
              </h3>
              <ul className="text-sm text-gray-800 dark:text-white">
                <li className="flex items-center mb-2">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Echofy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Zero mega
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmployer;
