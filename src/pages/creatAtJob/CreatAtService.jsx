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
        imageUrls, // Now correctly formatted as an array
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
      <div className="max-w-4xl mx-auto p-8 bg-red-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-700">Error Loading Categories</h2>
        <p className="mt-2">Please refresh the page or try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Create Service</h2>
      
      {createError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-md">
          <p className="text-red-700">
            Error: {createError.data?.message || createError.message || "Something went wrong"}
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">Category:</label>
          {isLoading ? (
            <p className="text-gray-500 italic">Loading categories...</p>
          ) : (
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {Array.isArray(categories) ? (
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
          <label className="block text-lg font-semibold text-gray-700">Image URLs (comma-separated):</label>
          <input
            type="text"
            value={imageUrls.join(", ")}
            onChange={(e) => setImageUrls(e.target.value.split(",").map(url => url.trim()))}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || isCreating}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {isLoading || isCreating ? "Processing..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default CreateServicePage;