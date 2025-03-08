import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import NavbarLogin from "./NavbarLogin";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div>
      <NavbarLogin />
      <Outlet />
      <Footer />
    </div>
  );
}
