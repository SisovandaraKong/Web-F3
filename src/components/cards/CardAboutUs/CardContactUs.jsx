import React from "react";
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

export default function CardContactUs() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-primary mb-6 underline underline-offset-8 decoration-secondary"
        >
          {t("Contact Us")}
        </h2>
        <div data-aos="fade-right" className="space-y-4 text-primary">
          <div className="flex items-center text-lg font-semibold">
            <FiPhone className="text-xl" />
            <a href="tel:+85531473327" className="ml-3 hover:text-blue-600">
              +855 31 473 327
            </a>
          </div>
          <div className="flex items-center text-lg font-semibold">
            <MdOutlineMailOutline className="text-xl" />
            <a href="mailto:info.jobseek@gmail.com" className="ml-3 hover:text-blue-600">
              info.jobseek@gmail.com
            </a>
          </div>
          <div className="flex items-start text-lg font-semibold">
            <IoLocationOutline className="text-xl" />
            <address className="ml-3 text-gray-700 dark:text-gray-300 not-italic">
              {t("address")}
            </address>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 max-w-sm">
        <img
          data-aos="fade-left"
          src="src/assets/imgAboutUs/Contact.svg"
          alt={t("Contact illustration")}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}