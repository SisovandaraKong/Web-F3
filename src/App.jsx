import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import DashboardEmployer from "./pages/DashboradEmployer";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <DashboardEmployer />
    </>
  );
}

export default App;
