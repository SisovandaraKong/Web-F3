import React from "react";
import { PiBagLight } from "react-icons/pi";
import { HiOutlineUsers, HiOutlineUser } from "react-icons/hi";
import { GrHome } from "react-icons/gr";
import { useTranslation } from "react-i18next";

export default function CardAchievement() {
  const { t } = useTranslation();

  const achievements = [
    { icon: <PiBagLight className="text-5xl text-primary" />, count: "899", label: t("Total Jobs") },
    { icon: <HiOutlineUsers className="text-5xl text-primary" />, count: "16.8k", label: t("Seekers") },
    { icon: <GrHome className="text-5xl text-primary" />, count: "261", label: t("Companies") },
    { icon: <HiOutlineUser className="text-5xl text-primary" />, count: "378", label: t("Employers") },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
        >
          {item.icon}
          <h3 className="text-3xl font-bold text-primary mt-3">{item.count}</h3>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
            {item.label}
          </h3>
        </div>
      ))}
    </div>
  );
}