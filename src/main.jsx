import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import RootLayout from "./components/layouts/RootLayout.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import RegisterFreelancer from "./components/auth/RegisterFreelancer.jsx";
import Login from "./components/auth/Login.jsx";
import AboutUsPage from "./pages/mianPage/AboutUsPage.jsx";
import FreelancerFitPage from "./pages/freelaner/FreelancerFitPage.jsx";
import FreelancerProfile from "./pages/freelaner/FreelancerProfile.jsx";
import UserSeeFreelancerProfilePage from "./pages/freelaner/UserSeeFreelancerProfilePage.jsx";
import ChatbotPage from "./pages/chatBot/ChatbotPage.jsx";
import FreelancerPage from "./pages/freelaner/FreelancerPage.jsx";
import JobDescription from "./pages/creatAtJob/JobDescription.jsx";
import ServiceDetail from "./pages/freelaner/ServideDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/freelancer-feed" element={<FreelancerFitPage />} />
              <Route
                path="/freelancer-profile"
                element={<FreelancerProfile />}
              />
              <Route
                path="/freelancer-profile"
                element={<UserSeeFreelancerProfilePage />}
              />
              <Route path="/chat-bot" element={<ChatbotPage />} />
              <Route path="/freelancer-page" element={<FreelancerPage />} />
              <Route path="/job-description" element={<JobDescription/>} />
              <Route path="/freelancer-page/:id" element={<ServiceDetail />} />
            </Route>
            <Route
              path="/register-freelancer"
              element={<RegisterFreelancer />}
            />
            <Route path="/register-freelancer/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
