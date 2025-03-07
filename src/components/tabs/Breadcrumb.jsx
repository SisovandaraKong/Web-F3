import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <nav
        aria-label="breadcrumb"
        className="ml-20 p-4 text-gray-800"
      >
        <ol className="flex h-8 space-x-2 text-gray-800">
          <li className="flex items-center">
            <Link
              to="/"
              title="Back to homepage"
              className="flex items-center hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <span className="text-gray-600">/</span>
            <Link
              to="/parent"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <span className="text-gray-600">/</span>
            <Link
              to="/parent/child"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <span className="text-gray-600">/</span>
            <span className="flex items-center px-1 capitalize cursor-default">
              Current
            </span>
          </li>
        </ol>
      </nav>

      {/* Blog Content Section */}
      <div className="flex flex-col mx-20">
        <div className="py-1">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Project Title Here
            </h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                alt="Blog Featured Image"
                className="mb-8"
                style={{ width: '763px', height: '380px' }}
              />
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Description
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed sit amet feugiat eros, eget eleifend dolor.
                  Proin maximus bibendum felis, id fermentum odio vestibulum id.
                  Sed ac ligula eget dolor consequat tincidunt.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                  How it Works
                </h2>
                <p>
                  Suspendisse potenti. Mauris euismod, magna sit amet aliquam
                  dapibus, ex sapien porta nisl, vel auctor orci velit in risus.
                  Fusce gravida bibendum dui, id volutpat felis dignissim a.
                  Duis sagittis, arcu ac convallis bibendum, neque dolor
                  suscipit dolor, non malesuada magna orci a mauris.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Table of Contents
                </h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a
                      href="#project-description"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      Project Description
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#how-it-works"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      How it Works
                    </a>
                  </li>
                </ul>
              </div>

              {/* Share Section */}
              <div className="bg-gray-100 p-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Share this
                </h2>
                <div className="flex space-x-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
