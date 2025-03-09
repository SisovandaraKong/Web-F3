import React, { useState, useEffect } from "react";
import { LuBotMessageSquare } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

export default function NavbarLogin() {
  const [darkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation(); // i18n hook for translation

  const navItems = [
    { name: "Home", link: "/", active: true },
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
    { name: "About Us", link: "aboutus" },
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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <nav className="bg-primary border-gray-200 sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
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
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        {t(item.name)}{" "}
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
                                      {t(dropItem.name)}
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
                                    {t(dropItem.name)}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                          <div className="py-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                              {t("Sign out")}
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
                      aria-current={item.active ? "page" : ""}>
                      {t(item.name)}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  {languages.map((language) => (
                    <Button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                    >
                      <img
                        src={language.flagUrl}
                        alt={language.name}
                        className="w-6 h-6 rounded-full"
                      />
                    </Button>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <button onClick={toggleDarkMode}>
            <span className="sr-only">Toggle dark mode</span>
            <LuBotMessageSquare size={28} />
          </button>
        </div>
      </nav>
    </>
  );
}
