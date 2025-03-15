import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
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
    status: "OPEN",
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
      setFormData({
        ...formData,
        jobImages: [...formData.jobImages, ...uploadedUrls],
      });
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Create a New Service
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
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

            {/* Job Images */}
            <div>
              <label
                htmlFor="jobImages"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Job Images
              </label>
              <input
                type="file"
                name="jobImages"
                id="jobImages"
                onChange={handleImageUpload}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                multiple
                disabled={isUploading} // Disable input while uploading
                accept=".jpg,.jpeg,.png,.gif" // Restrict file types
              />
              {/* Display uploaded images */}
              <div className="mt-4 flex flex-wrap gap-2">
                {formData.jobImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Uploaded ${index}`}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                ))}
              </div>
              {/* Show uploading state */}
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
            </div>

            <input type="hidden" name="status" value={formData.status} />

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition"
                disabled={isCreating || isUploading}>
                <FaSave className="mr-2" />
                {isCreating ? "Saving..." : "Post Job   "}
              </button>
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
