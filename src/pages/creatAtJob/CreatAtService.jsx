import React, { useState, useEffect } from "react";
import {
  useCreateServiceMutation,
  useGetAllCategoriesQuery,
} from "../../feature/service/serviceSlde";
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide";
import { FaTimes } from "react-icons/fa";

const CreateServicePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [uploadImage, { isLoading: isUploading, error: uploadError }] =
    useUploadImageMutation();
  const [createService, { isLoading: isCreating, error: createError }] =
    useCreateServiceMutation();
  const {
    data: categoryData,
    isLoading,
    error: categoriesError,
  } = useGetAllCategoriesQuery();
  const categories = categoryData?.data || [];

  const [token, setToken] = useState("");

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      setToken(accessToken || "");
    } catch (error) {
      console.error("Error retrieving token:", error);
      setToken("");
    }
  }, []);

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    try {
      const uploadedUrls = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);

        // Upload the file using the upload hook
        const uploadResponse = await uploadImage(formData).unwrap();

        if (uploadResponse && uploadResponse.uri) {
          uploadedUrls.push(uploadResponse.uri); // Store the URI
        }
      }

      // Update the form data with the new image URLs
      setImageUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Authentication token missing. Please log in.");
      return;
    }

    try {
      const serviceData = {
        title,
        description,
        categoryId: String(categoryId),
        status: "ACTIVE",
        imageUrls,
      };

      const result = await createService(serviceData).unwrap();
      alert("Service created successfully!");

      // Reset form state after successful submission
      setTitle("");
      setDescription("");
      setCategoryId("");
      setImageUrls([]);
    } catch (error) {
      console.error("Create service error:", error);
      let errorMessage =
        error.data?.message || error.message || "Unknown error occurred";
      alert(`Failed to create service: ${errorMessage}`);
    }
  };

  if (categoriesError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Categories
          </h2>
          <p className="text-gray-600">
            Something went wrong while fetching categories. Please refresh the
            page or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 ">
          Create a New Service
        </h2>
        <p className="text-gray-500 mb-8">
          Fill in the details below to add a new service.
        </p>

        {createError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md">
            <p className="text-red-700 text-sm font-medium">
              Error:{" "}
              {createError.data?.message ||
                createError.message ||
                "Something went wrong"}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {/* Title Input */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Service Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter service title"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Description Input */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Describe your service"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-y"
                  rows="4"
                />
              </div>

              {/* Category Select */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                {isLoading ? (
                  <div className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md text-gray-500 italic">
                    Loading categories...
                  </div>
                ) : (
                  <select
                    id="category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 appearance-none bg-white">
                    <option value="" disabled>
                      Select a category
                    </option>
                    {Array.isArray(categories) && categories.length > 0 ? (
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>No categories available</option>
                    )}
                  </select>
                )}
              </div>
            </div>
            {/* Image Upload Section */}
            <div className=" w-full">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                {/* Show image previews if images are uploaded */}
                {imageUrls.length > 0 ? (
                  <div className="grid gap-2 w-full h-full overflow-y-auto">
                    {imageUrls.map((imageUrl, index) => (
                      <div key={index} className="relative">
                        <img
                          src={imageUrl}
                          alt={`Uploaded ${index}`}
                          className="w-full h-57 object-contain rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImageUrls(
                              imageUrls.filter((_, i) => i !== index)
                            );
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                          <FaTimes className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Default dropzone content
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  multiple
                  accept=".jpg,.jpeg,.png,.gif"
                />
              </label>
              <button
                type="submit"
                disabled={isLoading || isCreating || isUploading}
                className=" px-4 py-3 mt-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all duration-200">
                {isLoading || isCreating ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0 0 8-8v8H4z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Create Service"
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
        </form>
      </div>
    </div>
  );
};

export default CreateServicePage;
