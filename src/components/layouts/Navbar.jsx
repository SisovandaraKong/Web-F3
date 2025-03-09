import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoSun, GoMoon } from "react-icons/go"; // Added GoMoon for dark mode icon
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router"; // Note: Should be "react-router-dom" (fixing import)
import { useTheme } from "../../context/ThemeContext"; // Import ThemeContext
import "../../i18n"; // Import i18n configuration
import Button from "../button/Button";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleDarkMode } = useTheme(); // Use theme context
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-primary w-full shadow-md dark:bg-primary sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="src/assets/images/Logo3.png"
            className="md:h-8 h-4"
            alt="JobSeek Logo"
          />
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white rounded-lg focus:outline-none dark:text-gray-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isOpen ? "block" : "hidden"
          }`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 bg-primary md:bg-transparent p-4 md:p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "text-white hover:text-secondary",
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }>
                {t("Home")}
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row md:space-x-6 bg-primary md:bg-transparent p-4 md:p-0">
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-white hover:text-secondary dark:text-gray-200 dark:hover:text-secondary">
                {t("Dropdown")}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 py-1 px-3 bg-primary rounded-lg shadow-sm w-44 dark:bg-gray-700">
                  <ul className="py-2 space-y-2 text-sm justify-between text-gray-700 dark:text-gray-200">
                    <li>
                      <NavLink
                        to="/freelancer-page"
                        className={({ isActive, isPending, isTransitioning }) =>
                          [
                            "text-white hover:text-secondary",
                            isPending ? "pending" : "",
                            isActive ? "active" : "",
                            isTransitioning ? "transitioning" : "",
                          ].join(" ")
                        }>
                        {t("freelancer")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/full-time"
                        className={({ isActive, isPending, isTransitioning }) =>
                          [
                            "text-white hover:text-secondary",
                            isPending ? "pending" : "",
                            isActive ? "active" : "",
                            isTransitioning ? "transitioning" : "",
                          ].join(" ")
                        }>
                        {t("fullTime")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/part-time"
                        className={({ isActive, isPending, isTransitioning }) =>
                          [
                            "text-white hover:text-secondary",
                            isPending ? "pending" : "",
                            isActive ? "active" : "",
                            isTransitioning ? "transitioning" : "",
                          ].join(" ")
                        }>
                        {t("partTime")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/business-owner"
                        className={({ isActive, isPending, isTransitioning }) =>
                          [
                            "text-white hover:text-secondary",
                            isPending ? "pending" : "",
                            isActive ? "active" : "",
                            isTransitioning ? "transitioning" : "",
                          ].join(" ")
                        }>
                        {t("businessOwner")}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row md:space-x-6 bg-primary md:bg-transparent p-4 md:p-0">
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "text-white hover:text-secondary",
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }>
                {t("aboutUs")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDark ? (
              <GoMoon className="text-secondary text-[24px] cursor-pointer" />
            ) : (
              <GoSun className="text-secondary text-[24px] cursor-pointer" />
            )}
          </button>
          <FaRegBell className="text-secondary text-[24px] cursor-pointer" />
        </div>

        {/* Language Switch */}
        <div className="flex items-center space-x-4">
          <img
            onClick={() => changeLanguage("en")}
            src="src/assets/images/England.png"
            alt="English"
            className="w-[40px] h-[20px] cursor-pointer"
          />
          <img
            onClick={() => changeLanguage("km")}
            src="src/assets/images/Cambodia.png"
            alt="Khmer"
            className="w-[40px] h-[20px] cursor-pointer"
          />
          <button className="text-white px-[17px] py-[9px] border-2 border-secondary rounded-md cursor-pointer">
            {t("joinAsBusiness")}
          </button>
          <NavLink to="/register-freelancer">
            <Button color={"bg-secondary cursor-pointer"} text={t("signUp")} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
