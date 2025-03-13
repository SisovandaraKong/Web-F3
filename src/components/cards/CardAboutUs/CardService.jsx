import React from "react";
import { useTranslation } from "react-i18next";

const cardData = [
  { title: "freelancer", description: "freelancerDescription" },
  { title: "businessOwner", description: "businessOwnerDescription" },
  { title: "jobSeeker", description: "jobSeekerDescription" },
];

export default function CardService() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-bold text-primary mb-3">{t(card.title)}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {t(card.description)}
          </p>
        </div>
      ))}
    </div>
  );
}