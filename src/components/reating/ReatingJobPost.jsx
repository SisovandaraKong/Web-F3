import React from 'react';

const RatingJobPost = () => {
  return (
    <div className="p-4 mx-auto bg-white rounded-lg shadow-md max-w-[1300px] sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
      <div className="lg:col-span-4 col-span-1">
        <form className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Write a review</h2>
          
          <div className="flex justify-start items-center space-x-1 mb-4">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">
                <input type="radio" name="rating" value={star} className="hidden" />★
              </label>
            ))}
          </div>
          
          <textarea
            id="review"
            name="review"
            rows="4"
            required
            className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your review"
          ></textarea>
          
          <div className="text-right py-4">
            <a
              href="/user"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
            >
              Login to Post Review
            </a>
          </div>
        </form>
      </div>
      
      <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
        <div className="flex items-center">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <p className="ml-2 text-sm font-medium text-gray-900">0 out of 0</p>
        </div>
        <p className="text-sm font-medium text-gray-500">0 global ratings</p>
        {[5, 4, 3, 2, 1].map((star, index) => (
          <div key={index} className="flex items-center">
            <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">{star} star</span>
            <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
              <div className="h-4 bg-yellow-400 rounded" style={{ width: '0%' }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500">0%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingJobPost;
