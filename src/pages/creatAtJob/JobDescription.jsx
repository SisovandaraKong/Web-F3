import React, { useState } from "react";

function JobDescription() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const defaultTextColor = "text-[#2b407f]";

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const jobTypes = [
    "Full time",
    "Part time",
    "Fresher",
    "Part time",
    "Internships",
    "Temporary",
    "Freelance",
    "Volunteer",
  ];
  const shifts = [
    "day shift",
    "Morning shift",
    "Rotational shift",
    "Night shift",
    "Mon to Fri",
    "Evening shift",
    "Weekend availability",
    "Fixed shift",
    "UK shift",
    "US shift",
    "Other",
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#2b407f] text-left mb-8">
          Jobs Description
        </h1>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h4l2-2h4l2 2h4a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <form>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Gender</label>
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-start mb-4 ml-2">
            <div className="w-full md:w-[590px]">
              <label className="block text-gray-700 mb-2">Job Title</label>
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Job Title</option>
                <option value="backend">Backend Developer</option>
                <option value="frontend">Frontend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="w-full md:w-[590px]">
              <label className="block text-gray-700 mb-2">Job Level</label>
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Job Level</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div className="w-full md:w-[590px]">
              <label className="block text-gray-700 mb-2">Qualification</label>
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Qualification</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Address"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">City</label>
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select City</option>
                <option value="phnompenh">Phnom Penh</option>
                <option value="siemreap">Siem Reap</option>
                <option value="battambang">Battambang</option>
              </select>
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Country</label>
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Country</option>
                <option value="cambodia">Cambodia</option>
                <option value="thailand">Thailand</option>
                <option value="vietnam">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">GitHub</label>
              <input
                type="text"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="GitHub URL"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">LinkedIn</label>
              <input
                type="text"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="LinkedIn URL"
              />
            </div>
            <div className="w-full md:w-[387px]">
              <label className="block text-gray-700 mb-2">Website</label>
              <input
                type="text"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Website URL"
              />
            </div>
          </div>

          <div className="flex justify-start mb-4 ml-2">
            <div className="w-full md:w-[590px]">
              <label className="block text-gray-700 mb-2">
                Describe about yourself
              </label>
              <textarea
                className="w-full min-h-[100px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe about yourself"
                style={{ resize: "vertical" }}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-8 py-8">
          <h1 className="text-3xl font-bold text-[#2b407f] text-left mb-8">
            Add Job details
          </h1>

          <form className="space-y-6">
            <div className="ml-2">
              <label className={`${defaultTextColor} mb-2 block`}>
                Job type *
              </label>
            </div>

            <div className="ml-2 flex flex-wrap gap-2">
              {jobTypes.slice(0, 5).map((type, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOptionClick(type)}
                  className={`px-4 py-2 border border-[#2b407f] rounded-full ${defaultTextColor} hover:bg-[#2b407f] hover:text-white ${
                    selectedOptions.includes(type)
                      ? "bg-[#2b407f] text-white"
                      : "bg-transparent"
                  } transition-colors duration-200`}>
                  + {type}
                </button>
              ))}
            </div>

            <div className="ml-2 flex flex-wrap gap-2">
              {jobTypes.slice(5).map((type, index) => (
                <button
                  key={index + 5}
                  type="button"
                  onClick={() => handleOptionClick(type)}
                  className={`px-4 py-2 border border-[#2b407f] rounded-full ${defaultTextColor} hover:bg-[#2b407f] hover:text-white ${
                    selectedOptions.includes(type)
                      ? "bg-[#2b407f] text-white"
                      : "bg-transparent"
                  } transition-colors duration-200`}>
                  + {type}
                </button>
              ))}
            </div>

            <div className="ml-2 h-4"></div>

            <div className="ml-2 flex flex-wrap gap-2">
              {shifts.slice(0, 4).map((shift, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOptionClick(shift)}
                  className={`px-4 py-2 border border-[#2b407f] rounded-full ${defaultTextColor} hover:bg-[#2b407f] hover:text-white ${
                    selectedOptions.includes(shift)
                      ? "bg-[#2b407f] text-white"
                      : "bg-transparent"
                  } transition-colors duration-200`}>
                  + {shift}
                </button>
              ))}
            </div>

            <div className="ml-2 flex flex-wrap gap-2">
              {shifts.slice(4, 8).map((shift, index) => (
                <button
                  key={index + 4}
                  type="button"
                  onClick={() => handleOptionClick(shift)}
                  className={`px-4 py-2 border border-[#2b407f] rounded-full ${defaultTextColor} hover:bg-[#2b407f] hover:text-white ${
                    selectedOptions.includes(shift)
                      ? "bg-[#2b407f] text-white"
                      : "bg-transparent"
                  } transition-colors duration-200`}>
                  + {shift}
                </button>
              ))}
            </div>

            <div className="ml-2 flex flex-wrap gap-2">
              {shifts.slice(8).map((shift, index) => (
                <button
                  key={index + 8}
                  type="button"
                  onClick={() => handleOptionClick(shift)}
                  className={`px-4 py-2 border border-[#2b407f] rounded-full ${defaultTextColor} hover:bg-[#2b407f] hover:text-white ${
                    selectedOptions.includes(shift)
                      ? "bg-[#2b407f] text-white"
                      : "bg-transparent"
                  } transition-colors duration-200`}>
                  + {shift}
                </button>
              ))}
            </div>

            <div className="ml-2">
              <label className={`${defaultTextColor} mb-2 block`}>
                Is there a planned start date for this job?
              </label>
            </div>

            <div className="ml-2">
              <label
                htmlFor="yes"
                className="w-full flex items-center p-2 border border-gray-300 rounded-md bg-gray-100 mb-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
                <input
                  type="radio"
                  id="yes"
                  name="startDate"
                  className="mr-2 border-2 border-[#2b407f] rounded-full w-5 h-5 focus:ring-2 focus:ring-[#2b407f]"
                />
                <span className={`${defaultTextColor}`}>Yes</span>
              </label>
            </div>

            <div className="ml-2">
              <label
                htmlFor="no"
                className="w-full flex items-center p-2 border border-gray-300 rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
                <input
                  type="radio"
                  id="no"
                  name="startDate"
                  className="mr-2 border-2 border-[#2b407f] rounded-full w-5 h-5 focus:ring-2 focus:ring-[#2b407f]"
                />
                <span className={`${defaultTextColor}`}>No</span>
              </label>
            </div>

            <div className="mb-6"></div>

            <div className="ml-2">
              <label className={`${defaultTextColor} mb-2 block`}>
                Number of people you wish to hire for this job *
              </label>
            </div>
            <div className="ml-2">
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2b407f]">
                <option value="">Select number</option>
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-2">
              <label className={`${defaultTextColor} mb-2 block`}>
                Recruitment timeline for this job *
              </label>
            </div>
            <div className="ml-2">
              <select className="w-full h-[50px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2b407f]">
                <option value="">Select timeline</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
              </select>
            </div>
            <div className="ml-2 text-center text-2xl text-gray-800">. . .</div>
            <div className="ml-2 flex justify-between mt-6">
              <button
                type="button"
                className={`${defaultTextColor} px-4 py-2 border border-[#2b407f] rounded hover:bg-[#2b407f] hover:text-white transition-colors duration-200`}>
                Back
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors duration-200">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
