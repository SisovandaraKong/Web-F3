import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import RootLayout from "./components/layouts/RootLayout.jsx";
// import FreelancerPage from "./pages/FreelancerPage.jsx";
// <Route path="/freelancer" element={<FreelancerPage />} />
import Login from "./forms/Login.jsx";
import CreateAccount from "./forms/CreateAccount.jsx";
import FAQs from "./forms/FAQs";
import RegisterFreelancer from "./forms/RegisterFreelancer.jsx";
import RegisterBusinessOwner from "./forms/RegisterBusinessOwner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/RegisterFreelancer" element={<RegisterFreelancer />} />
          <Route path="/RegisterBusinessOwner" element={<RegisterBusinessOwner />} />
          <Route path="/FAQs" element={<FAQs />} />
        <Route element={<RootLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
