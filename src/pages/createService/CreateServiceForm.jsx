import React, { useState } from "react";
import { useCreateServiceMutation } from "../../feature/service/serviceSlde";
import { useNavigate } from "react-router-dom";

export default function CreateServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const userId = "28f9345e-b6ab-4f56-a812-bf8d2d97f82f"; // Your user ID
  const [createService, { isLoading: isMutating, isError }] = useCreateServiceMutation();

  // Example categories (Replace with API call if categories are dynamic)
  const categories = [
    { id: "a752a89d-96dd-48ef-8a0f-02dd3666f124", name: "Data & AI" },
    { id: "1b46ada2-3936-4c2b-99ab-14b1c2054a18", name: "Backend" },
    { id: "2b58ed1b-863c-4240-b504-d4c5d24bb092", name: "Frontend" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      title,
      description,
      categoryId,
      status: "ACTIVE", // Hardcoded as per your specification
      imageUrls,
      userId, // Add your user ID here
    };

    try {
      // Call the mutation to create the service
      const result = await createService(payload).unwrap();
      // Navigate to the services page or reset the form after successful creation
      navigate("/services");
    } catch (err) {
      setError("Failed to create service");
      setLoading(false);
    }
  };

  const handleImageUrlChange = (e) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setImageUrls(urls);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white dark:bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-4">
        Create New Service
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black dark:text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-md text-black dark:text-white dark:bg-gray-800"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black dark:text-white">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-md text-black dark:text-white dark:bg-gray-800"
            rows="4"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black dark:text-white">Category</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-md text-black dark:text-white dark:bg-gray-800"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image URLs */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black dark:text-white">Image URLs</label>
          <input
            type="text"
            value={imageUrls.join(",")}
            onChange={handleImageUrlChange}
            className="w-full px-4 py-2 mt-1 border rounded-md text-black dark:text-white dark:bg-gray-800"
            placeholder="Enter image URLs separated by commas"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-900 text-white rounded-md ${
            isMutating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isMutating}
        >
          {isMutating ? "Creating..." : "Create Service"}
        </button>
      </form>
    </div>
  );
}
