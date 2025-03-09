import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavbarLogin from "./NavbarLogin";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ toggleDarkMode, isDarkMode }) {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-[#f5f5f5] dark:bg-[#111827]">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {/* <NavbarLogin toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} /> */}
      <Outlet />
      <Footer/>
    </div>
  );
}