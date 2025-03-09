import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const ChatbotPage = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  const API_KEY = 'AIzaSyBtrCrYDgq9boT0qPsmPNKhbYSjejGtiUk';
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: message }] }],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const newResponse = result.data.candidates[0].content.parts[0].text;
      const newChat = {
        id: Date.now(),
        question: message,
        answer: newResponse,
        timestamp: new Date().toLocaleString(),
      };

      const updatedHistory = [newChat, ...chatHistory];
      setChatHistory(updatedHistory);
      setResponse(newResponse);
      setSelectedChat(newChat);
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while fetching the response.');
    } finally {
      setIsLoading(false);
    }
  };

  const startNewChat = () => {
    setMessage('');
    setResponse('');
    setSelectedChat(null);
  };

  const selectChat = (chat) => {
    setSelectedChat(chat);
    setResponse(chat.answer);
    setMessage(chat.question);
  };

  const deleteChat = (chatId) => {
    const updatedHistory = chatHistory.filter((chat) => chat.id !== chatId);
    setChatHistory(updatedHistory);
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));

    if (selectedChat?.id === chatId) {
      setSelectedChat(null);
      setResponse('');
      setMessage('');
    }
  };

  // Improved parser to remove ** and handle inline formatting
  const parseResponse = (text) => {
    // Split into lines first
    return text.split('\n').map((line, index) => {
      if (!line.trim()) return null;

      // Handle inline bold (**text**) and italics (*text*)
      let processedLine = line;
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Replace **text** with <strong>text</strong>
      processedLine = processedLine.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Replace *text* with <em>text</em>

      // Handle different line types
      if (processedLine.startsWith('* ') || processedLine.startsWith('*-')) {
        // Bullet point (remove leading * and render as list item)
        const content = processedLine.slice(2).trim();
        return <li key={index} className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: content }} />;
      } else {
        // Check if it's a heading (assuming it's the first bolded line after a break)
        if (processedLine.match(/<strong>.*<\/strong>/) && !processedLine.includes('<li>')) {
          return <h3 key={index} className="text-lg font-bold text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: processedLine }} />;
        } else {
          // Normal paragraph
          return <p key={index} className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: processedLine }} />;
        }
      }
    }).filter(Boolean);
  };

  return (
    <div className="flex h-[90vh] bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-[#1A2C5B] dark:bg-[#0F1A3A] text-white flex flex-col">
        <div className="p-4">
          <h1 className="text-xl font-bold text-white">Kong Sisovandara's Chat</h1>
        </div>
        <button
          onClick={startNewChat}
          className="mx-4 mb-4 px-4 py-2 bg-yellow-500 dark:bg-yellow-600 text-white rounded-full hover:bg-yellow-600 dark:hover:bg-yellow-700 transition"
        >
          + New Chat
        </button>
        <div className="flex-1 overflow-y-auto">
          <div className="px-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-300 dark:text-gray-400">Recent</h3>
            {chatHistory.map((chat) => (
              <div
                key={chat.id}
                className={`py-2 px-3 mb-2 rounded-lg cursor-pointer flex items-center justify-between ${
                  selectedChat?.id === chat.id ? 'bg-blue-800 dark:bg-blue-900' : 'hover:bg-blue-700 dark:hover:bg-blue-800'
                } transition`}
              >
                <div onClick={() => selectChat(chat)} className="flex-1 min-w-0">
                  <p className="text-sm truncate text-gray-200 dark:text-gray-300">{chat.question}</p>
                </div>
                <button
                  onClick={() => deleteChat(chat.id)}
                  className="text-red-400 hover:text-red-300 dark:text-red-500 dark:hover:text-red-400 transition p-1"
                  title="Delete chat"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t border-blue-800 dark:border-blue-900">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">K</span>
            </div>
            <p className="text-sm text-gray-200 dark:text-gray-300">Koko</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Welcome to Kong Sisovandara's AI
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center gap-2">
            Hi <span className="text-yellow-500 dark:text-yellow-400">👋</span> Koko what can I help with
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-blue-500 dark:border-blue-600 text-blue-500 dark:text-blue-400 rounded-full flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Generate Resume
            </button>
            <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-blue-500 dark:border-blue-600 text-blue-500 dark:text-blue-400 rounded-full flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Create CV
            </button>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          {selectedChat && (
            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg max-h-64 overflow-y-auto">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Question:</p>
                <p className="text-gray-600 dark:text-gray-400">{selectedChat.question}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Answer:</p>
                <div className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{parseResponse(response)}</div>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <button type="button" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a4 4 0 00-5.656-5.656L7 10.828" />
              </svg>
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Kong Sisovandara"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !message.trim()}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 disabled:text-gray-300 dark:disabled:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;