import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import FreelancerProfile from "./pages/FreelancerProfile.jsx";
import UserSeeFreelancerProfilePage from "./pages/UserSeeFreelancerProfilePage.jsx";
import App from "./App.jsx";
import RootLayoutwithSidebar from "./components/layouts/RootLayoutwithSidebar.jsx";
import FreelancerProfileEdit from "./pages/FreelancerProfileEdit.jsx";
import UserSeeFreelancerProjectProgramming from "./pages/UserSeeFreelancerProjectProgramming.jsx";
import UserSeeFreelancerProjectGraphic from "./pages/UserSeeFreelancerProjectGraphic.jsx";
import UserSeeFreelancerProjectContentCreator from "./pages/UserSeeFreelancerProjectContentCreator.jsx";
import CardDetailProgramming from "./pages/CardDetailProgramming.jsx";
import CardDetailGraphic from "./pages/CardDetailGraphic.jsx";
import CardDetailContentCreator from "./pages/CardDetailContentCreator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/userSeeFreelancerProfilePage" element={<UserSeeFreelancerProfilePage />} />
          <Route path="/userSeeFreelancerProjectProgramming" element={<UserSeeFreelancerProjectProgramming />} />
          <Route path="/userSeeFreelancerProjectGraphic" element={<UserSeeFreelancerProjectGraphic />} />
          <Route path="/userSeeFreelancerProjectContentCreator" element={<UserSeeFreelancerProjectContentCreator />} />
          <Route path="/cardDetailProgramming" element={<CardDetailProgramming/>} />
          <Route path="/cardDetailGraphic" element={<CardDetailGraphic/>} />
          <Route path="/cardDetailContentCreator" element={<CardDetailContentCreator/>} />
        </Route>
        <Route element={<RootLayoutwithSidebar />}>
          <Route path="/freelancerprofile" element={<FreelancerProfile />} /> 
          <Route path="/freelancerProfileEdit" element={<FreelancerProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
