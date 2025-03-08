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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/640px-Flag_of_Cambodia.svg.png",
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
      <nav className="bg-primary border-gray-200  sticky top-0 z-50">
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
                        <button className="flex flex-col items-center gap-[2px]">
                          <div className="w-10 h-5">
                            <img
                              src={lang.flagUrl}
                              className="h-full w-full object-cover mt-1"
                              alt={`${lang.name} flag`}
                            />
                          </div>
                          <div className="h-5 w-14 flex items-center">
                            <span className="text-xs w-full text-white mt-1">
                              {lang.name}
                            </span>
                          </div>
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
            <button className="text-white  px-[17px] py-[9px] border-2 border-white rounded-md">
              Joint As Busssinis{" "}
            </button>
            <Button color={"bg-secondary"} text="As Freelancer " />
          </div>
        </div>
      </nav>
    </>
  );
}
