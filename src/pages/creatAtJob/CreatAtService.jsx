import React, { useState, useEffect } from "react";
import { useCreateServiceMutation, useGetAllCategoriesQuery } from "../../feature/service/serviceSlde";

const CreateServicePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  
  const [createService, { isLoading: isCreating, error: createError }] = useCreateServiceMutation();
  const { data: categoryData, isLoading, error: categoriesError } = useGetAllCategoriesQuery();
  const categories = categoryData?.data || [];

  const [token, setToken] = useState("");

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log("Token In Create:", accessToken);
      setToken(accessToken || ""); 
    } catch (error) {
      console.error("Error retrieving token:", error);
      setToken("");
    }
  }, []);

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

      console.log("Submitting service data:", serviceData);
      
      const result = await createService(serviceData).unwrap();
      
      console.log("Service created successfully:", result);
      alert("Service created successfully!");

      setTitle("");
      setDescription("");
      setCategoryId("");
      setImageUrls([]);
    } catch (error) {
      console.error("Create service error:", error);

      let errorMessage = "Unknown error occurred";
      if (error.data?.message) {
        errorMessage = error.data.message;
      } else if (error.error) {
        errorMessage = error.error;
      } else if (error.message) {
        errorMessage = error.message;
      }

      alert(`Failed to create service: ${errorMessage}`);
    }
  };

  if (categoriesError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Categories</h2>
          <p className="text-gray-600">Something went wrong while fetching categories. Please refresh the page or try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create a New Service</h2>
        <p className="text-gray-500 text-center mb-8">Fill in the details below to add a new service.</p>

        {createError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md">
            <p className="text-red-700 text-sm font-medium">
              Error: {createError.data?.message || createError.message || "Something went wrong"}
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
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

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
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

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
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

          <div>
            <label htmlFor="imageUrls" className="block text-sm font-medium text-gray-700 mb-1">
              Image URLs <span className="text-red-500">*</span>
            </label>
            <input
              id="imageUrls"
              type="text"
              value={imageUrls.join(", ")}
              onChange={(e) => setImageUrls(e.target.value.split(",").map(url => url.trim()))}
              required
              placeholder="Enter URLs separated by commas (e.g., url1, url2)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">Separate multiple URLs with commas.</p>
          </div>

          <button
            type="submit"
            disabled={isLoading || isCreating}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading || isCreating ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Processing...
              </span>
            ) : (
              "Create Service"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateServicePage;