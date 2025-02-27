import React from 'react';

function EmployerUserPf() {
  return (
    <div className="bg-white p-4 rounded shadow w-1/2">
      <div className="bg-[#283891] rounded-t p-6 text-white text-center">
        <img
          src="/static/images/profile.jpg" // Replace with your profile image
          alt="Profile"
          className="rounded-full w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold">John doe</h2>
        <p className="text-sm">Ca, California</p>
        <button className="bg-white text-[#283891] px-4 py-2 rounded mt-4 flex items-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit profile
        </button>
      </div>
      <div className="p-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm">Last 20 days</span>
      </div>
    </div>
  );
}

export default EmployerUserPf;