import React, { useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Added for i18n
import { useCreateJobMutation } from "../../feature/job/jobSlide";
import { useUploadImageMutation } from "../../feature/fileUplord/fileUplordSlide";
import { useGetAllCategoriesQuery } from "../../feature/service/serviceSlde";
import "../../i18n"; // Ensure i18n is imported

const CreateJob = () => {
  const { t } = useTranslation(); // Hook for translations
  const [createService, { isLoading: isCreating, error: createError }] = useCreateJobMutation();
  const [uploadImage, { isLoading: isUploading, error: uploadError }] = useUploadImageMutation();
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useGetAllCategoriesQuery();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categoryId: "",
    budget: "",
    jobImages: [],
    status: "OPEN",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    try {
      const uploadedUrls = [];
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadResponse = await uploadImage(formData).unwrap();
        if (uploadResponse && uploadResponse.uri) {
          uploadedUrls.push(uploadResponse.uri);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        jobImages: [...prevData.jobImages, ...uploadedUrls],
      }));
    } catch (error) {
      console.error("Error uploading images:", error);
      alert(t("uploadImageError")); // Translated alert
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.categoryId || !formData.budget) {
      alert(t("requiredFieldsError")); // Translated alert
      return;
    }
    try {
      const response = await createService(formData).unwrap();
      console.log("Service created successfully:", response);
      setFormData({
        title: "",
        description: "",
        categoryId: "",
        budget: "",
        jobImages: [],
        status: "OPEN",
      });
      alert(t("createSuccess")); // Translated alert
    } catch (error) {
      console.error("Error creating service:", error);
      alert(t("createError")); // Translated alert
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-[120px] bg-gray-50 dark:bg-gray-900 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
          {t("createNewService")}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-20">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("title")}
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 sm:p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  placeholder={t("titlePlaceholder")}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("description")}
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3 sm:rows-4"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 sm:p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  placeholder={t("descriptionPlaceholder")}
                  required
                />
              </div>
              <div>
                <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("category")}
                </label>
                <select
                  name="categoryId"
                  id="categoryId"
                  value={formData.categoryId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 sm:p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  required
                  disabled={isCategoriesLoading}
                >
                  <option value="" disabled>
                    {isCategoriesLoading ? t("loadingCategories") : t("selectCategory")}
                  </option>
                  {categories?.data?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} {/* Assuming category names are already translated elsewhere */}
                    </option>
                  ))}
                </select>
                {categoriesError && (
                  <p className="mt-2 text-sm text-red-500 dark:text-red-400">{t("categoriesError")}</p>
                )}
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("budget")}
                </label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 sm:p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  placeholder={t("budgetPlaceholder")}
                  required
                />
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("status")}
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 sm:p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  required
                >
                  <option value="OPEN">{t("open")}</option>
                  <option value="IN_PROGRESS">{t("inProgress")}</option>
                  <option value="COMPLETED">{t("completed")}</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              <label htmlFor="dropzone-file" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("jobImages")}
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className={`flex flex-col items-center justify-center w-full h-56 sm:h-64 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:border-gray-500 ${
                    formData.jobImages.length > 0 ? "p-2" : ""
                  }`}
                >
                  {formData.jobImages.length > 0 ? (
                    <div className="grid gap-2 w-full h-full overflow-y-auto">
                      {formData.jobImages.map((imageUrl, index) => (
                        <div key={index} className="relative">
                          <img
                            src={imageUrl}
                            alt={`${t("uploaded")} ${index}`}
                            className="w-full h-48 sm:h-52 object-contain rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prevData) => ({
                                ...prevData,
                                jobImages: prevData.jobImages.filter((_, i) => i !== index),
                              }));
                            }}
                            className="absolute top-1 right-1 bg-red-500 dark:bg-red-600 text-white rounded-full p-1 hover:bg-red-600 dark:hover:bg-red-700"
                          >
                            <FaTimes className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">{t("clickToUpload")}</span> {t("orDragAndDrop")}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t("fileTypes")}</p>
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
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t("uploadingImages")}</p>
              )}
              {uploadError && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">{t("uploadImageError")}</p>
              )}
              <div className="flex justify-start mt-3 sm:mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition text-sm sm:text-base"
                  disabled={isCreating || isUploading}
                >
                  <FaSave className="mr-1 sm:mr-2 w-4 h-4" />
                  {isCreating ? t("postingJob") : t("postJob")}
                </button>
              </div>
            </div>
            {createError && (
              <div className="mt-4 text-red-500 dark:text-red-400 text-sm col-span-1 md:col-span-2">
                {t("error")}: {createError.message || t("createError")}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;