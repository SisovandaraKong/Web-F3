import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Ta1 from "../../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../../assets/Ta_Images/Logo.png";
import Ta3 from "../../assets/Ta_Images/facebook.png";
import Ta4 from "../../assets/Ta_Images/google.png";
import { useRegisterFreelancerMutation } from "../../feature/auth/authSlide";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const RegisterFreelancer = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    formik.setFieldValue("phone", value);
  };

  const [registerFreelancer, { isLoading, error }] =
    useRegisterFreelancerMutation();

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
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Format the data according to the API requirements
        const formattedData = {
          fullName: values.fullName,
          gender: values.gender,
          address: values.address,
          username: values.username,
          email: values.email,
          profileImageUrl: "",
          phone: values.phone,
          userType: "FREELANCER",
          skills: [],
          portfolioUrl: " ",
          experienceYears: 0,
          bio: "",
          password: values.password,
        };
        console.log("Submitting data:", formattedData);
        const response = await registerFreelancer(formattedData).unwrap();
        console.log("Success:", response);
        alert("Registration successful!");
        navigate("/register-freelancer/login");
      } catch (err) {
        console.error("Registration error:", err);
        alert(
          `Registration failed! ${err.data?.message || "Please try again."}`
        );
      }
    },
  });

  return (
    <div className="flex flex-col md:flex-row  w-full overflow-y-auto">
      {/* Blue Section (Welcome) */}
      <div className="order-1 md:order-2 w-full md:w-1/2 bg-blue-900 text-white flex flex-col items-center justify-center p-4 md:p-6 flex-grow">
        {/* Phone layout: visible on small screens */}
        <div className="flex flex-col md:hidden items-center">
          <div className="flex items-center justify-between w-full">
            <img
              src={Ta1}
              alt="Join Us Now"
              className="w-24 h-24 sm:w-28 sm:h-28 ml-4 mr-11"
            />
            <div className="flex flex-col items-end pr-4">
              <h1 className="text-xl text-[28px] font-semibold text-right">
                Welcome to
              </h1>
              <h1 className="text-xl text-[28px] font-bold text-right">
                JobSeek
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop layout: visible on larger screens */}
        <div className="hidden md:block text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            Welcome to
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-2">
            JobSeek
          </h1>
          <img
            src={Ta1}
            alt="Join Us Now"
            className="mt-6 sm:mt-8 w-4/5 md:w-2/3 mx-auto"
          />
        </div>
      </div>

      {/* White Section (Form) */}
      <div className="order-2 md:order-1 w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-4 text-sm sm:text-base flex-grow">
        <div className="mt-4 w-11/12 sm:w-4/5">
          <div className="flex items-center mb-5">
            <img
              src={Ta2}
              alt="Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 mr-3"
            />
            <h1 className="text-3xl font-bold text-blue-900">JobSeek</h1>
          </div>
          <h2 className="text-2xl font-bold text-left text-blue-900 mb-1">
            Register as a Freelancer
          </h2>
        </div>
        <form className="mt-3 w-11/12 sm:w-4/5" onSubmit={formik.handleSubmit}>
          {/* Full Name Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.fullName}
              </div>
            )}

            <input
              placeholder="Username"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.username}
              </div>
            )}
          </div>

          {/* Gender Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select
              id="gender"
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              className="w-full p-2 border border-gray-300 rounded bg-white">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.gender}
              </div>
            )}
            <input
              placeholder="Address"
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.address}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            )}

            <PhoneInput
              placeholder="Phone Number"
              country={"kh"}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              inputStyle={{
                width: "100%",
                height: "40px",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                fontSize: "14px",
                paddingLeft: "58px",
              }}
              buttonStyle={{
                width: "38px",
                height: "38px",
                border: "none",
                background: "transparent",
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              containerStyle={{
                position: "relative",
                width: "100%",
              }}
              dropdownStyle={{
                zIndex: 999,
              }}
              className="mb-3"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>

          {/* Password Field */}
          <label
            htmlFor="password"
            className="block text-gray-800 font-medium mt-4 mb-2 flex items-center justify-between text-sm">
            <span>Password</span>
            <span
              onClick={togglePasswordVisibility}
              className="cursor-pointer flex items-center gap-1"
              style={{ color: "#1c398e" }}>
              {passwordVisible ? (
                <>
                  <i className="fas fa-eye-slash"></i> Hide
                </>
              ) : (
                <>
                  <i className="fas fa-eye"></i> Show
                </>
              )}
            </span>
          </label>
          <input
            id="password"
            name="password"
            type={passwordVisible ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full p-2 border border-gray-300 rounded mb-3 text-sm"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </div>
          )}

          {/* Confirm Password Field */}
          <label
            htmlFor="confirmPassword"
            className="block text-gray-800 font-medium mt-2 mb-2 flex items-center justify-between text-sm">
            <span>Confirm Password</span>
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="cursor-pointer flex items-center gap-1"
              style={{ color: "#1c398e" }}>
              {confirmPasswordVisible ? (
                <>
                  <i className="fas fa-eye-slash"></i> Hide
                </>
              ) : (
                <>
                  <i className="fas fa-eye"></i> Show
                </>
              )}
            </span>
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={confirmPasswordVisible ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.confirmPassword}
            </div>
          )}

          <button
            className="w-full bg-blue-900 hover:bg-blue-800 text-white p-2 rounded mt-6 text-sm"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          {error && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {error.data?.message || "An error occurred during registration."}
            </div>
          )}
        </form>
        <p className="mt-3 text-gray-600 text-sm font-medium text-center">
          Already have an account?{" "}
          <span
            className="cursor-pointer underline"
            onClick={() => navigate("/register-freelancer/login")}
            style={{ color: "#1c398e" }}>
            Login now
          </span>
        </p>
        <p className="mt-2 text-gray-500 text-sm text-center">OR</p>
      </div>
    </div>
  );
};

export default RegisterFreelancer;
