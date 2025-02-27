"use client"

import { useState } from "react"
import { FiSun, FiPlus, FiChevronDown, FiSettings, FiSend, FiPaperclip, FiFileText, FiUser } from "react-icons/fi"
import { CiTextAlignRight } from "react-icons/ci";
import { BsListUl, BsClipboard } from "react-icons/bs"

const ChatbotPage = () => {
  const [chatInput, setChatInput] = useState("")
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  return (
    <div className="flex flex-col  bg-white">
      {/* Header */}
      {/*}
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            J<span className="text-yellow-400">⚡</span>BSEEK
          </h1>
          <nav className="hidden md:flex ml-8 space-x-6">
            <button className="hover:text-yellow-300">Jobs</button>
            <button className="hover:text-yellow-300">Media</button>
            <button className="hover:text-yellow-300">About Us</button>
            <button className="hover:text-yellow-300">Get Help</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-yellow-300">
            <FiSun size={20} />
          </button>
          <button className="bg-yellow-400 text-[#0a2463] px-4 py-2 rounded-md font-semibold hover:bg-yellow-300">
            Sign Up
          </button>
          <div className="flex space-x-2">
            <img src="/placeholder.svg?height=24&width=36" alt="English" className="h-6 rounded" />
            <img src="/placeholder.svg?height=24&width=36" alt="Khmer" className="h-6 rounded" />
          </div>
        </div>
      </header>
      */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-primary text-white w-70 flex-shrink-0 flex flex-col">
          <div className="p-4 border-b border-primary">
            <h2 className="text-Sub2Title font-bold mb-4">Jobseek AI Chat</h2>
            <button className="flex items-center text-SubButtonText bg-yellow-400 text-primary px-3 py-2 rounded-lg font-medium ">
              <FiPlus className="mr-2" /> New Chat
            </button>
          </div>

          <div className="p-4">
            <h3 className="text-SubBodyText font-bold mb-2">Recent</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm py-1 hover:bg-blue-800 px-2 rounded">
                <CiTextAlignRight className="mr-3 text-xl" /> Where can I apply my Resume
              </li>
              <li className="flex items-center text-sm py-1 hover:bg-blue-800 px-2 rounded">
                <CiTextAlignRight className="mr-3 text-xl" /> What kind of job do you have
              </li>
              <li className="flex items-center text-sm py-1 hover:bg-blue-800 px-2 rounded">
                <CiTextAlignRight className="mr-3 text-xl" /> How many position do you have
              </li>
              <li
                className="flex items-center  text-sm py-1 hover:bg-blue-800 px-2 rounded cursor-pointer"
                onClick={() => setIsMenuExpanded(!isMenuExpanded)}
              >
                <span>More</span>
                <FiChevronDown />
              </li>
            </ul>
          </div>

          <div className="mt-auto p-4 space-y-1">
            <button className="flex items-center text-sm hover:bg-blue-800 px-2 py-1 rounded w-full">
              <FiSettings className="mr-3 text-xl" /> Setting
            </button>
            <div className="flex items-center text-sm px-2 py-1">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[#0a2463] mr-3">
                <FiUser size={14} />
              </div>
              <span>Koko</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-[600px] bg-white">
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-6">Welcome to JobSeek AI</h1>

              <div className="flex items-center justify-center mb-8">
                <p className="text-gray-700">
                  Hi <span className="inline-block bg-yellow-100 rounded-full p-1">👋</span> Koko what can I help with
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg p-4 hover:bg-gray-50">
                  <FiFileText className="text-blue-600" size={20} />
                  <span>Generate Resume</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg p-4 hover:bg-gray-50">
                  <BsClipboard className="text-blue-600" size={20} />
                  <span>Create CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className=" p-4">
            <div className="max-w-xl mx-auto flex items-center">
              <button className="text-gray-500 p-2">
                <FiPaperclip size={20} />
              </button>
              <input
                type="text"
                placeholder="Ask JobSeek"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button className=" text-primary p-3 ">
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      {/*<footer className="bg-[#0a2463] text-white p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">
              J<span className="text-yellow-400">⚡</span>BSEEK
            </h2>
            <p className="text-sm mb-2">
              JobSeek is created by ISTAD Student for Job Matching Service Specialized in IT.
            </p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">© 2025 JobSeek Inc.</p>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4">QUICK LINE</h3>
            <ul className="space-y-2 text-sm">
              <li>Find Jobs</li>
              <li>Find freelancers</li>
              <li>Post a Job</li>
              <li>Dashboard</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4">SUPPORT & LEGAL</h3>
            <ul className="space-y-2 text-sm">
              <li>Chat Bot Help</li>
              <li>FAQs</li>
              <li>Policy Privacy</li>
              <li>Term of Service</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4">OUR SPONSORS</h3>
            <div className="flex flex-col space-y-4">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xs text-blue-600">Sponsor 1</span>
              </div>
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xs text-blue-600">ISTAD</span>
              </div>
            </div>
          </div>
        </div>
      </footer>*/}
    </div>
  )
}

export default ChatbotPage

