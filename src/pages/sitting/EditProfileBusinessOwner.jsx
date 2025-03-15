import React, { useState } from "react";
import { useEditeProfileBusinessOwnerMutation } from "../../feature/edit/editeSilde";
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide";

const EditProfileBusinessOwner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    profileImageUrl: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
  });

  const [editeProfileBusinessOwner, { loading }] =
    useEditeProfileBusinessOwnerMutation();
  const [uploadImage, { isLoading: isUploading, error: uploadError }] =
    useUploadImageMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
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
        jobImages: [...formData.profileImageUrl, ...uploadedUrls],
      });
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editeProfileBusinessOwner(formData).unwrap();
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <input
        accept=".jpg,.jpeg,.png,.gif"
        type="file"
        onChange={handleImageUpload}
        disabled={isUploading}
      />
      {isUploading && <p>Uploading image...</p>}
      {uploadError && <p>Error uploading image: {uploadError.message}</p>}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="url"
        name="companyWebsite"
        value={formData.companyWebsite}
        onChange={handleChange}
        placeholder="Company Website"
      />
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Industry"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
};

export default EditProfileBusinessOwner;
