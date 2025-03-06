import React, { useState, useEffect } from 'react';

const CardFitPage = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full sm:w-[688px] lg:w-[800px] h-auto sm:h-auto p-6">
        {/* User Info */}
        <header className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/60"
              className="w-14 h-14 rounded-full"
              alt="User Avatar"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
              <p className="text-xs text-gray-400">March 5, 2025</p>
            </div>
          </div>

          {/* Bookmark Icon */}
          <button className="text-gray-400 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v18l7-4 7 4V3H5z"
              />
            </svg>
          </button>
        </header>

        {/* Post Content */}
        <section className="mt-3">
          <p className="text-sm text-gray-800">{post.body}</p>
          <img
            src="https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg"
            className="w-full mt-3 rounded-lg max-w-full max-h-[317px] object-cover"
            alt="Post Image"
          />
        </section>

        {/* Tags & Details */}
        <footer className="mt-4 border-t pt-3">
          <div className="flex space-x-2 text-sm text-blue-600 font-semibold">
            <span className="px-2 py-1 bg-gray-200 rounded">#Technology</span>
            <span className="px-2 py-1 bg-gray-200 rounded">#Development</span>
            <span className="px-2 py-1 bg-gray-200 rounded">#Coding</span>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            View Details
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CardFitPage;
