import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Note the correction to react-router-dom
import "./index.css";
import RootLayout from "./components/layouts/RootLayout.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import RegisterFreelancer from "./components/auth/RegisterFreelancer.jsx";
import Login from "./components/auth/Login.jsx";
import AboutUsPage from "./pages/mianPage/AboutUsPage.jsx";
import FreelancerProfile from "./pages/freelaner/FreelancerProfile.jsx";
import BusinessOwnerProfile from "./pages/businessOwner/BusinessOwnerProfile.jsx";
import UserSeeFreelancerProfilePage from "./pages/freelaner/UserSeeFreelancerProfilePage.jsx";
import ChatbotPage from "./pages/chatBot/ChatbotPage.jsx";
import FreelancerPage from "./pages/freelaner/FreelancerPage.jsx";
import CreateServicePage from "./pages/creatAtJob/CreatAtService.jsx";
import RegisterBusinessOwner from "./components/auth/RegisterBusinessOwner.jsx";
import JobPost from "./pages/businessOwner/JobPost.jsx";
import ServiceDetail from "./pages/freelaner/ServideDetail.jsx";
import { useEffect, useState } from "react";
import CreateJob from "./pages/creatAtJob/CreateJob.jsx";
import EditProfileBusinessOwner from "./pages/sitting/EditProfileBusinessOwner.jsx";
import JobDetailPage from "./pages/businessOwner/jobDetailPage.jsx";
const ProtectedRoute = ({ children, allowedRoles }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("userRole");

    if (token) {
      setUserRole(role);
    }

    setLoading(false);
  }, []);

  return children;
};
const AppRoutes = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/jos-post" element={<JobPost />} />
      <Route
        path="/job-post"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER"]}>
            <JobPost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/freelancer-profile"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER"]}>
            <FreelancerProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-service"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER"]}>
            <CreateServicePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/freelancer-page"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER"]}>
            <FreelancerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRoles={["BUSINESS_OWNER"]}>
            <BusinessOwnerProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post-job"
        element={
          <ProtectedRoute allowedRoles={["BUSINESS_OWNER"]}>
            <JobPost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/freelancer-service"
        element={
          <ProtectedRoute allowedRoles={["BUSINESS_OWNER"]}>
            <FreelancerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-job"
        element={
          <ProtectedRoute allowedRoles={["BUSINESS_OWNER"]}>
            <CreateJob />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-profile-business-owner"
        element={
          <ProtectedRoute allowedRoles={["BUSINESS_OWNER"]}>
            <EditProfileBusinessOwner />
          </ProtectedRoute>
        }
      />

      {/* Public routes that still require authentication */}
      <Route
        path="/freelancer-page/:id"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER", "BUSINESS_OWNER"]}>
            <ServiceDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/job-detail/:id"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER", "BUSINESS_OWNER"]}>
            <JobDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-see-freelancer-profile"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER", "BUSINESS_OWNER"]}>
            <UserSeeFreelancerProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat-bot"
        element={
          <ProtectedRoute allowedRoles={["FREELANCER", "BUSINESS_OWNER"]}>
            <ChatbotPage />
          </ProtectedRoute>
        }
      />
    </Route>

    {/* Authentication routes */}
    <Route path="/register-freelancer" element={<RegisterFreelancer />} />
    <Route path="/register-businessowner" element={<RegisterBusinessOwner />} />
    <Route path="/register-freelancer/login" element={<Login />} />
  </Routes>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
