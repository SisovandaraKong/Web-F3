import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobPosting from "./pages/JobPosting.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import DashboardEmployer from "./pages/DashboardEmployer.jsx";
import JobSeekers from "./pages/JobSeekers.jsx";
import Messages from "./pages/Messages.jsx";
import AddApplication from "./pages/AddApplication.jsx";
import JobDescription from "./pages/JobDescription.jsx";
import EditInformation from "./pages/EditInformation.jsx";
import ApplicationPage from "./pages/ApplicationPage.jsx";
import EditApplication from "./pages/EditApplication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/job-posting",
        element: <JobPosting />,
      },
      {
        path: "/",
        element: <DashboardEmployer />,
      },
      {
        path: "/job-seeker",
        element: <JobSeekers />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/add-application",
        element: <AddApplication />,
      },
      {
        path: "/job-description",
        element: <JobDescription />,
      },
      {
        path: "/edit-information",
        element: <EditInformation />,
      },
      {
        path: "/application",
        element: <ApplicationPage />,
      },
      {
        path: "/edit-application",
        element: <EditApplication />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
