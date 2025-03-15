import React, { useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";
import { useCreateJobMutation } from "../../feature/job/jobSlide";
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide"; // Corrected import
import { useGetAllCategoriesQuery } from "../../feature/service/serviceSlde";

const CreateJob = () => {
  const [createService, { isLoading: isCreating, error: createError }] =
    useCreateJobMutation();
  const [uploadImage, { isLoading: isUploading, error: uploadError }] =
    useUploadImageMutation(); // Corrected hook
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useGetAllCategoriesQuery();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categoryId: "",
    budget: "",
    jobImages: [], // This will store the URLs of uploaded images
    status: "OPEN", // Default status
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image uploads
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    try {
      const uploadedUrls = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file); // Use the field name expected by your backend

        // Upload the file using the upload hook
        const uploadResponse = await uploadImage(formData).unwrap();

        if (uploadResponse && uploadResponse.uri) {
          uploadedUrls.push(uploadResponse.uri); // Store the URI
        }
      }

      // Update the form data with the new image URLs
      setFormData((prevData) => ({
        ...prevData,
        jobImages: [...prevData.jobImages, ...uploadedUrls],
      }));
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.title ||
      !formData.description ||
      !formData.categoryId ||
      !formData.budget
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      // Call the createService mutation with the form data
      const response = await createService(formData).unwrap();
      console.log("Service created successfully:", response);

      // Reset the form after successful submission
      setFormData({
        title: "",
        description: "",
        categoryId: "",
        budget: "",
        jobImages: [],
        status: "OPEN",
      });

      // Optionally, show a success message or redirect the user
      alert("Service created successfully!");
    } catch (error) {
      console.error("Error creating service:", error);
      // Optionally, show an error message to the user
      alert("Failed to create service. Please try again.");
    }
  };

  return (
    <div className="min-h-screen px-[120px] bg-gray-50 dark:bg-gray-900 py-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Create a New Service
        </h1>
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 grid grid-cols-2 gap-20">
            <div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter service title"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Describe your service"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select
                  name="categoryId"
                  id="categoryId"
                  value={formData.categoryId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                  disabled={isCategoriesLoading} // Disable dropdown while loading categories
                >
                  <option value="" disabled>
                    {isCategoriesLoading
                      ? "Loading categories..."
                      : "Select a category"}
                  </option>
                  {categories?.data?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {categoriesError && (
                  <p className="mt-2 text-sm text-red-500">
                    Error loading categories. Please try again.
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter budget"
                  required
                />
              </div>

              {/* Status Dropdown */}
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required>
                  <option value="OPEN">Open</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="dropzone-file"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Job Images
              </label>

              {/* Styled Dropzone with Image Previews */}
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
                    formData.jobImages.length > 0 ? "p-2" : ""
                  }`}>
                  {/* Show image previews if images are uploaded */}
                  {formData.jobImages.length > 0 ? (
                    <div className="grid gap-2 w-full h-full overflow-y-auto">
                      {formData.jobImages.map((imageUrl, index) => (
                        <div key={index} className="relative">
                          <img
                            src={imageUrl}
                            alt={`Uploaded ${index}`}
                            className="w-full h-57 object-contain rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              // Remove the image from the list
                              setFormData((prevData) => ({
                                ...prevData,
                                jobImages: prevData.jobImages.filter(
                                  (_, i) => i !== index
                                ),
                              }));
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
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
                    disabled={isUploading}
                    accept=".jpg,.jpeg,.png,.gif"
                  />
                </label>
              </div>

              {isUploading && (
                <p className="mt-2 text-sm text-gray-500">
                  Uploading images...
                </p>
              )}
              {uploadError && (
                <p className="mt-2 text-sm text-red-500">
                  Error uploading images. Please try again.
                </p>
              )}
              <div className="flex justify-start mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition"
                  disabled={isCreating || isUploading}>
                  <FaSave className="mr-2" />
                  {isCreating ? "Posting Job..." : "Post Job"}
                </button>
              </div>
            </div>

            {createError && (
              <div className="mt-4 text-red-500 text-sm">
                Error: {createError.message || "Failed to create service."}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
