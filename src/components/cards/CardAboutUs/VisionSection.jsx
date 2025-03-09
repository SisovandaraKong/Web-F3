"use client";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export default function VisionSection() {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 lg:px-36 gap-10 md:gap-20 items-center">
      <div
        data-aos="fade-left"
        data-aos-duration="700"
        className="text-center md:text-left"
      >
        <h2 className="text-SubHeading font-bold text-primary">
          {t("ourVision")} {/* Translate the title */}
        </h2>
        <p className="text-lg md:text-xl text-black-text mt-4 dark:text-white ">
          {t("visionDescription")} {/* Translate the paragraph */}
        </p>
      </div>
      <div className="flex justify-center">
        <img
          data-aos="fade-right"
          data-aos-duration="700"
          src="src/assets/imgAboutUs/Critical thinking.gif"
          alt={t("businessMissionAlt")} 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
}
