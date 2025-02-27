import React from "react";

function Chats() {
  return (
    <div className="bg-white p-4 rounded shadow w-1/2">
      <div className="font-semibold text-5xl text-blue-900 pt-3">Dashboard</div>
      <h3 className="font-semibold mb-2">Chats</h3>
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2 overflow-hidden">
          <div className="relative">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://i.pinimg.com/474x/80/8e/b3/808eb3b81d94b0fecf8ebba405923e7c.jpg"
              alt=""
            />
            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
          <div className="relative">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://i.pinimg.com/474x/90/64/b6/9064b6b388394cbc85223f91ffa138f7.jpg"
              alt=""
            />
            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
          <div className="relative">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://i.pinimg.com/474x/26/80/f7/2680f7fb332294079d7438f292fd1412.jpg"
              alt=""
            />
            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
          <div className="relative">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://i.pinimg.com/474x/3b/19/82/3b198211a2a746afb38ee982612fd1e1.jpg"
              alt=""
            />
            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
        </div>
        <span className="ml-2 text-sm text-gray-600">4 active campaigns</span>
      </div>
      <div className="text-sm text-gray-600">
        All messages
        <span className="ml-1">&gt;</span>
      </div>
    </div>
  );
}

export default Chats;
