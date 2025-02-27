import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import NavbarLogin from "./NavbarLogin";

export default function RootLayout() {
  return (
    <div>
      <NavbarLogin />
      <Outlet />
    </div>
  );
}
