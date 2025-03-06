import React, { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={toggleDropdown}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`w-full md:block md:w-auto ${dropdownOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-gray-50 dark:bg-gray-800 rounded-lg md:bg-transparent">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 dark:text-white"
              >
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg w-44">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Dark Mode & Language Selector */}
        <div className="flex items-center gap-5">
          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-white">
            {darkMode ? (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          <a href="#">
            <button className="bg-blue-600 px-5 py-1 rounded-lg text-white hover:bg-blue-700">
              Sign in
            </button>
          </a>

          {/* Language Selection */}
          <div className="flex items-center gap-2">
            <a href="#">
              <button className="flex flex-col items-center gap-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  className="h-3"
                  alt="English"
                />
                <span className="text-sm text-gray-600 dark:text-white">English</span>
              </button>
            </a>
            <span>|</span>
            <a href="#">
              <button className="flex flex-col items-center gap-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"
                  className="h-3"
                  alt="Khmer"
                />
                <span className="text-sm text-gray-600 dark:text-white">Khmer</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
