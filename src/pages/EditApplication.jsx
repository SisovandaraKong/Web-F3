import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditApplication = () => {
  const [formData, setFormData] = useState({
    pageName: "MembershipRegister",
    pageURL: "http://localhost/MemberShip-Register",
    visibility: "Hidden",
    theme: "Use Store Default",
    pageTemplate: "Use Store Default",
    innerTemplate: "Use Store Default",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/application");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111827] p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0A2473] dark:text-white mb-6">
          Edit Application Page
        </h1>

        <div className="flex flex-row items-start">
          <div className="w-20 text-gray-700 dark:text-white mr-4 text-lg font-bold">Basic</div>

          <div className="flex-1">
            <div className="flex items-center mb-6">
              <span className="text-gray-700 dark:text-white text-lg font-bold bg-gray-300 dark:bg-gray-700 p-2 flex-1">
                SEO
              </span>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white mb-2">Page Name</label>
              <input
                type="text"
                name="pageName"
                value={formData.pageName}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:border-[#0A2473] dark:focus:border-[#0A2473]"
                placeholder="Page Name"
                required
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-700 dark:text-white mr-4">Page URL</label>
                <button
                  type="button"
                  className="text-[#0A2473] dark:text-[#6AA6D0] underline hover:text-blue-700 dark:hover:text-blue-400"
                >
                  Change
                </button>
              </div>
              <input
                type="text"
                name="pageURL"
                value={formData.pageURL}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:border-[#0A2473] dark:focus:border-[#0A2473]"
                placeholder="e.g. http://localhost/page-name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white mb-2">
                Visibility in Store
              </label>
              <select
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 dark:text-white focus:outline-none focus:border-[#0A2473] dark:focus:border-[#0A2473] appearance-none"
              >
                <option value="Hidden">Hidden</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white mb-2">Theme</label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 dark:text-white focus:outline-none focus:border-[#0A2473] dark:focus:border-[#0A2473] appearance-none"
              >
                <option value="Use Store Default">Use Store Default</option>
                <option value="Custom Theme 1">Custom Theme 1</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white mb-2">Page Template</label>
              <select
                name="pageTemplate"
                value={formData.pageTemplate}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 dark:text-white focus:outline-none focus:border-[#0A2473] dark:focus:border-[#0A2473] appearance-none"
              >
                <option value="Use Store Default">Use Store Default</option>
                <option value="Template 1">Template 1</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white mb-2">Inner Template</label>
              <select
                name="innerTemplate"
                value={formData.innerTemplate}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-gray-700 dark:text-white focus:outline-none focus:border-[#0A2473] dark:focus:border-[#0A2473] appearance-none"
              >
                <option value="Use Store Default">Use Store Default</option>
                <option value="Inner Template 1">Inner Template 1</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#0A2473] text-white px-4 py-2 rounded hover:bg-blue-900 dark:hover:bg-blue-700"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditApplication;