import React, { useState } from "react";
import {
  FaSearch,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ApplicationPage = () => {
  const [applications, setApplications] = useState([
    { name: "Advance Search", lastModified: "29/07/2024" },
    { name: "Checkout login or Register", lastModified: "20/02/2025" },
    { name: "BuyWithAgreement", lastModified: "19/01/2024" },
  ]);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(null);

  const handleDeleteClick = (index) => {
    setShowDeleteConfirm(index);
  };

  const confirmDelete = (index) => {
    setApplications((prev) => prev.filter((_, i) => i !== index));
    setShowDeleteConfirm(null);
    setShowDeleteSuccess(index);
    setTimeout(() => setShowDeleteSuccess(null), 2000);
  };
  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };
  return (
    <div className="bg-white min-h-screen text-black p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2b407f] mb-4">Application Page</h1>
        <div className="flex justify-between items-center">
          <div className="relative">
            <select className="bg-gray-200 text-black p-2 rounded appearance-none pr-8">
              <option>20</option>
              <option>10</option>
              <option>50</option>
            </select>
          </div>
          <Link to={`/add-application`}>
          <button className="bg-[#2b407f] text-white font-bold px-4 py-2 rounded hover:bg-[#2b406f]">
            Add Application
          </button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Last Modified</th>
              <th className="p-2 text-left">Previews</th>
              <th className="p-2 text-left">Visibility</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-2 text-[#2b407f] font-semibold">{app.name}</td>
                <td className="p-2">{app.lastModified}</td>
                <td className="p-2 text-center">
                  <FaSearch className="cursor-pointer text-gray-600 hover:text-gray-800" />
                </td>
                <td className="p-2 text-center">
                  <FaEye className="cursor-pointer text-gray-600 hover:text-gray-800" />
                </td>
                <td className="p-2 flex space-x-2 justify-center">
                  <button
                    className="cursor-pointer text-[#f5f5f5] bg-[#9ca3af] rounded font-semibold px-2 pb-0.5 hover:bg-[#8c929e]"
                  >
                    Copy
                  </button>
                  <button
                    className="cursor-pointer text-[#f5f5f5] bg-[#9ca3af] rounded font-semibold px-2 pb-0.5 hover:bg-[#8c929e]"
                  > <Link to="/edit-application">Edit</Link></button>
                  <button
                    onClick={() => handleDeleteClick(index)}
                    className="cursor-pointer text-[#f5f5f5] bg-[#9ca3af] rounded font-semibold px-2 pb-0.5 hover:bg-[#8c929e]"
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteConfirm !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-red-600 text-white p-4 rounded shadow-lg flex flex-col items-center relative">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200"
              onClick={cancelDelete}
            >
              ✕
            </button>
            <p className="mb-4">Are you sure? Deleting an entry cannot be undone.</p>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 text-white"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 text-white"
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
          <div className="bg-green-600 text-white p-4 rounded shadow-lg flex items-center relative">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200"
              onClick={() => setShowDeleteSuccess(null)}
            >
              ✕
            </button>
            <p>Item deleted!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;