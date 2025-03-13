import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CardContactUs() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 underline underline-offset-8 decoration-blue-500"
          >
            {t("Contact Us")}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div
                data-aos="fade-right"
                className="space-y-6 text-gray-700 dark:text-gray-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                    <FiPhone className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="tel:+85531473327"
                    className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    +855 31 473 327
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                    <MdOutlineMailOutline className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="mailto:info.jobseek@gmail.com"
                    className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    info.jobseek@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                    <IoLocationOutline className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <address className="text-lg text-gray-600 dark:text-gray-300 not-italic leading-relaxed">
                    {t("address")}
                  </address>
                </div>
              </div>
            </div>

            {/* Google Maps and Illustration */}
            <div className="w-full lg:w-1/2">
              {/* Google Maps */}
              <div data-aos="fade-left">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631404683705!2d104.89921187452715!3d11.578259843893385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1skm!2skh!4v1741886606239!5m2!1skm!2skh"                   width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                  className="shadow-md"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}