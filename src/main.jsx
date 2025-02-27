import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import JobPosting from './pages/JobPosting.jsx'
import RootLayout from './components/layouts/RootLayout.jsx'
import DashboardEmployer from './pages/DashboardEmployer.jsx'
import JobSeekers from './pages/JobSeekers.jsx'
import Freelancers from './pages/Freelancers.jsx'
import Messages from './pages/Messages.jsx'
import AddApplication from './pages/AddApplication.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/job-posting',
        element: <JobPosting />
      },
      {
        path: '/',
        element: <DashboardEmployer />
      },
      {
        path: '/job-seekers',
        element: <JobSeekers />
      },
      {
        path: '/freelancers',
        element: <Freelancers />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/add-application',
        element: <AddApplication />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)