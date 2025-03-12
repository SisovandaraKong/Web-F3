"use client";
import { useTranslation } from "react-i18next";

export default function VisionSection() {
  const { t } = useTranslation();

  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 lg:px-0">
      <div data-aos="fade-left" data-aos-duration="800" className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          {t("ourVision")}
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
          {t("visionDescription")}
        </p>
      </div>
      <div className="flex justify-center">
        <img
          data-aos="fade-right"
          data-aos-duration="800"
          src="src/assets/imgAboutUs/Critical thinking.gif"
          alt={t("businessMissionAlt")}
          className="w-full max-w-sm rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}