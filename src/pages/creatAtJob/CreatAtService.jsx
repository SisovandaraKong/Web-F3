import React, { useState } from "react";
import { useCreateServiceMutation } from "../../feature/service/serviceSlde";

const CreateServicePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [createService] = useCreateServiceMutation(); // The hook to call the mutation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sample service data (mock)
    const sampleServiceData = {
      title: title,
      description: description,
      categoryId: categoryId,
      status: "ACTIVE", // Default status
      imageUrls: [imageUrls], // Array of image URLs
    };

    // Assuming you already have the token stored in localStorage or cookies
    const token = localStorage.getItem("accessToken"); // Adjust based on your method of storing tokens

    if (!token) {
      alert("Authentication token missing. Please log in.");
      return;
    }

    try {
      // Send the request with the Authorization token in the header
      await createService({
        ...sampleServiceData,
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
      }).unwrap();

      alert("Service created successfully!");
      // Reset form after submission
      setTitle("");
      setDescription("");
      setCategoryId("");
      setImageUrls("");
    } catch (error) {
      console.error("Error creating service:", error);
      alert("Failed to create service: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Create Service</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Category ID:
          </label>
          <input
            type="text"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            value={imageUrls}
            onChange={(e) => setImageUrls(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Create Service
        </button>
      </form>
    </div>
  );
};

export default CreateServicePage;
