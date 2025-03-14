import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Ta1 from "../../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../../assets/Ta_Images/Logo.png";
import { useRegisterFreelancerMutation } from "../../feature/auth/authSlide";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useUplordImageFileMutation } from "../../feature/fileUplord/fileUplordSlide";

const RegisterFreelancer = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Fixed the upload image mutation hook
  const [uploadImageFile, { isLoading: isUploading }] =
    useUplordImageFileMutation();

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    formik.setFieldValue("phone", value);
  };

  const [registerFreelancer, { isLoading, error }] =
    useRegisterFreelancerMutation();

  // Compress image before upload
  const compressImage = (file) => {
    return new Promise((resolve) => {
      setIsCompressing(true);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 500;
          const MAX_HEIGHT = 500;

          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          const compressedDataUrl = canvas.toDataURL("image/*", 0.6);

          fetch(compressedDataUrl)
            .then((res) => res.blob())
            .then((blob) => {
              const compressedFile = new File([blob], file.name, {
                type: "image/*",
                lastModified: Date.now(),
              });

              setIsCompressing(false);
              resolve(compressedFile);
            });
        };
      };
    });
  };

  // In your component:
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const compressedFile = await compressImage(file);

        // Create FormData for image upload
        const formData = new FormData();

        // Use the correct field name expected by your API
        // This might be 'file', 'image', 'media', etc. - check your API docs
        formData.append("file", compressedFile);
        // If your API requires additional fields:
        // formData.append("type", "profile");

        // Call the mutation with the FormData
        const result = await uploadImageFile(formData).unwrap();

        // Handle the result...
      } catch (error) {
        console.error("Error uploading:", error);
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    profileImage: Yup.mixed(),
    profileImageUrl: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      address: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
      profileImageUrl: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("gender", values.gender);
        formData.append("address", values.address);
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("userType", "FREELANCER");
        formData.append("portfolioUrl", " ");
        formData.append("experienceYears", 0);
        formData.append("bio", "");
        formData.append("password", values.password);
        formData.append("skills", JSON.stringify([]));

        // If we have a profileImageUrl from the upload, use that
        if (values.profileImageUrl) {
          formData.append("profileImageUrl", values.profileImageUrl);
        }
        // Otherwise, if your backend expects the file in this request too
        else if (profileImage) {
          formData.append("profileImage", profileImage);
        }

        const response = await registerFreelancer(formData).unwrap();
        toast.success("Registration successful! Welcome to JobSeek!", {
          position: "top-right",
        });
        navigate("/register-freelancer/login");
      } catch (err) {
        toast.error(
          err.data?.message || "Registration failed! Please try again."
        );
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Welcome to
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold">JobSeek</h1>
          <img
            src={Ta1}
            alt="Join Us"
            className="mt-8 w-3/4 mx-auto max-w-md"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center gap-3">
            <img src={Ta2} alt="Logo" className="w-12 h-12" />
            <h1 className="text-3xl font-bold text-blue-900">JobSeek</h1>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Join as a Freelancer
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Create your account to get started
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-4"
            encType="multipart/form-data">
            <div className="flex justify-center mb-4">
              <div
                className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden cursor-pointer relative"
                onClick={handleImageClick}>
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <i className="fas fa-user text-4xl text-blue-500"></i>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {isCompressing || isUploading ? (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <input
                  placeholder="Full Name"
                  id="fullName"
                  name="fullName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.fullName}
                  </p>
                )}
              </div>

              {/* Username */}
              <div>
                <input
                  placeholder="Username"
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {formik.touched.username && formik.errors.username && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.username}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Gender */}
              <div>
                <select
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white">
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.gender}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <input
                  placeholder="Address"
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.address}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <PhoneInput
                  placeholder="Phone Number"
                  country={"kh"}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputStyle={{
                    width: "100%",
                    height: "42px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    paddingLeft: "48px",
                  }}
                  buttonStyle={{
                    border: "none",
                    background: "transparent",
                  }}
                  containerStyle={{ position: "relative" }}
                  dropdownStyle={{ zIndex: 999 }}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900">
                  {passwordVisible ? (
                    <i className="fas fa-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <input
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900">
                  {confirmPasswordVisible ? (
                    <i className="fas fa-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md shadow-md hover:bg-blue-700"
              disabled={isLoading || isUploading || isCompressing}>
              {isLoading ? "Registering..." : "Create Account"}
            </button>
          </form>
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="text-blue-900 hover:underline cursor-pointer font-medium"
                onClick={() => navigate("/register-freelancer/login")}>
                Login now
              </span>
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1/4 h-px bg-gray-300"></span>
              <span className="text-sm text-gray-500">OR</span>
              <span className="w-1/4 h-px bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFreelancer;
