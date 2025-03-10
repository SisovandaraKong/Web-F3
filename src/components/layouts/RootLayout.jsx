import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollIndicator from "../scrollIndicator/scrollIndicator";


export default function RootLayout() {
  return (
    <div>
      <ScrollIndicator/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
