import React, { useState } from 'react';
import { FaCamera, FaCalendarAlt, FaFileAlt, FaTimes, FaImage } from 'react-icons/fa';

const PostFitPage = () => {
  const [postContent, setPostContent] = useState('');
  const [isMedia, setIsMedia] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  const [isArticle, setIsArticle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Post Submitted:', postContent);
    setPostContent('');
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center p-4">
      {!isModalOpen && (
        <div className="w-[788px] bg-white dark:bg-white-background rounded-xl shadow-lg p-4 cursor-pointer flex justify-between items-center" onClick={() => setIsModalOpen(true)}>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-[650px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-white-background dark:text-white cursor-pointer"
              readOnly
            />
          </div>
          <FaImage className="text-gray-500 cursor-pointer" size={24} onClick={() => setIsModalOpen(true)} />
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-white-background bg-opacity-50 flex justify-center items-center">
          <div className="w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
            >
              <FaTimes size={20} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <textarea
                rows="3"
                value={postContent}
                onChange={handlePostChange}
                className="w-full resize-none border border-gray-300 dark:border-gray-600 rounded-lg p-3 dark:bg-gray-700 dark:text-white"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <FaCamera onClick={() => setIsMedia(!isMedia)} className="cursor-pointer text-blue-500" size={20} />
                <FaCalendarAlt onClick={() => setIsEvent(!isEvent)} className="cursor-pointer text-green-500" size={20} />
                <FaFileAlt onClick={() => setIsArticle(!isArticle)} className="cursor-pointer text-orange-500" size={20} />
              </div>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
              >
                Post
              </button>
            </div>
            {isMedia && (
              <input type="file" className="w-full p-2 border rounded-lg" />
            )}
            {isEvent && (
              <input type="text" placeholder="Event Name" className="w-full p-2 border rounded-lg mt-2" />
            )}
            {isArticle && (
              <textarea placeholder="Write your article..." className="w-full p-2 border rounded-lg mt-2" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFitPage;
