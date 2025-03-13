import React from "react";
import { useTranslation } from "react-i18next";

const VisionMissionValues = () => {
  const { t } = useTranslation();

  // Custom hexagon SVG background for icons with larger size
  const HexagonIcon = ({ children }) => (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[150px]"
        viewBox="0 0 24 24"
        fill="white"
        stroke="#e0e0e0"
        strokeWidth="0.5">
        <path d="M12 2L21.6 8v8L12 22 2.4 16V8z" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );

  const cards = [
    {
      title: "Our Vision",
      description: t("visionDescription"),
      icon: (
        <HexagonIcon>
          <img
            src="/src/assets/imgAboutUs/mission.png"
            alt="Core Values"
            className="w-28 h-28"
          />
        </HexagonIcon>
      ),
    },
    {
      title: "Our Mission",
      description: t("missionDescription"),
      icon: (
        <HexagonIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </HexagonIcon>
      ),
    },
    {
      title: "Core Values",
      description:
        "Integrity, collaboration, excellence, innovation, and customer-centricity guide everything we do.",
      icon: (
        <HexagonIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M12 2L4 8v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8z"></path>
            <path d="M9 14v-3a3 3 0 0 1 6 0v3"></path>
          </svg>
        </HexagonIcon>
      ),
    },
  ];

  return (
    <div className="flex flex-col my-36">
      {/* Background with gradient similar to the image */}
      <div className="flex-grow bg-gradient-to-b ">
        <div className="container mx-auto">
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative bg-primary-hover bg-opacity-10 rounded-lg p-6 hover:bg-opacity-15 transition-all duration-300 flex flex-col items-center text-center">
                {/* Icon container with larger hexagon */}
                <div className="absolute top-[-75px] mb-4">{card.icon}</div>
                {/* Content - adjusted margin-top to accommodate larger icon */}
                <h3 className="text-2xl font-semibold mb-3 mt-16 text-white">
                  {card.title}
                </h3>
                <p className="text-white">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
