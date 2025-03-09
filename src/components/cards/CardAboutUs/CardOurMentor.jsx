"use client";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function CardOurMentor() {
  const { t } = useTranslation(); // Initialize the translation function

  const mentors = [
    {
      nameKey: "mentorKayKeo",  // Translation key for Kay Keo
      imgSrc: "src/assets/imgAboutUs/CherKeo.png",
    },
    {
      nameKey: "mentorProeungChiso",  // Translation key for Proeung Chiso
      imgSrc: "src/assets/imgAboutUs/CherChiso.png",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 xl:px-24">
      {mentors.map((mentor, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          className="w-full max-w-sm mx-auto p-5"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center">
              {t(mentor.nameKey)} {/* Translate mentor name */}
            </h1>
          </div>
          <a href="#">
            <img
              className="rounded-lg h-auto w-full mt-6 object-cover"
              src={mentor.imgSrc}
              alt={t(mentor.nameKey)} // Translate the alt text
            />
          </a>
          <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
            <FaGithub className="cursor-pointer hover:text-blue-600" />
            <FaTelegramPlane className="cursor-pointer hover:text-blue-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
            <MdOutlineMailOutline className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      ))}
    </div>
  );
}
