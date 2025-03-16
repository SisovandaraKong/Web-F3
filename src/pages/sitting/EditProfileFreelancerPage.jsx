import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaLink,
  FaBriefcase,
  FaInfoCircle,
  FaVenusMars,
  FaImage,
  FaSave,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Added for i18n
import { useGetMeQuery } from "../../feature/auth/authSlide";
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide";
import { useEditeProfileFreelancerMutation } from "../../feature/editProfile/editeProfileSlide";
import "../../i18n"; // Ensure i18n is imported

const EditProfileFreelancerPage = () => {
  const { t } = useTranslation(); // Hook for translations
  const { data: freelancerData, isLoading: isFreelancerLoading, refetch } = useGetMeQuery();
  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();
  const [editProfileFreelancer, { isLoading: isUpdating }] = useEditeProfileFreelancerMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    address: "",
    username: "",
    profileImageUrl: "",
    phone: "",
    skills: "",
    portfolioUrl: "",
    experienceYears: "",
    bio: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (freelancerData?.data) {
      const freelancer = freelancerData.data;
      setFormData({
        fullName: freelancer.fullName || "",
        gender: freelancer.gender || "",
        address: freelancer.address || "",
        username: freelancer.username || "",
        profileImageUrl: freelancer.profileImageUrl || "",
        phone: freelancer.phone || "",
        skills: freelancer.skills ? freelancer.skills.join(", ") : "",
        portfolioUrl: freelancer.portfolioUrl || "",
        experienceYears: freelancer.experienceYears || "",
        bio: freelancer.bio || "",
      });
      if (freelancer.profileImageUrl) {
        setPreviewImage(freelancer.profileImageUrl);
      }
    }
  }, [freelancerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
      if (formErrors.profileImageUrl) {
        setFormErrors((prev) => ({ ...prev, profileImageUrl: null }));
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = t("fullNameRequired");
    if (!formData.gender) errors.gender = t("genderRequired");
    if (!formData.phone) errors.phone = t("phoneRequired");
    if (!formData.skills.trim()) errors.skills = t("skillsRequired");
    if (!formData.experienceYears || isNaN(formData.experienceYears))
      errors.experienceYears = t("experienceYearsInvalid");
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      let profileImageUrl = formData.profileImageUrl;
      if (selectedFile) {
        const imageFormData = new FormData();
        imageFormData.append("file", selectedFile);
        const uploadResponse = await uploadImage(imageFormData).unwrap();
        if (uploadResponse && uploadResponse.uri) {
          profileImageUrl = uploadResponse.uri;
        }
      }
      const updatedData = {
        ...formData,
        profileImageUrl,
        skills: formData.skills.split(",").map((skill) => skill.trim()),
      };
      const token = localStorage.getItem("accessToken");
      await editProfileFreelancer({
        body: updatedData,
        headers: { Authorization: `Bearer ${token}` },
      }).unwrap();
      await refetch();
      alert(t("updateSuccess"));
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert(t("updateError"));
    }
  };

  if (isFreelancerLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 sm:h-12 w-10 sm:w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-6 sm:py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold">{t("editFreelancerProfile")}</h1>
          <p className="text-gray-200 text-sm sm:text-base">{t("updateProfileInfo")}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <div className="relative">
              <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-blue-500 dark:border-blue-600">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt={t("profilePreview")}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-500">
                    <FaUser size={40} className="sm:size-50" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-500 dark:bg-blue-600 text-white p-1 sm:p-2 rounded-full cursor-pointer">
                <FaImage className="w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.gif"
                  onChange={handleFileChange}
                  disabled={isUploading}
                />
              </label>
            </div>
            {isUploading && <p className="text-blue-500 dark:text-blue-400 text-sm">{t("uploadingImage")}</p>}
            {formErrors.profileImageUrl && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm">{formErrors.profileImageUrl}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaUser className="mr-2" /> {t("fullName")}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("fullNamePlaceholder")}
              className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                formErrors.fullName ? "border-red-500 dark:border-red-400" : ""
              }`}
            />
            {formErrors.fullName && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.fullName}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaVenusMars className="mr-2" /> {t("gender")}
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                formErrors.gender ? "border-red-500 dark:border-red-400" : ""
              }`}
            >
              <option value="">{t("selectGender")}</option>
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
              <option value="Other">{t("other")}</option>
            </select>
            {formErrors.gender && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.gender}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaPhone className="mr-2" /> {t("phoneNumber")}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phonePlaceholder")}
              className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                formErrors.phone ? "border-red-500 dark:border-red-400" : ""
              }`}
            />
            {formErrors.phone && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaMapMarkerAlt className="mr-2" /> {t("address")}
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder={t("addressPlaceholder")}
              className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaBriefcase className="mr-2" /> {t("skills")}
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder={t("skillsPlaceholder")}
              className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                formErrors.skills ? "border-red-500 dark:border-red-400" : ""
              }`}
            />
            {formErrors.skills && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.skills}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaLink className="mr-2" /> {t("portfolioUrl")}
            </label>
            <input
              type="url"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleChange}
              placeholder={t("portfolioUrlPlaceholder")}
              className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaBriefcase className="mr-2" /> {t("yearsOfExperience")}
            </label>
            <input
              type="number"
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              placeholder={t("experienceYearsPlaceholder")}
              className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                formErrors.experienceYears ? "border-red-500 dark:border-red-400" : ""
              }`}
            />
            {formErrors.experienceYears && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.experienceYears}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
              <FaInfoCircle className="mr-2" /> {t("bio")}
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder={t("bioPlaceholder")}
              rows="3 sm:rows-4"
              className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              type="submit"
              disabled={isUploading || isUpdating}
              className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <FaSave className="mr-1 sm:mr-2 w-4 h-4" /> 
              {isUploading || isUpdating ? t("saving") : t("saveChanges")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileFreelancerPage;