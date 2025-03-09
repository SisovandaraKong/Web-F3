import React from "react";
import { MdWarningAmber } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { VscCheckAll } from "react-icons/vsc";

const ProfileInformation = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="mt-[64px]"></div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-[#111827] p-6 rounded-lg shadow-md w-[277px] border border-gray-200">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-[#2b407f] mb-2">
                Profile Information
              </h2>
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/44db/3508/2d4f3fcd249f00dae6e50ccebcca8f1c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZEZojj5Dt0CRguX0HM4l7b5hd1FWFRaemBfcKTewtLWJ9QPW4pHmrPj4EksBYjIZxWlhvFcpHhvrq48S8Cu4U2EfrqlTHqFwHbNg2u6vOaKpY73mp2YTA9bgQG5wMJ4lr9GNfeEeTb6UngYCWW07rLY1ruXagqQqcOuSko5PTAhFcTs3kclbvsCghfo9tguWY1uBwYbei7lb~SkMFdgkjRFlI38NmBVn0rixKa0ee~h9dUrOjV5mxmM~JzZvr6oIsLtUbU4eronodsF0U2ITyYwZoGJrFwNrg6OMqNzLrxRg9OqU1071Zind5ich5r0akR4H2cO8Biq9XG-XbAuxOQ__"
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-row w-full">
                  <h2 className="text-xl font-semibold text-[#2b407f] self-start ml-4 mb-6">
                    Jennie Kim
                  </h2>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm">UI/UX Designer</p>
                  <p className="flex items-center justify-center text-yellow-500 mb-2">
                    <span>★★★★☆</span>
                    <span className="text-gray-600 ml-1">(23)</span>
                  </p>
                  <p className="text-gray-600 text-sm">Member since 2021</p>
                  <p className="text-gray-600 text-sm">Active 5 mins ago</p>
                  <p className="text-[#54669d] text-sm">Full-time</p>
                  <button className="flex flex-row items-center justify-center mt-4 bg-[#0a2473] w-[186px] h-[44px] text-white font-semibold px-4 py-2 rounded-lg">
                    <FaUserPlus className="text-lg mr-2" /> Hire Me
                  </button>
                  <button className="flex flex-row items-center mt-2 text-[#e63946] w-[186px] h-[44px] border border-[#0a2473] font-semibold px-4 py-2 rounded-lg hover:bg-[#e63946] hover:text-white transition-all ease">
                    <MdWarningAmber className="text-lg mr-2" /> Report Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] p-6 rounded-lg shadow-md w-[277px] border border-gray-200">
            <div className="flex flex-col">
              <h3 className="text-lg font-medium text-blue-700 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600 flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Moh@gmail.com
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
                +855 31 34 73 327
              </p>
              <p className="text-gray-600 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Phnom Penh, Cambodia
              </p>
            </div>
          </div>
        </div>

        <div className=" p-6 flex-1 mt-6">
          <div className="flex justify-end mb-4">
            <button className="flex flex-row gap-2 items-center text-[#2b407f] font-semibold px-4 py-2 rounded-lg mr-2 border border-[#2b407f] hover:bg-[#0a2473] hover:text-white transition-all ease">
              <FaRegHeart /> Add to Favorite
            </button>
            <button className="flex flex-row gap-2 items-center bg-[#0a2473] font-semibold text-white px-4 py-2 rounded-lg border border-[#2b407f] hover:bg-white hover:text-[#2b407f] transition-all ease">
              <BsFillChatSquareTextFill /> Let's Chat
            </button>
          </div>

          <div className="bg-white dark:bg-[#111827] p-4 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-[#2b407f] mb-6">
              Welcome to my profile!
            </h2>
            <p className="text-gray-600">
              We are delighted to introduce you to Jobseek, a platform committed
              to fostering growth, innovation, and excellence. Whether you are
              seeking new career opportunities or looking to collaborate with
              top industry professionals, we are excited to have you explore
              what we have to offer. At Jobseek, we believe in the power of
              knowledge, teamwork, and passion to create meaningful change in
              the digital world.
            </p>
          </div>
          <div className="my-10 text-[16px] text-[#2b407f] font-bold">
            Overview
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-[282px] h-[169px] p-4 rounded-lg border border-[#509bb3] flex flex-col items-start justify-center gap-4">
              <svg
                className="w-6 h-6 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-gray-800">50</p>
                <p className="text-gray-600">Applied</p>
              </div>
            </div>
            <div className="w-[282px] h-[169px] p-4 rounded-lg border border-[#9747ff] flex flex-col items-start justify-center gap-4">
              <svg
                className="w-6 h-6 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-gray-800">30</p>
                <p className="text-gray-600">Active jobs</p>
              </div>
            </div>
            <div className="w-[282px] h-[169px] p-4 rounded-lg border border-[#a791b4] flex flex-col items-start justify-center gap-4">
              <svg
                className="w-6 h-6 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-gray-800">45</p>
                <p className="text-gray-600">Shortlisted Reviews</p>
              </div>
            </div>
            <div className="w-[282px] h-[169px] p-4 rounded-lg border border-[#5f6edf] flex flex-col items-start justify-center gap-4">
              <VscCheckAll/>
              <div>
                <p className="text-2xl font-bold text-gray-800">60</p>
                <p className="text-gray-600">Total Applied</p>
              </div>
            </div>
            <div className="w-[282px] h-[169px] p-4 rounded-lg border border-[#bedda1] flex flex-col items-start justify-center gap-4">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-gray-800">35</p>
                <p className="text-gray-600">Candidates Shortlisted</p>
              </div>
            </div>
            <div className="w-[282px] h-[169px] p-4 rounded-lg border border-[#e63946] flex flex-col items-start justify-center gap-4">
              <svg
                className="w-6 h-6 mr-2 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-gray-800">20</p>
                <p className="text-gray-600">Rejected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;