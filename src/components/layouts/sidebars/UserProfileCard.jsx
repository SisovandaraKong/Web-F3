import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const UserProfileCard = () => {
  const user = {
    name: 'John Doe',
    role: 'Software Developer',
    avatar: 'https://i.pravatar.cc/300',
  };

  return (
    <div className="w-[278px] h-[168px] mt-5 bg-white dark:bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
      <div className="relative h-14 bg-gradient-to-r from-indigo-600 to-blue-700 flex justify-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="absolute bottom-0 left-1/6 transform -translate-x-1/2 translate-y-1/2  w-16 h-16 rounded-full border-2 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="pt-1 pb-2 text-left px-20">
        <h1 className="text-sm font-bold text-gray-800 dark:text-black">
          {user.name}
        </h1>
        <p className="text-xs text-indigo-600 dark:text-gray-400 font-medium">
          {user.role}
        </p>
      </div>
      <hr />
      <div className="bg-gray-50 px-4 py-2">
        <button className="w-full bg-gray-50 text-black py-1 rounded-lg font-semibold duration-300 flex items-center justify-center space-x-1 hover:bg-gray-200">
          <PlusIcon className="h-4 w-4 text-gray-800 dark:text-gray-800" />
          <span className="text-xs">Add other account</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
