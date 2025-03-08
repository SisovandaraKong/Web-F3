import React from "react";
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GoProject } from "react-icons/go";
import { IoPeopleOutline,IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-1 overflow-hidden">
          <aside className="bg-primary text-white w-70 flex-shrink-0 flex flex-col p-4 ">
          <a href="#">
            <button className="flex items-center gap-3 py-4 text-md font-bold">
            
              <FaHome className="text-xl font-bold" />
              Dashboard
             
            </button>
            </a>

            <a href="#">
            <button className="flex items-center gap-3 text-md font-bold py-4">
              <VscAccount className="text-xl font-bold" />
              View Profile
            </button>
            </a>

            <a href="">
            <button className="flex items-center gap-3 text-md font-bold py-4">
              <GoProject className="text-xl font-bold" />
              Projects Posted
            </button>
            </a>

            <a href="">
            <button className="flex items-center gap-3 text-md font-bold py-4">
              <IoPeopleOutline className="text-xl font-bold" />
              Job Applications
            </button>
           </a>

            <div className="mt-auto space-y-1">
              <p className="text-sm font-medium "> SETTINGS</p>
              <a href="">
              <button className="flex items-center gap-3 text-sm font-bold py-1 ">
              <IoSettingsOutline  className="text-xl font-bold"  />
              Setting
              </button>
              </a>

              <a href="">
              <button className="flex items-center gap-3 text-sm font-bold py-1 text-accent hover:text-accent-hover">
              <MdLogout  className="text-xl font-bold"  />
              Logout
              </button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
