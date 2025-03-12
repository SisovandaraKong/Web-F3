import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../feature/auth/authSlide";
import Ta1 from "../../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../../assets/Ta_Images/Logo.png";
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

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
        const response = await login(values).unwrap();
        console.log("Login successful:", response);

        if (response?.accessToken) {
          localStorage.setItem("accessToken", response.accessToken);
          console.log("Token stored in session storage:", response.accessToken);

          if (response?.refreshToken) {
            localStorage.setItem("refreshToken", response.refreshToken);
          }
          toast.success('Login successful! Welcome back!', {
            position: 'top-right',
          });
          navigate("/freelancer-feed");
        } else {
          toast.error('Login successful, but no token received.');
        }
      } catch (err) {
        console.error("Login error:", err);
        toast.error(err.data?.message || 'Invalid credentials. Please try again.');
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Welcome Section */}
      <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 text-white items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Welcome to</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold">JobSeek</h1>
          <img src={Ta1} alt="Welcome Graphic" className="mt-10 w-3/4 max-w-md mx-auto" />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center gap-3">
            <img src={Ta2} alt="Logo" className="w-12 h-12" />
            <h1 className="text-3xl font-bold text-blue-900">JobSeek</h1>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
            <p className="text-sm text-gray-600 mt-1">Log in to your account</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Email/Username */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Enter your email or username"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900"
                >
                  {passwordVisible ? (
                    <i className="fas fa-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
              )}
              <div className="text-right mt-2">
                <span
                  className="text-sm text-blue-900 hover:underline cursor-pointer"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">
                {error?.data?.message || "Invalid credentials. Please try again."}
              </p>
            )}

            {/* Submit Button */}
            <button
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium disabled:opacity-50 transition"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-blue-900 hover:underline cursor-pointer font-medium"
              onClick={() => navigate("/register-freelancer")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;