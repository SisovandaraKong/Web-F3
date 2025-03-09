import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddApplication = () => {
  const [formData, setFormData] = useState({
    pageName: "",
    pageURL: "",
    visibility: "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto sm:px-8 py-8 ">
        <h1 className="text-3xl font-bold text-[#0A2473] mb-8">
          Add Application Page
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Page Name</label>
            <input
              type="text"
              name="pageName"
              value={formData.pageName}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0A2473]"
              placeholder="Page Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Page URL</label>
            <input
              type="text"
              name="pageURL"
              value={formData.pageURL}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0A2473]"
              placeholder="e.g. page-name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Visibility in Store
            </label>
            <select
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 focus:outline-none focus:border-[#0A2473] appearance-none"
            >
              <option value="Public">
                Public: shown to all eligible users
              </option>
              <option value="Private">Private: restricted access</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              className="bg-transparent text-[#0A2473] px-4 py-2 rounded border border-[#0A2473] hover:bg-gray-100"
            >
              <Link to={`/application`}>
                Cancel
              </Link>
            </button>
            <button
              type="button"
              className="bg-transparent text-[#0A2473] px-4 py-2 rounded border border-[#0A2473] hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              type="submit"
              className="bg-[#0A2473] text-white px-4 py-2 rounded hover:bg-blue-900"
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
