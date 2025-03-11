import React, { useState } from 'react';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import Navbar from '../components/layouts/Navbar';
import LeftSidebar from '../components/layouts/sidebars/LeftSidebar';
import { LeftTags } from '../components/layouts/sidebars/LeftTags';
import UserProfileCard from '../components/layouts/sidebars/UserProfileCard';
import CardFitPage from '../components/cards/CardFitPage';
import { MostPopularUser } from '../components/layouts/sidebars/MostPopularUser';
import SearchFitPage from '../components/postFitPages/PostFitPage';
import Footer from '../components/layouts/Footer';
import SearchForm from '../components/searchForms/SearchForm';

export default function FreelancerFitPage() {
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-4 mt-4">
        {/* Left Sidebar (Hidden on Small Screens) */}
        <div className="hidden lg:flex w-[280px] flex-col gap-4">
          <UserProfileCard />
          <LeftSidebar />
          <LeftTags />
        </div>

        {/* Central Feed Section (Main Content Area) */}
        <div className="flex-1 flex flex-col items-center justify-start gap-6 h-auto mt-12 lg:mt-0">
          {/* Wrapper for SearchForm, Profile, and Users Icons */}
          <div className="flex items-center gap-4 w-full">
            <SearchForm />
            {/* Icons for small screens */}
            <div className="lg:hidden flex items-center gap-4 ml-auto">
              <button
                onClick={() => setIsRightSidebarVisible(!isRightSidebarVisible)}
                className="p-2 text-white bg-blue-500 rounded-md"
              >
                <FaUsers size={24} /> {/* Users Icon */}
              </button>
            </div>
          </div>

          <SearchFitPage />

          {/* The feed content like posts */}
          <div className="w-full h-[600px] overflow-y-auto">
            <CardFitPage />
            <CardFitPage />
            <CardFitPage />
          </div>
        </div>

        {/* Right Sidebar (Always Visible on Large Screens) */}
        <div className="hidden lg:flex w-[300px] flex-col items-center justify-start gap-4">
          <MostPopularUser />
        </div>
      </div>

      {/* Popup Sidebar for Small Screens */}
      {isRightSidebarVisible && (
        <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end z-50">
          <div className="w-[300px] h-full bg-white p-4 shadow-lg relative">
            <button
              onClick={() => setIsRightSidebarVisible(false)}
              className="absolute top-4 right-4 text-gray-600 text-3xl"
            >
              ✖
            </button>
            <MostPopularUser />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer className="w-full mt-6" />
    </div>
  );
}
