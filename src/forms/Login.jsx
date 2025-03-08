import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Ta1 from "../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../assets/Ta_Images/Logo.png";
import Ta3 from "../assets/Ta_Images/facebook.png";
import Ta4 from "../assets/Ta_Images/google.png";

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full overflow-y-auto">
            {/* Left Section (Blue Section - Text + Image) */}
            <div className="hide-for-small block md:flex w-full md:w-1/2 bg-blue-900 text-white flex-col items-center justify-center p-6 md:p-8 flex-grow">
                <div className="text-center flex flex-col items-center">
                    {/* Original layout for larger/full screens */}
                    <div className="hidden md:block">
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold">
                            Welcome to
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mt-2">
                            JobSeek
                        </h1>
                        <img
                            src={Ta1}
                            alt="Welcome Graphic"
                            className="mt-8 sm:mt-10 w-3/4 md:w-1/2 mx-auto"
                        />
                    </div>

                    {/* For phone screens (small only): Image in front of "Welcome to JobSeek" */}
                    <div className="flex flex-col md:hidden items-center">
                        <div className="flex items-center justify-between w-full">
                            <img
                                src={Ta1}
                                alt="Join Us Now"
                                className="w-24 h-24 sm:w-28 sm:h-28 ml-3 mr-8"
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
                </div>
            </div>

            {/* Right Section (Login Form Section) */}
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-6 md:p-8 flex-grow">
                <div className="w-4/5">
                    <div className="flex items-center mb-6">
                        <img
                            src={Ta2}
                            alt="Logo"
                            className="w-12 h-12 sm:w-14 sm:h-14 mr-2"
                        />
                        <h1
                            className="text-xl sm:text-3xl md:text-3xl font-bold"
                            style={{ color: "#1c398e" }}
                        >
                            JobSeek
                        </h1>
                    </div>

                    <h2
                        className="text-2xl sm:text-3xl font-bold text-left mt-4 sm:mt-6"
                        style={{ color: "#1c398e" }}
                    >
                        Log in
                    </h2>
                </div>
                <form className="mt-6 w-4/5">
                    {/* Email Input */}
                    <label
                        htmlFor="email"
                        className="block text-gray-800 font-medium mb-2 text-base sm:text-[15px]"
                    >
                        Email address or username
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2.5 border border-gray-300 rounded-lg mb-4 text-base sm:text-[15px]"
                    />

                    {/* Password Input */}
                    <label
                        htmlFor="password"
                        className="block text-gray-800 font-medium mb-2 flex items-center justify-between text-base sm:text-[15px]"
                    >
                        <span>Password</span>
                        <span
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer flex items-center gap-2 text-base sm:text-[15px]"
                            style={{ color: "#1c398e" }}
                        >
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
                        type={passwordVisible ? "text" : "password"}
                        className="w-full p-2.5 border border-gray-300 rounded-lg text-base sm:text-[15px]"
                    />

                    {/* Forgot Password Link */}
                    <div className="text-right mt-1">
                        <span
                            className="underline cursor-pointer"
                            style={{ color: "#1c398e" }}
                        >
                            Forget your password?
                        </span>
                    </div>

                    {/* Log In Button */}
                    <button
                        className="w-full bg-gray-400 hover:bg-gray-500 text-white p-2.5 rounded-lg mt-5 text-base sm:text-[15px]"
                        type="submit"
                    >
                        Log in
                    </button>
                </form>

                {/* Sign-up Section */}
                <p className="mt-4 text-gray-600 text-[13px] sm:text-[14px] font-semibold">
                    Don&#39;t have an account?{" "}
                    <span
                        className="cursor-pointer"
                        style={{ color: "#1c398e" }}
                    >
                        Sign up
                    </span>
                </p>
                <p className="mt-3 text-gray-500 text-[13px] sm:text-[14px]">
                    OR
                </p>

                {/* Social Media Login Buttons */}
                <div className="flex flex-col gap-3 mt-4 w-4/5">
                    <button className="w-full border font-medium border-gray-300 p-2.5 rounded-lg flex items-center justify-center gap-1 text-[15px] sm:text-base cursor-pointer hover:bg-gray-200">
                        <img
                            src={Ta3}
                            alt="Facebook Logo"
                            className="w-8 h-5 sm:w-9 sm:h-6"
                        />
                        Continue with Facebook
                    </button>
                    <button className="w-full border font-medium border-gray-300 p-2.5 rounded-lg flex items-center justify-center gap-2 text-[15px] sm:text-base cursor-pointer hover:bg-gray-200">
                        <img
                            src={Ta4}
                            alt="Google Logo"
                            className="w-6 h-6"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;