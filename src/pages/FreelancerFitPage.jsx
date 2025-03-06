import React from 'react';
import LeftSidebar from '../components/layouts/sidebars/LeftSidebar';
import { LeftTags } from '../components/layouts/sidebars/LeftTags';
import UserProfileCard from '../components/layouts/sidebars/UserProfileCard';
import CardFitPage from '../components/cards/CardFitPage';
import { MostPopularUser } from '../components/layouts/sidebars/MostPopularUser';
import SearchFitPage from '../components/postFitPages/PostFitPage';

export default function FreelancerFitPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="container mx-auto flex gap-6 px-4">
        {/* Left Section - UserProfileCard, LeftSidebar, LeftTags in One Column */}
        <div className="w-[278px] flex flex-col gap-4">
          <UserProfileCard />
          <LeftSidebar />
          <LeftTags />
        </div>

        {/* Center Section - CardFitPage and SearchFitPage in One Column */}
        <div className="flex-1 flex flex-col items-center justify-start gap-4">
          <SearchFitPage />
          <CardFitPage />
        </div>

        {/* Right Section - MostPopularUser (Visible only on Large Screens) */}
        <div className="w-[250px] hidden lg:block">
          <MostPopularUser />
        </div>
      </div>
    </div>
  );
}
