import { FaMoon, FaBell, FaGlobe, FaUserCircle } from "react-icons/fa";
import Footer from "../components/layouts/Footer";

const HiringStats = () => {
  const freelancers = [
    { title: "Programmer", percentage: 70 },
    { title: "Graphic", percentage: 78 },
    { title: "Content Creator", percentage: 80 },
  ];

  const jobseekers = [
    { title: "Web Design", percentage: 100 },
    { title: "Social Media", percentage: 85 },
    { title: "Online Shopping", percentage: 45 },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-2/3 flex">
        <div className="w-1/2 pr-4 border-r">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Freelancers Hiring
          </h2>
          {freelancers.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>{item.title}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-300 rounded-full mt-1">
                <div
                  className="h-2 bg-[#6AA6D0] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Jobseekers Hiring
          </h2>
          {jobseekers.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>{item.title}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-300 rounded-full mt-1">
                <div
                  className="h-2 bg-[#6AA6D0] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DashboardEmployer = () => {
  return (
    <div className="bg-white">
      <main className="bg-white py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Cameron Williamson"
                  className="rounded-full border-4 border-white shadow-lg w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Cameron Williamson
              </h1>
              <p className="text-gray-600 text-center">Business Man</p>

              <div className="flex items-center mt-4 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>

                {/* Mail Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>
                  As a business leader based in San Francisco, I specialize in
                  managing and growing businesses.
                </p>
              </div>
            </div>
            <div className="bg-[#6AA6D0] rounded-3xl p-8 text-white mb-8">
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-xl">Age: 27</p>
                </div>

                <div className="text-center">
                  <p className="text-xl">Status: Single</p>
                </div>

                <div className="text-center">
                  <p className="text-xl">Location: Belgrad-Serbian</p>
                </div>

                <div className="text-center">
                  <p className="text-xl">Speciality: Kickbox</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="bg-white text-black px-4 py-2 rounded-full">
                    Friendly
                  </span>
                  <span className="bg-white text-black px-4 py-2 rounded-full">
                    Loyal
                  </span>
                  <span className="bg-white text-black px-4 py-2 rounded-full">
                    Patient
                  </span>
                  <span className="bg-white text-black px-4 py-2 rounded-full">
                    Driven
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Bio</h2>
              <p className="text-gray-700 mb-4">
                As a business owner, I am dedicated to connecting with skilled
                freelancers and professionals to drive success. I utilize an
                efficient hiring platform to post job opportunities, manage
                applications, and collaborate with talented individuals. My goal
                is to build strong partnerships to help businesses grow and
                thrive.
              </p>

              <h2 className="text-lg font-semibold mb-2 mt-6">Approach</h2>
              <p className="text-gray-700 mb-4">
                I am proactive and detail-oriented, always looking for ways to
                improve and address needs before they arise. I value
                collaboration and foster an environment where everyone can
                contribute to achieving common goals. My adaptability allows me
                to adjust strategies to meet market demands, while my
                results-driven approach ensures I focus on outcomes that drive
                success.
              </p>

              <h2 className="text-lg font-semibold mb-2 mt-6">
                Freelancer Hiring
              </h2>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Programming</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#6AA6D0] h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Web Design</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#6AA6D0] h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Graphic Design</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#6AA6D0] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Content Creation
                    </span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#6AA6D0] h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Hiring For</h2>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center p-4 h-auto border-2 border-blue-200 hover:bg-blue-50 rounded-md">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mb-2">
                      <span className="text-blue-600 font-bold">P</span>
                    </div>
                    <span className="text-sm font-medium">Programming</span>
                  </div>
                </button>

                <button className="flex items-center justify-center p-4 h-auto border-2 border-blue-200 hover:bg-blue-50 rounded-md">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mb-2">
                      <span className="text-blue-600 font-bold">G</span>
                    </div>
                    <span className="text-sm font-medium">Graphic Design</span>
                  </div>
                </button>

                <button className="flex items-center justify-center p-4 h-auto border-2 border-blue-200 hover:bg-blue-50 rounded-md">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mb-2">
                      <span className="text-blue-600 font-bold">C</span>
                    </div>
                    <span className="text-sm font-medium">Content Creator</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default DashboardEmployer;
