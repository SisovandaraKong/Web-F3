import React, { useState } from "react";
import { GoSun } from "react-icons/go";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary w-full shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="#" className="flex items-center space-x-3">
          <img
            src="src/assets/Logo3.png"
            className="md:h-8 h-4"
            alt="JobSeek Logo"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white rounded-lg focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 bg-primary md:bg-transparent p-4 md:p-0">
            <li>
              <a
                href="#"
                className="text-white hover:text-secondary block py-2 px-3 md:p-0"
              >
                Notification
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 text-white-text rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Dropdown{" "}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <GoSun className="text-secondary text-[24px]" />
          <FaRegBell className="text-secondary text-[24px]" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <img
              src="src/assets/English.png"
              alt="England Flag"
              className="w-[40px] h-[20px]"
            />
            <img
              src="src/assets/Cambodia.png"
              alt="Cambodia Flag"
              className="w-[40px] h-[20px]"
            />
          </div>
          <FaRegUserCircle className="text-white text-[30px]" />
        </div>
      </div>
    </nav>
  );
}
