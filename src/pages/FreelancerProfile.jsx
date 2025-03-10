import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaPenNib } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FreelancerProfile = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto min-h-screen dark:bg-black">
        <div className="p-5">
          <h1 className="text-Sub2Title font-bold text-primary dark:text-white">
            View Profile
          </h1>
        </div>
        <div className="flex space-x-2 justify-end mr-5">
          <Link to="/FreelancerProfileEdit">
            <button className=" flex items-center px-3 py-1.5 border border-primary rounded bg-white text-TabText font-medium text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit
            </button>
          </Link>

          <button className="flex items-center px-3 py-1.5 bg-primary hover:bg-primary-hover rounded text-TabText font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <ChatBubbleLeftEllipsisIcon className="w-4 h-4 text-white" />
            </svg>
            Let's Chat
          </button>
        </div>
        <div className="flex flex-col md:flex-row px-5 pb-10 gap-6">
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-900">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4 ">
                  <img
                    src="src/assets/imgAboutUs/sanom.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                  />
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-CardMainTitle font-bold text-primary dark:text-white">
                    Rin Sanom
                  </h2>
                  <span className="text-primary text-sm dark:text-white">
                    • Web Development
                  </span>

                  <div className="flex items-center justify-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-900 mr-1 dark:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <FaUserAlt />
                    </svg>
                    <span className="text-sm text-primary dark:text-white">
                      Full-time
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-semibold text-primary mb-3 text-CardMainTitle dark:text-white">
                  Contact information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-hover mr-2 mt-0.5 dark:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm text-primary dark:text-white">
                      Sanom@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-hover mr-2 mt-0.5 dark:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-primary dark:text-white">
                      +855 39 24 23 237
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-hover mr-2 mt-0.5 dark:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-primary dark:text-white">
                      Phnom Penh, Cambodia
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="font-semibold text-primary mb-3 text-CardMainTitle dark:text-white">
                  Share my profile
                </h3>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-red-600 rounded flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-green-500 rounded flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-CardMainTitle font-bold text-primary dark:text-white">
                About
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-5 mb-6 dark:bg-gray-900">
              <p className="text-TabText text-black-text dark:text-white leading-relaxed ">
                Recently, I had traveled to my parents for a quiet weekend at
                home. I was warm, cozy, and was studying for upcoming
                interviews. I already had a dedicated notebook full of doodles
                from company websites, job postings, online presentations, and
                that kind of stuff some of these companies is so proud of. I had
                even looked at what tools some of these companies use and tried
                to familiarize myself with should it come up in conversation.
              </p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-primary dark:text-white">
                CV
              </h2>
              <a
                href="#"
                className="text-primary text-sm font-bold dark:text-white"
              >
                Resume
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 dark:bg-gray-900">
              <div className="flex items-center ">
                <div className=" mr-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-10 text-primary dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FaRegFileAlt />
                  </svg>
                </div>
                <span className="font-medium text-primary text-TabText dark:text-white">
                  UI/UX designer.pdf
                </span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary mb-4 dark:text-white">
              Work Experience
            </h2>

            <div className="bg-white border border-transparent hover:border-secondary  rounded-lg shadow-sm p-5 mb-4 transition-transform transform hover:scale-105 dark:bg-gray-900">
              <h3 className="font-semibold text-primary mb-2 dark:text-white">
                Work Experience
              </h3>
              <div className="mt-1">
                <div className="text-TabText text-black-text dark:text-white">
                  University of Fine Art
                </div>
                <div className="font-medium text-primary dark:text-white">
                  Bachelor's degree, Graphic Design
                </div>
                <div className="text-TabText text-black-text">2018 - 2021</div>
              </div>
            </div>

            <div className="bg-white border border-transparent hover:border-secondary  rounded-lg shadow-sm p-5 mb-6 transition-transform transform hover:scale-105 dark:bg-gray-900">
              <h3 className="font-semibold text-primary mb-2 dark:text-white">
                Work Experience
              </h3>
              <div className="mt-1">
                <div className="text-TabText text-black-text">
                  University of Fine Art
                </div>
                <div className="font-medium text-primary dark:text-white">
                  Bachelor's degree, Graphic Design
                </div>
                <div className="text-TabText text-black-text">2014 - 2017</div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary mb-4 dark:text-white">
              My Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white border border-transparent hover:border-secondary rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105 dark:bg-gray-900">
                <div className="p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-13 w-13 text-blue-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <RiComputerLine />
                  </svg>
                </div>
                <span className="text-TabText text-black-text dark:text-white">
                  Programming
                </span>
              </div>

              <div className="bg-white border border-transparent hover:border-secondary rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105 dark:bg-gray-900">
                <div className="p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-13 w-13 text-blue-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FaPenNib />
                  </svg>
                </div>
                <span className="text-TabText text-black-text dark:text-white">
                  Graphic
                </span>
              </div>

              <div className="bg-white border border-transparent hover:border-secondary rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105 dark:bg-gray-900">
                <div className="p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-13 w-13 text-blue-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FaPencilAlt />
                  </svg>
                </div>
                <span className="text-TabText text-black-text dark:text-white">
                  Content Creator
                </span>
              </div>

              <div className="bg-white border border-transparent hover:border-secondary rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105 dark:bg-gray-900">
                <div className="p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-13 w-13 text-blue-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <RiComputerLine />
                  </svg>
                </div>
                <span className="text-TabText text-black-text dark:text-white">
                  Programming
                </span>
              </div>

              <div className="bg-white border border-transparent hover:border-secondary rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105 dark:bg-gray-900">
                <div className="p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-13 w-13 text-blue-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FaPenNib />
                  </svg>
                </div>
                <span className="text-TabText text-black-text dark:text-white">
                  Graphic
                </span>
              </div>

              <div className="bg-white border border-transparent hover:border-secondary rounded-lg shadow-sm p-5 flex flex-col items-center transition-transform transform hover:scale-105 dark:bg-gray-900">
                <div className="p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-13 w-13 text-blue-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FaPencilAlt />
                  </svg>
                </div>
                <span className="text-TabText text-black-text dark:text-white">
                  Content Creator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerProfile;
