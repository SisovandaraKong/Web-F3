import React from 'react';
import { Link } from 'react-router-dom';

const FreelancerDetail = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <nav
        aria-label="breadcrumb"
        className="p-4 text-gray-800 mx-auto max-w-7xl"
      >
        <ol className="flex flex-wrap items-center space-x-2 text-gray-800 text-sm md:text-base">
          <li className="flex items-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 mx-1">/</span>
            <Link to="/parent" className="hover:underline">
              Parent
            </Link>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 mx-1">/</span>
            <Link to="/parent/child" className="hover:underline">
              Child
            </Link>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 mx-1">/</span>
            <span className="cursor-default text-gray-500">Current</span>
          </li>
        </ol>
      </nav>

      {/* Blog Content Section */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Project Title Here
          </h1>
          <p className="text-gray-600 text-sm md:text-base">Published on April 4, 2023</p>
        </div>

        <div className="bg-white py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="md:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                alt="Blog Featured Image"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="prose max-w-none mt-6">
                <h2 className="text-2xl font-bold text-gray-800">Project Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed sit amet feugiat eros, eget eleifend dolor.
                  Proin maximus bibendum felis, id fermentum odio vestibulum id.
                  Sed ac ligula eget dolor consequat tincidunt.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-6">How it Works</h2>
                <p>
                  Suspendisse potenti. Mauris euismod, magna sit amet aliquam
                  dapibus, ex sapien porta nisl, vel auctor orci velit in risus.
                  Fusce gravida bibendum dui, id volutpat felis dignissim a.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#project-description" className="text-gray-700 hover:text-gray-900">
                    Project Description
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">
                    How it Works
                  </a>
                </li>
              </ul>
              <h2 className="text-xl font-bold text-gray-800 mt-6">Share this</h2>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerDetail;
