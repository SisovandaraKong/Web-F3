import React, { useState, useEffect } from "react";
import { LuBotMessageSquare } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import Button from "../button/Button";

export default function NavbarLogin() {
  const [darkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
      active: true,
    },
    {
      name: "Jobs",
      link: "jobs",
      hasDropdown: true,
      dropdownItems: [
        { name: "Dashboard", link: "#" },
        {
          name: "Dropdown",
          link: "#",
          hasNestedDropdown: true,
          nestedItems: [
            { name: "Overview", link: "#" },
            { name: "My downloads", link: "#" },
            { name: "Billing", link: "#" },
            { name: "Rewards", link: "#" },
          ],
        },
        { name: "Earnings", link: "#" },
      ],
    },
    {
      name: "About Us",
      link: "aboutus",
    },
  ];
  const languages = [
    {
      name: "English",
      code: "en",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png",
    },
    {
      name: "ភាសារខ្មែរ",
      code: "km",
      flagUrl:
        "data:image/png;base64,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",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (doubleDropdownOpen) setDoubleDropdownOpen(false);
  };

  const toggleDoubleDropdown = (e) => {
    e.stopPropagation();
    setDoubleDropdownOpen(!doubleDropdownOpen);
  };

  return (
    <>
      <nav className="bg-primary border-gray-200 dark:bg-gray-900 dark:border-gray-700  sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="src/assets/Navbar/Logo3.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isNavOpen}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        {item.name}{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6">
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
                        <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {item.dropdownItems.map((dropItem, dropIndex) => (
                              <li key={dropIndex}>
                                {dropItem.hasNestedDropdown ? (
                                  <div className="relative">
                                    <button
                                      onClick={toggleDoubleDropdown}
                                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                      {dropItem.name}
                                      <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6">
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m1 1 4 4 4-4"
                                        />
                                      </svg>
                                    </button>
                                    {doubleDropdownOpen && (
                                      <div className="absolute left-full -top-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                          {dropItem.nestedItems.map(
                                            (nestedItem, nestedIndex) => (
                                              <li key={nestedIndex}>
                                                <a
                                                  href={nestedItem.link}
                                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                  {nestedItem.name}
                                                </a>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <a
                                    href={dropItem.link}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    {dropItem.name}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                          <div className="py-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                              Sign out
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className={`block py-2 px-3 ${
                        item.active
                          ? "text-white-text rounded-sm md:bg-transparent md:text-white-text md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                          : "text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }`}
                      aria-current={item.active ? "page" : undefined}>
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5">
              <button
                onClick={toggleDarkMode}
                className="text-secondary hover:text-secondary-hover">
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </button>

              <a href="#">
                <LuBotMessageSquare className="size-6 text-secondary hover:text-secondary-hover" />
              </a>
            </div>

            <div className="">
              <ul className="flex">
                {languages.map((lang, index) => (
                  <React.Fragment key={lang.code}>
                    <li>
                      <a href="#">
                        <button className="flex flex-col items-center gap-1">
                          <img
                            src={lang.flagUrl}
                            className="h-3 mt-1"
                            alt={`${lang.name} flag`}
                          />
                          <span className="text-sm text-white ">
                            {lang.name}
                          </span>
                        </button>
                      </a>
                    </li>
                    {index < languages.length - 1 && (
                      <span className="mb-5">|</span>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <Button color={"bg-secondary"} text="Sign In" />
          </div>
        </div>
      </nav>
    </>
  );
}
