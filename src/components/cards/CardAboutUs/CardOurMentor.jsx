import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

export default function CardOurMentor() {
  return (
    <>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 px-36 gap-10">
        <div data-aos="fade-right" className="max-w-sm dark:bg-amber-50 bg-amber-50 rounded-lg shadow-sm dark:bg-f9fafb p-5 ">
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl font-bold text-blue-900 relative inline-block">
              Kay Keo
            </h1>
          </div>
          <a href="#">
            <img
              className="rounded-t-lg h-[200px] object-contain w-full mt-10"
              src="src/assets/imgAboutUs/Keo Kay.png"
              alt=""
            />
          </a>
          <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
            <FaGithub />
            <FaTelegramPlane />
            <FaLinkedinIn />
            <MdOutlineMailOutline />
          </div>
        </div>
        <div data-aos="fade-left" className="max-w-sm dark:bg-amber-50 bg-amber-50 rounded-lg shadow-sm dark:bg-f9fafb p-5 ">
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl font-bold text-blue-900 relative inline-block">
              Proeung Chiso
            </h1>
          </div>
          <a href="#">
            <img
              className="rounded-t-lg h-[200px] object-contain w-full mt-10"
              src="src/assets/imgAboutUs/cherChiso.png"
              alt=""
            />
          </a>
          <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
            <FaGithub />
            <FaTelegramPlane />
            <FaLinkedinIn />
            <MdOutlineMailOutline />
          </div>
        </div>
      </div>
    </>
  );
}
