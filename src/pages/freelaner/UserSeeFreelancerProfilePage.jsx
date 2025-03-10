import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaDesktop,
  FaPencilAlt,
  FaFileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { FaRegFileAlt } from "react-icons/fa";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
const UserSeeFreelancerPage = () => {
  return (
    <>
      <ScrollIndicator />
      <div className=" min-h-screen ">
        <div className="max-w-7xl mx-auto p-4">
          <div className=" rounded-lg  p-6 mb-4">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="src/assets/imgAboutUs/sanom.jpg"
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-primary"
                />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-CardMainTitle font-bold text-primary">
                        Rin Sanom
                      </h1>
                      <span className="text-cyan-500 text-sm">@rinsanom</span>
                    </div>
                    <p className="text-primary text-TabText">Web Development</p>
                    <div className="mt-1">
                      <span className="bg-green-100 text-green-400 text-xs px-2 py-1 rounded-full font-medium">
                        Online
                      </span>
                    </div>
                    <div className="flex items-center mt-2 text-blue-900  w-fit px-2 py-1 rounded">
                      <FaUser className="mr-1 text-xs" />
                      <span className="text-TabText">Full-time</span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex gap-2">
                    <button className="flex items-center gap-1 border border-red-200 text-red-500 px-3 py-1 rounded-md text-sm">
                      <FaExclamationTriangle className="text-TabText" />
                      Report Account
                    </button>
                    <button className="flex items-center gap-1 bg-blue-900 text-white px-4 py-1 rounded-md text-TabText">
                      <ChatBubbleLeftEllipsisIcon className="w-4 h-4 text-white" />
                      Let's Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h2 className="font-semibold text-CardMainTitle mb-4 text-primary">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="text-primary mt-1 mr-3" />
                    <span className="text-primary text-TabText">
                      Sanom@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-primary mt-1 mr-3" />
                    <span className="text-primary text-TabText">
                      +855 31 34 73 237
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                    <span className="text-primary text-TabText">
                      Phnom Penh, Cambodia
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h2 className="font-semibold text-CardMainTitle mb-4 text-primary">
                  Share my profile
                </h2>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded">
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-cyan-400 text-white rounded">
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded">
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded">
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="font-semibold text-CardMainTitle mb-4 text-primary">
                  My Services
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary">
                      <FaDesktop size={24} />
                    </div>
                    <span className="text-sm mt-2 text-black-text">
                      Programming
                    </span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary">
                      <FaPencilAlt size={24} />
                    </div>
                    <span className="text-sm mt-2 text-black-text">
                      Graphic
                    </span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary">
                      <FaFileAlt size={24} />
                    </div>
                    <span className="text-sm mt-2 text-black-text">
                      Content Creator
                    </span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary">
                      <FaDesktop size={24} />
                    </div>
                    <span className="text-sm mt-2 text-black-text">
                      Programming
                    </span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary">
                      <FaDesktop size={24} />
                    </div>
                    <span className="text-sm mt-2 text-black-text">
                      Programming
                    </span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary">
                      <FaFileAlt size={24} />
                    </div>
                    <span className="text-sm mt-2 text-black-text">
                      Content Creator
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h2 className="font-semibold text-CardMainTitle text-primary mb-4">
                  About
                </h2>
                <p className="text-black-text text-TabText">
                  Recently, I had traveled to my parents for a quiet weekend of
                  home. It was warm, sunny, and I was studying for upcoming
                  interviews. I already had completed material full of details
                  from company websites, job postings, online presentations,
                  recruiter YouTube videos about navigating the corporate
                  interview process and I had even looked at what various hiring
                  managers had to say about what they look for in candidates
                  when they show up in conversation.
                </p>
              </div>

              <div className="">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-CardMainTitle font-semibold text-primary">
                    CV
                  </h2>
                  <a href="#" className="text-primary text-TabText font-bold">
                    Resume
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                  <div className="flex items-center">
                    <div className=" mr-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-10 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <FaRegFileAlt />
                      </svg>
                    </div>
                    <span className="font-medium text-primary">
                      UI/UX designer.pdf
                    </span>
                  </div>
                </div>

                <h2 className="font-semibold text-CardMainTitle text-primary mb-4">
                  Work Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium mb-2 text-primary text-TabText">
                      Work Experience
                    </h3>
                    <div className="text-black-text text-TabText">
                      <p>University of Fine Art</p>
                      <p>Bachelor's degree, Graphic Design</p>
                      <p className="text-gray-500">2014 - 2018</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium mb-2 text-primary text-TabText">
                      Work Experience
                    </h3>
                    <div className="text-black-text text-TabText">
                      <p>University of Fine Art</p>
                      <p>Bachelor's degree, Graphic Design</p>
                      <p className="text-gray-500">2014 - 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSeeFreelancerPage;
