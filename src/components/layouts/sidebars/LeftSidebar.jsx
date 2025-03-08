import React from 'react';
import {
  UserGroupIcon,
  BriefcaseIcon,
  ClockIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';

const LeftSidebar = () => {
  return (
    <div className="flex flex-col w-[278px] h-[250px] bg-gray-100 shadow-lg rounded-lg">
      {/* Navigation Links */}
      <div className="flex flex-col px-2 pt-5 space-y-2">
        <a
          href="/freelance-jobs"
          className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg cursor-pointer"
        >
          <UserGroupIcon className="w-4 h-4" />
          <span className="ml-2 text-xs font-medium">Find Freelance Jobs</span>
        </a>

        <a
          href="/part-time-jobs"
          className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg cursor-pointer"
        >
          <ClockIcon className="w-4 h-4" />
          <span className="ml-2 text-xs font-medium">Find Part Time Jobs</span>
        </a>

        <a
          href="/full-time-jobs"
          className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg cursor-pointer"
        >
          <BriefcaseIcon className="w-4 h-4" />
          <span className="ml-2 text-xs font-medium">Find Full Time Jobs</span>
        </a>

        <a
          href="/settings"
          className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg cursor-pointer"
        >
          <Cog6ToothIcon className="w-4 h-4" />
          <span className="ml-2 text-xs font-medium">Settings</span>
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
