import React, { useState, useEffect } from "react";
import { 
  FaUser, 
  FaBuilding, 
  FaGlobe, 
  FaIndustry, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaVenusMars, 
  FaImage,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Added for i18n
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide";
import { useGetMeQuery } from "../../feature/auth/authSlide";
import { useEditeProfileBusinessOwnerMutation } from "../../feature/editProfile/editeProfileSlide";
import "../../i18n"; // Ensure i18n is imported

const EditProfileBusinessOwner = () => {
  const { t } = useTranslation(); // Hook for translations
  const { data: userData, isLoading: userLoading } = useGetMeQuery();
  const [editeProfileBusinessOwner, { isLoading: updating }] = useEditeProfileBusinessOwnerMutation();
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
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (userData?.data) {
      const user = userData.data;
      setFormData({
        fullName: user.fullName || "",
        gender: user.gender || "",
        profileImageUrl: user.profileImageUrl || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        companyName: user.companyName || "",
        companyWebsite: user.companyWebsite || "",
        industry: user.industry || "",
      });
      if (user.profileImageUrl) {
        setPreviewImage(user.profileImageUrl);
      }
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
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
        setFormErrors(prev => ({ ...prev, profileImageUrl: null }));
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = t("fullNameRequired");
    if (!formData.gender) errors.gender = t("genderRequired");
    if (!formData.email) errors.email = t("emailRequired");
    if (!formData.phone) errors.phone = t("phoneRequired");
    if (!formData.companyName) errors.companyName = t("companyNameRequired");
    if (formData.companyWebsite && !formData.companyWebsite.match(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/)) {
      errors.companyWebsite = t("invalidWebsite");
    }
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
      const token = localStorage.getItem("accessToken");
      await editeProfileBusinessOwner({
        body: { ...formData, profileImageUrl },
        headers: { Authorization: `Bearer ${token}` },
      }).unwrap();
      alert(t("updateSuccess"));
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert(t("updateError"));
    }
  };

  if (userLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 sm:h-12 w-10 sm:w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-6 sm:py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold">{t("editBusinessProfile")}</h2>
          <p className="text-gray-100 text-sm sm:text-base">{t("updateBusinessInfo")}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Profile Image */}
            <div className="md:col-span-2 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
              <div className="relative">
                <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-blue-600 dark:border-blue-700">
                  {previewImage ? (
                    <img 
                      src={previewImage} 
                      alt={t("profilePreview")} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-500">
                      <FaUser size={40} className="sm:w-50 sm:h-50" />
                    </div>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-blue-600 dark:bg-blue-700 text-white p-1 sm:p-2 rounded-full cursor-pointer">
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
              {isUploading && <p className="text-blue-600 dark:text-blue-400 text-sm">{t("uploadingImage")}</p>}
              {formErrors.profileImageUrl && <p className="text-red-500 dark:text-red-400 text-sm">{formErrors.profileImageUrl}</p>}
            </div>

            {/* Personal Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-1 sm:pb-2 border-gray-300 dark:border-gray-600">{t("personalInformation")}</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
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
                  {formErrors.fullName && <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.fullName}</p>}
                </div>
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
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
                    <option value="female">{t("female")}</option>
                    <option value="male">{t("male")}</option>
                    <option value="other">{t("other")}</option>
                  </select>
                  {formErrors.gender && <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.gender}</p>}
                </div>
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                    <FaEnvelope className="mr-2" /> {t("emailAddress")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("emailPlaceholder")}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                      formErrors.email ? "border-red-500 dark:border-red-400" : ""
                    }`}
                  />
                  {formErrors.email && <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
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
                  {formErrors.phone && <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-1 sm:pb-2 border-gray-300 dark:border-gray-600">{t("businessInformation")}</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                    <FaBuilding className="mr-2" /> {t("companyName")}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder={t("companyNamePlaceholder")}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                      formErrors.companyName ? "border-red-500 dark:border-red-400" : ""
                    }`}
                  />
                  {formErrors.companyName && <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.companyName}</p>}
                </div>
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                    <FaGlobe className="mr-2" /> {t("companyWebsite")}
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder={t("companyWebsitePlaceholder")}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base ${
                      formErrors.companyWebsite ? "border-red-500 dark:border-red-400" : ""
                    }`}
                  />
                  {formErrors.companyWebsite && <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1">{formErrors.companyWebsite}</p>}
                </div>
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                    <FaIndustry className="mr-2" /> {t("industry")}
                  </label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder={t("industryPlaceholder")}
                    className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="flex items-center text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                    <FaMapMarkerAlt className="mr-2" /> {t("address")}
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={t("addressPlaceholder")}
                    rows="2 sm:rows-3"
                    className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm sm:text-base"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4 sm:mt-6">
            <button
              type="submit"
              disabled={updating || isUploading}
              className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {updating || isUploading ? t("updating") : t("updateProfile")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileBusinessOwner;