import React, { useState } from "react";
import {
  FaUsers,
  FaUserPlus,
  FaUserCheck,
  FaEllipsisH,
  FaSlidersH,
  FaSearch,
} from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";

const JobPosting = () => {
  const [openPopup, setOpenPopup] = useState({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(null);
  const [jobPostings, setJobPostings] = useState([
    {
      title: "IT Manager",
      department: "IT",
      location: "Phnom Penh",
      createdBy: "Marinet",
      activeApp: 10,
      status: "Active",
    },
    {
      title: "Customer Service",
      department: "Client",
      location: "Phnom Penh",
      createdBy: "Marinet",
      activeApp: 20,
      status: "Inactive",
    },
    {
      title: "Designer",
      department: "IT",
      location: "Phnom Penh",
      createdBy: "Marinet",
      activeApp: 30,
      status: "Active",
    },
    {
      title: "Programmer",
      department: "IT",
      location: "Phnom Penh",
      createdBy: "Marinet",
      activeApp: 15,
      status: "Active",
    },
    {
      title: "Network",
      department: "IT",
      location: "Phnom Penh",
      createdBy: "Marinet",
      activeApp: 5,
      status: "Inactive",
    },
  ]);

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

  const handleDeleteClick = (index) => {
    setShowDeleteConfirm(index);
    setOpenPopup((prev) => ({ ...prev, [index]: false }));
  };

  const confirmDelete = (index) => {
    setJobPostings((prev) => prev.filter((_, i) => i !== index));
    setShowDeleteConfirm(null);
    setShowDeleteSuccess(index);
    setTimeout(() => setShowDeleteSuccess(null), 2000);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  return (
    <div className="bg-white min-h-screen flex">
      <div className="flex-1 p-6">
        <div className="mb-8 mt-8">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-3xl font-bold text-[#2b407f] mb-4">
                Job Postings
              </h1>
              <a href="#" className="text-[#2b407f] flex items-center gap-1">
                <PiNotePencil />
                View Careers page
              </a>
            </div>
            <div className="flex space-x-4 items-center">
              <button className="flex items-center bg-gray-400 text-[#2b407f] font-bold px-4 py-2 rounded hover:bg-gray-500">
                Search <FaSearch className="ml-2" />
              </button>
              <button className="bg-yellow-600 text-[#2b407f] font-bold px-4 py-2 rounded hover:bg-[#DEB229]">
                + Job Posting
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <button className="bg-[#d9d9d9] text-[#2b407f] font-bold px-4 py-2 rounded flex items-center">
            <FaSlidersH className="mr-2" /> Filter
          </button>
        </div>

        <div className="bg-[#f5f5f5] p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-bold text-dark-blue border-b-1">
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
                <tr key={index} className="text-dark-blue border-b-1">
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
                    <FaEllipsisH
                      onClick={() => handlePopupToggle(index)}
                      className="cursor-pointer text-dark-blue"
                    />
                    {openPopup[index] && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-200 shadow-lg rounded z-10">
                        <ul>
                          {popupOptions.map((option, idx) => (
                            <li
                              key={idx}
                              className="p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 text-dark-blue"
                              onClick={
                                option === "Delete job posting"
                                  ? () => handleDeleteClick(index)
                                  : null
                              }
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

        {showDeleteConfirm !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-[#9e5342] text-white p-4 rounded shadow-lg flex flex-col items-center relative">
              <button
                className="absolute ml-2 top-4 right-3 text-white hover:text-gray-200"
                onClick={cancelDelete}
              >
                ✕
              </button>
              <p className="mb-4">
                Are you sure? Deleting an<br/>entry cannot be undone.
              </p>
              <div className="flex space-x-4">
                <button
                  className="bg-[#9e5342] px-4 py-2 text-sm rounded hover:bg-[#9f634a] text-white border border-white"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#9e5342] px-4 py-2 text-sm rounded hover:bg-[#9f634a] text-white border border-white"
                  onClick={() => confirmDelete(showDeleteConfirm)}
                >
                  Delete anyway!
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteSuccess !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#439daa] text-white p-4 rounded shadow-lg flex items-center relative pl-10 pr-8">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-200"
              onClick={() => setShowDeleteSuccess(null)}
            >
              ✕
            </button>
            <p>Item deleted!</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default JobPosting;
