import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavbarLogin from "./NavbarLogin";
import Footer from "./Footer";

export default function RootLayout({ toggleDarkMode, isDarkMode }) {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <NavbarLogin toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Outlet />
    </div>
  );
}