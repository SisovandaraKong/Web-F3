import React, { useEffect } from "react";
import { PiBagLight } from "react-icons/pi";
import { HiOutlineUsers, HiOutlineUser } from "react-icons/hi";
import { GrHome } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CardAchievement() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const achievements = [
    {
      icon: <PiBagLight className="text-5xl text-blue-600 dark:text-blue-400" />,
      count: "899",
      label: t("Total Jobs"),
    },
    {
      icon: <HiOutlineUsers className="text-5xl text-blue-600 dark:text-blue-400" />,
      count: "16.8k",
      label: t("Seekers"),
    },
    {
      icon: <GrHome className="text-5xl text-blue-600 dark:text-blue-400" />,
      count: "261",
      label: t("Companies"),
    },
    {
      icon: <HiOutlineUser className="text-5xl text-blue-600 dark:text-blue-400" />,
      count: "378",
      label: t("Employers"),
    },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon with subtle background */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  {item.icon}
                </div>
              </div>
              {/* Count */}
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {item.count}
              </h3>
              {/* Label */}
              <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}