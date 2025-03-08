import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Ta1 from "../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../assets/Ta_Images/Logo.png";
import Ta3 from "../assets/Ta_Images/facebook.png";
import Ta4 from "../assets/Ta_Images/google.png";

const CreateAccountPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full overflow-y-auto"> {/* Changed h-screen to min-h-screen and added overflow-y-auto */}
            {/* Blue Section (Welcome) */}
            <div className="order-1 md:order-2 w-full md:w-1/2 bg-blue-900 text-white flex flex-col items-center justify-center p-4 md:p-6 flex-grow">
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

                <div className="hidden md:block text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold">
                        Welcome to
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mt-2">
                        JobSeek
                    </h1>
                    <img
                        src={Ta1}
                        alt="Join Us Now"
                        className="mt-6 sm:mt-8 w-3/4 md:w-1/2 mx-auto"
                    />
                </div>
            </div>

            {/* White Section (Form) */}
            <div className="order-2 md:order-1 w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-2 md:p-3 text-sm sm:text-base flex-grow">
                <div className="mt-2 w-11/12 sm:w-4/5">
                    <div className="flex items-center mb-3">
                        <img
                            src={Ta2}
                            alt="Logo"
                            className="w-12 h-12 sm:w-14 sm:h-14 mr-3"
                        />
                        <h1
                            className="text-xl sm:text-3xl md:text-3xl font-bold"
                            style={{ color: "#1c398e" }}
                        >
                            JobSeek
                        </h1>
                    </div>
                    <h2
                        className="text-lg sm:text-2xl font-bold text-left"
                        style={{ color: "#1c398e" }}
                    >
                        Create an account
                    </h2>
                </div>
                <form className="mt-3 w-11/12 sm:w-4/5">
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label
                                htmlFor="first-name"
                                className="block text-gray-800 font-medium mb-2 text-sm"
                            >
                                First Name
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded text-sm"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="last-name"
                                className="block text-gray-800 font-medium mb-2 text-sm"
                            >
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded text-sm"
                            />
                        </div>
                    </div>
                    <label
                        htmlFor="email"
                        className="block text-gray-800 font-medium mb-2 mt-3 text-sm"
                    >
                        Email address or username
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded mb-3 text-sm"
                    />
                    <label
                        htmlFor="password"
                        className="block text-gray-800 font-medium mb-2 flex items-center justify-between text-sm"
                    >
                        <span>Password</span>
                        <span
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer flex items-center gap-1"
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
                        className="w-full p-2 border border-gray-300 rounded mb-3 text-sm"
                    />
                    <label
                        htmlFor="confirm-password"
                        className="block text-gray-800 font-medium mb-2 flex items-center justify-between text-sm"
                    >
                        <span>Confirm Password</span>
                        <span
                            onClick={toggleConfirmPasswordVisibility}
                            className="cursor-pointer flex items-center gap-1"
                            style={{ color: "#1c398e" }}
                        >
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
                        id="confirm-password"
                        type={confirmPasswordVisible ? "text" : "password"}
                        className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
                    />
                    <button
                        className="w-full bg-gray-400 hover:bg-gray-500 text-white p-2 rounded mt-2 text-sm"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>
                <p className="mt-3 text-gray-600 text-sm font-medium text-center">
                    Already have an account?{" "}
                    <span
                        className="cursor-pointer underline"
                        style={{ color: "#1c398e" }}
                    >
                        Login now
                    </span>
                </p>
                <p className="mt-2 text-gray-500 text-sm text-center">OR</p>
                <div className="flex flex-col gap-2 mt-3 w-11/12 sm:w-4/5">
                    <button className="w-full border font-medium border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-gray-200">
                        <img
                            src={Ta3}
                            alt="Facebook Logo"
                            className="w-8 h-5 sm:w-9 sm:h-6"
                        />
                        Continue with Facebook
                    </button>
                    <button className="w-full border font-medium border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-gray-200 mt-2 mb-3">
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

export default CreateAccountPage;