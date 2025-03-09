import React from "react";
import { useTranslation } from "react-i18next";

export default function CardService() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            data-aos="flip-left"
            className="p-6 bg-white shadow-lg rounded-xl text-center transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-bold text-primary mt-3">
              {t(card.title)}
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              {t(card.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "Freelancer",
    description:
      "A freelancer is a self-employed professional who works on various projects for different clients without long-term commitments.",
  },
  {
    title: "Business Owner",
    description:
      "A business owner is someone who starts, manages, and oversees a company, taking responsibility for its success and growth.",
  },
  {
    title: "Job Seeker",
    description:
      "A job seeker is someone actively looking for employment opportunities to start or advance their career.",
  },
];
