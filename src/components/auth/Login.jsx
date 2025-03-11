import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../feature/auth/authSlide";
import Ta1 from "../../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../../assets/Ta_Images/Logo.png";
import Ta3 from "../../assets/Ta_Images/facebook.png";
import Ta4 from "../../assets/Ta_Images/google.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email or username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values).unwrap();  // Unwrap the response to avoid redux-toolkit's automatic error handling.
        console.log("Login successful:", response);
      
        // Ensure that the tokens are present before setting them in storage
        if (response?.accessToken) {
          localStorage.setItem("token", response.accessToken);
          console.log("Token stored in session storage:", response.accessToken);
          
          // Only store refreshToken if it's available
          if (response?.refreshToken) {
            localStorage.setItem("refreshToken", response.refreshToken);
          }
          
          // Navigate to the freelancer feed page
          navigate("/freelancer-feed");
        } else {
          alert("Login successful, but no token received.");
        }
      } catch (err) {
        // Log the error for debugging and show a friendly message
        console.error("Login error:", err);
        alert("Login failed. Please try again.");
      }
      
    },
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-y-auto">
      <div className="hidden md:flex w-1/2 bg-blue-900 text-white flex-col items-center justify-center p-8">
        <h1 className="text-4xl md:text-7xl font-semibold">Welcome to</h1>
        <h1 className="text-4xl md:text-7xl font-bold mt-2">JobSeek</h1>
        <img src={Ta1} alt="Welcome Graphic" className="mt-10 w-1/2" />
      </div>
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-6 md:p-8">
        <div className="w-4/5">
          <div className="flex items-center mb-6">
            <img src={Ta2} alt="Logo" className="w-14 h-14 mr-2" />
            <h1 className="text-3xl font-bold text-blue-900">JobSeek</h1>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mt-6">Log in</h2>
        </div>
        <form className="mt-6 w-4/5" onSubmit={formik.handleSubmit}>
          <label
            htmlFor="email"
            className="block text-gray-800 font-medium mb-2">
            Email address or username
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2.5 border border-gray-300 rounded-lg"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs mb-3">
              {formik.errors.email}
            </div>
          )}
          <label
            htmlFor="password"
            className="block text-gray-800 font-medium mb-2 mt-3 flex justify-between">
            <span>Password</span>
            <span
              onClick={togglePasswordVisibility}
              className="cursor-pointer text-blue-900">
              <i
                className={`fas ${
                  passwordVisible ? "fa-eye-slash" : "fa-eye"
                }`}></i>{" "}
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </label>
          <input
            id="password"
            name="password"
            type={passwordVisible ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full p-2.5 border border-gray-300 rounded-lg"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </div>
          )}
          <div className="text-right mt-1">
            <span
              className="underline cursor-pointer text-blue-900"
              onClick={() => navigate("/forgot-password")}>
              Forget your password?
            </span>
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {error?.data?.message || "Invalid credentials. Please try again."}
            </div>
          )}
          <button
            className="w-full bg-blue-900 hover:bg-blue-800 text-white p-2.5 rounded-lg mt-5"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          Don&#39;t have an account?{" "}
          <span
            className="cursor-pointer text-blue-900"
            onClick={() => navigate("/register-freelancer")}>
            Sign up
          </span>
        </p>
        <p className="mt-3 text-gray-500 text-sm">OR</p>
        <div className="flex flex-col gap-3 mt-4 w-4/5">
          <button
            className="w-full border border-gray-300 p-2.5 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-gray-200"
            type="button">
            <img src={Ta3} alt="Facebook Logo" className="w-9 h-6" />
            Continue with Facebook
          </button>
          <button
            className="w-full border border-gray-300 p-2.5 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-gray-200"
            type="button">
            <img src={Ta4} alt="Google Logo" className="w-6 h-6" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
