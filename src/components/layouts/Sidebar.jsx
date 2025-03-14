"use client";
import { Link, useLocation } from "react-router";
import { Home, Mail, User, Users, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Sidebar = () => {
  const location = useLocation();
  const { t } = useTranslation(); // Initialize translation function

  const menuItems = [
    {
      path: "/dashboard",
      name: t("dashboard"), // Translate "Dashboard"
      icon: <Home className="h-5 w-5" />,
    },
    {
      path: "/business-owner",
      name: t("businessOwner"), // Translate "Business Owner"
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      path: "/job-seekers",
      name: t("jobSeekers"), // Translate "Job Seekers"
      icon: <User className="h-5 w-5" />,
    },
    {
      path: "/freelancers",
      name: t("freelancers"), // Translate "Freelancers"
      icon: <Users className="h-5 w-5" />,
    },
    {
      path: "/messages",
      name: t("messages"), // Translate "Messages"
      icon: <Mail className="h-5 w-5" />,
      active: true,
    },
  ];

  return (
    <aside className="group h-screen w-[70px] hover:w-64 bg-primary transition-all duration-300 ease-in-out">
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center rounded-md px-4 py-3 text-white hover:text-secondary transition-colors whitespace-nowrap
                  ${
                    location.pathname === item.path
                      ? "bg-blue-800"
                      : "hover:bg-primary-hover"
                  }`}
              >
                <span className="min-w-[20px]">
                  {item.icon}
                </span>
                <span className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100  transition-opacity duration-300">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
