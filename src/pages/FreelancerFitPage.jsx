import React from 'react';
import Navbar from '../components/layouts/Navbar';
import LeftSidebar from '../components/layouts/sidebars/LeftSidebar';
import { LeftTags } from '../components/layouts/sidebars/LeftTags';
import UserProfileCard from '../components/layouts/sidebars/UserProfileCard';
import CardFitPage from '../components/cards/CardFitPage';
import { MostPopularUser } from '../components/layouts/sidebars/MostPopularUser';
import SearchFitPage from '../components/postFitPages/PostFitPage';
import Footer from '../components/layouts/Footer';
import SearchForm from '../components/searchForms/SearchForm';
import ScrollIndicator from '../components/scrollIndicator/scrollIndicator';

export default function FreelancerFitPage() {
  return (
    <>
    <ScrollIndicator/>
          <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar - Full Width */}
      {/* <Navbar className="w-full" /> */}

      {/* Main Content */}
      <div className="container mx-auto flex flex-grow gap-6 px-4 mt-4">
        {/* Left Section - UserProfileCard, LeftSidebar, LeftTags */}
        <div className="w-[278px] flex flex-col gap-4">
          <UserProfileCard />
          <LeftSidebar />
          <LeftTags />
        </div>

        {/* Center Section - CardFitPage and SearchFitPage */}
        <div className="flex-1 flex flex-col items-center justify-start gap-4 h-[calc(100vh-120px)] overflow-y-auto">
          <SearchForm />
          <SearchFitPage />
          <CardFitPage />
          <CardFitPage />
          <CardFitPage />
        </div>

        {/* Right Section - MostPopularUser (Visible only on Large Screens) */}
        <div className="w-[300px] hidden lg:block">
          <MostPopularUser />
        </div>
      </div>

      {/* Footer - Placed Outside the Flex Container */}
      <Footer className="w-full mt-6" />
    </div>
    </>
  );
}
