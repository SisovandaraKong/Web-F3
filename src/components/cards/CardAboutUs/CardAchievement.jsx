import React from "react";
import { PiBagLight } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { GrHome } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
export default function CardAchievement() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-15  mx-auto w-fit min-w-xs">
        <div className="bg-amber-50 border border-gray-200 rounded-lg shadow-sm place-items-center  text-center px-10 py-5">
          <div className="flex flex-col items-center">
            <PiBagLight className="text-7xl text-primary mx-10"  />
            <h3 className="text-4xl font-bold mx-4 text-primary mt-3">899</h3>
          <h3 className="text-2xl font-bold text-2b407f mt-3 ">Total Jobs</h3>
          </div>
          
        </div>
        <div className=" bg-amber-50 border border-gray-200 rounded-lg shadow-sm place-items-center text-center px-10 py-5">
          <div className="flex flex-col items-center">
            <HiOutlineUsers className="text-7xl text-primary mx-10"/>
            <h3 className="text-4xl font-bold mx-4 text-primary mt-3">16.8k</h3>
          <h3 className="text-2xl font-bold text-2b407f mt-3 ">Seekers</h3>
          </div>
          
        </div>
        <div className=" bg-amber-50 border border-gray-200 rounded-lg shadow-sm place-items-center text-center px-10 py-5">
          <div className="flex flex-col items-center">
            <GrHome className="text-7xl text-primary mx-10"/>
            <h3 className="text-4xl font-bold mx-4 text-primary mt-3">261</h3>
          <h3 className="text-2xl font-bold text-2b407f mt-3 ">Conpanies</h3>
          </div>
          
        </div>
        <div className=" bg-amber-50 border border-gray-200 rounded-lg shadow-sm place-items-center text-center px-10 py-5">
          <div className="flex flex-col items-center">
            <HiOutlineUser className="text-7xl text-primary mx-10"/>
            <h3 className="text-4xl font-bold mx-4 text-primary mt-3">378</h3>
          <h3 className="text-2xl font-bold text-2b407f mt-3 ">Total Jobs</h3>
          </div>
          
        </div>
      </div>
      
    </>
  );
}
