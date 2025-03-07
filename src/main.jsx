import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Overview from "./pages/Overview.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/overview" element={<Overview/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
