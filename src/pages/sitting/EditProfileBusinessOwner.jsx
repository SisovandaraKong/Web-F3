import React, { useState } from "react";
import { useEditeProfileBusinessOwnerMutation } from "../../feature/edit/editeSilde";
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide";

const EditProfileBusinessOwner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    profileImageUrl: "",
    phone: "",
    address: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
  });

  const [selectedFile, setSelectedFile] = useState(null); // Store the selected file
  const [editeProfileBusinessOwner, { loading }] =
    useEditeProfileBusinessOwnerMutation();
  const [uploadImage, { isLoading: isUploading, error: uploadError }] =
    useUploadImageMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file); // Store the file in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let profileImageUrl = formData.profileImageUrl;

      // Upload the image only if a file is selected
      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile); // Append the file to FormData

        // Upload the file using the upload hook
        const uploadResponse = await uploadImage(formData).unwrap();

        if (uploadResponse && uploadResponse.uri) {
          profileImageUrl = uploadResponse.uri; // Store the uploaded image URL
        }
      }
      // Update the profile with the new data (including the image URL if uploaded)
      const token = localStorage.getItem("accessToken");
      await editeProfileBusinessOwner({
        body: {
          ...formData,
          profileImageUrl, // Include the updated image URL
        },
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      }).unwrap();
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
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
        onChange={handleFileChange} // Handle file selection
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
      <button type="submit" disabled={loading || isUploading}>
        {loading || isUploading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
};

export default EditProfileBusinessOwner;
