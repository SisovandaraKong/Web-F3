import React, { useState } from "react";
import { GoSun } from "react-icons/go";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";

export default function NavbarLogin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary w-full shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="src/assets/Footer/Logo3.png"
            className="md:h-8 h-4"
            alt="JobSeek Logo"
          />
        </a>

        {/* Hamburger Menu Button */}
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

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 bg-primary md:bg-transparent p-4 md:p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "text-white hover:text-secondary block py-2 px-3 md:p-0",
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "text-white hover:text-secondary block py-2 px-3 md:p-0",
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "text-white hover:text-secondary block py-2 px-3 md:p-0",
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          <GoSun className="text-secondary text-[24px]" />
          <FaRegBell className="text-secondary text-[24px]" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <img
              src="src/assets/Footer/EnglishLogo.jpg"
              alt="England Flag"
              className="w-[40px] h-[20px]"
            />
            <img
              src="src/assets/Footer/khmerLogo.jpg"
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
