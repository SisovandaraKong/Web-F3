import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import FreelancerProfile from "./pages/FreelancerProfile.jsx";
import UserSeeFreelancerProfilePage from "./pages/UserSeeFreelancerProfilePage.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import FullTimePage from "./pages/FullTimePage.jsx";
import PartTimePage from "./pages/PartTimePage.jsx";
import FreelancerPage from "./pages/FreelancerPage.jsx";
import BusinessOwnerPage from "./pages/BusinessOwnerPage.jsx";
import RegisterFreelancer from "./components/auth/RegisterFreelancer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/full-time" element={<FullTimePage/>} />
          <Route path="/part-time" element={<PartTimePage/>} />
          <Route path="/freelancer-page" element={<FreelancerPage/>} />
          <Route path="/business-owner" element={<BusinessOwnerPage/>} />
        </Route>
           <Route path="/register-freelancer" element={<RegisterFreelancer/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
