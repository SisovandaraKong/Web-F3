import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Ta1 from "../assets/Ta_Images/LoginJoinUs.png";
import Ta2 from "../assets/Ta_Images/Logo.png";
import Ta3 from "../assets/Ta_Images/facebook.png";
import Ta4 from "../assets/Ta_Images/google.png";

const RegisterBusinessOwner = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedSkill, setSelectedSkill] = useState(""); // For dropdown selection
    const [otherSkill, setOtherSkill] = useState(""); // For "Other Skills" input

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    const handleSkillChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSkill(selectedValue);
        if (selectedValue !== "Other Skills") {
            setOtherSkill(""); // Clear the "Other Skills" text box if it's no longer selected
        }
    };

    const handleOtherSkillChange = (event) => {
        setOtherSkill(event.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full overflow-y-auto">
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
                        Create an account
                    </h2>
                </div>
                <form className="mt-3 w-11/12 sm:w-4/5">
                    {/* Full Name Field */}
                    <label
                        htmlFor="full-name"
                        className="block text-gray-800 font-medium mb-2"
                    >
                        Full Name
                    </label>
                    <input
                        id="full-name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                    />

                    {/* Username Field */}
                    <label
                        htmlFor="username"
                        className="block text-gray-800 font-medium mb-3 mt-4"
                    >
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                    />

                    {/* Email Field */}
                    <label
                        htmlFor="email"
                        className="block text-gray-800 font-medium mb-3 mt-4"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded"
                    />

                    {/* Phone Number Field */}
                    <label
                        htmlFor="phone-number"
                        className="block text-gray-800 font-medium mb-3 mt-4"
                    >
                        Phone Number
                    </label>
                    <PhoneInput
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

                    {/* Skills Field */}
                    <label
                        htmlFor="skills"
                        className="block text-gray-800 font-medium mb-3 mt-4"
                    >
                        Skills
                    </label>
                    <select
                        id="skills"
                        value={selectedSkill}
                        onChange={handleSkillChange}
                        className="w-full p-2 border border-gray-300 rounded bg-white"
                    >
                        <option value="">Select a skill</option>
                        <option value="Java">Java</option>
                        <option value="Spring Boot">Spring Boot</option>
                        <option value="Docker">Docker</option>
                        <option value="C#">C#</option>
                        <option value="SQL">SQL</option>
                        <option value="Python">Python</option>
                        <option value="Other Skills">Other Skills</option>
                    </select>

                    {/* Additional Field for "Other Skills" */}
                    {selectedSkill === "Other Skills" && (
                        <div className="mt-4">
                            <label
                                htmlFor="other-skill"
                                className="block text-gray-800 font-medium mb-3"
                            >
                                Please enter your specific skills
                            </label>
                            <input
                                id="other-skill"
                                type="text"
                                value={otherSkill}
                                onChange={handleOtherSkillChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    )}

                    {/* Password Field */}
                    <label
                        htmlFor="password"
                        className="block text-gray-800 font-medium mt-4 mb-2 flex items-center justify-between text-sm"
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

                    {/* Confirm Password Field */}
                    <label
                        htmlFor="confirm-password"
                        className="block text-gray-800 font-medium mt-2 mb-2 flex items-center justify-between text-sm"
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
                        className="w-full bg-gray-400 hover:bg-gray-500 text-white p-2 rounded mt-6 text-sm"
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
                        <img src={Ta4} alt="Google Logo" className="w-6 h-6" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterBusinessOwner;