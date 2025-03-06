import React from 'react';

export const MostPopularUser = () => {
  const users = [
    {
      name: 'John Doe',
      username: '@johndoe',
      img: 'https://loremflickr.com/600/600/people?random=1',
    },
    {
      name: 'Jane Smith',
      username: '@janesmith',
      img: 'https://loremflickr.com/600/600/people?random=2',
    },
    {
      name: 'Michael Johnson',
      username: '@michaelj',
      img: 'https://loremflickr.com/600/600/people?random=3',
    },
    {
      name: 'Emily Davis',
      username: '@emilyd',
      img: 'https://loremflickr.com/600/600/people?random=4',
    },
    {
      name: 'Chris Wilson',
      username: '@chrisw',
      img: 'https://loremflickr.com/600/600/people?random=5',
    },
  ];

  return (
    <div className="max-w-sm mx-auto mt-3 p-5 rounded-xl bg-white-background">
      <h2 className="text-TabText font-bold text-gray-900 mb-3">The most Popular Freelancers</h2>
      {users.map((user, index) => (
        <div
          key={index}
          className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200"
        >
          <div className="flex items-center">
            <img
              className="rounded-full h-10 w-10"
              src={user.img}
              alt={user.name}
            />
            <div className="ml-2 flex flex-col">
              <span className="leading-snug text-sm text-gray-900 font-bold">
                {user.name}
              </span>
              <span className="leading-snug text-xs text-gray-600">
                {user.username}
              </span>
            </div>
          </div>
          <button className="h-8 px-3 text-SubButtonText font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">
            Contact
          </button>
        </div>
      ))}
      <button className="mt-3 w-full h-10 text-md font-bold text-blue-600 border border-blue-400 rounded-full hover:bg-blue-100">
        See More
      </button>
    </div>
  );
};
