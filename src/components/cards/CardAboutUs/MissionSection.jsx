"use client";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export default function MissionSection() {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 lg:px-36 gap-10 md:gap-20 items-center">
      <div className="flex justify-center">
        <img
          data-aos="fade-right"
          data-aos-duration="700"
          src="src/assets/imgAboutUs/Business mission.gif"
          alt={t("businessMissionAlt")} // Translate alt text
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="700"
        className="text-center md:text-left"
      >
        <h2 className="text-SubHeading font-bold text-primary">
          {t("ourMission")} {/* Translate the title */}
        </h2>
        <p className="text-lg md:text-xl text-black-text dark:text-white mt-4">
          {t("missionDescription")} {/* Translate the paragraph */}
        </p>
      </div>
    </section>
  );
}
