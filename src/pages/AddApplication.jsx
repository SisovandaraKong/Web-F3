import React, { useState } from "react";
import { FaUserPlus, FaUsers, FaUserCheck } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
const AddApplication = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    pageName: "",
    pageURL: "",
    visibility: "Public",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="bg-white dark:bg-[#1A1A1A] min-h-screen flex">
      

      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0A2473] dark:text-white mb-4">
            Add Application Page
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-[#2A2A2A] p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Page Name</label>
            <input
              type="text"
              name="pageName"
              value={formData.pageName}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Page Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Page URL</label>
            <input
              type="text"
              name="pageURL"
              value={formData.pageURL}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="e.g. page-name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Visibility in Store</label>
            <select
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              <option value="Public">Public: shown to all eligible users</option>
              <option value="Private">Private: restricted access</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              Edit
            </button>
            <button
              type="submit"
              className="bg-[#0A2473] text-white px-4 py-2 rounded hover:bg-[#2B407F]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplication;