import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
