import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const testimonials = [
  {
    nameKey: "KongSisovandara",
    roleKey: "leadFrontend",
    image: "src/assets/Our Client/Dara.JPG",
    feedbackKey: "kongSisovandaraFeedback",
  },
  {
    nameKey: "ChimTheara",
    roleKey: "leadDesigner",
    image: "src/assets/Our Client/Sanom.JPG",
    feedbackKey: "chimThearaFeedback",
  },
  {
    nameKey: "RinSanom", // Use translation key for name
    roleKey: "webDeveloper", // Use translation key for role
    image: "src/assets/Our Client/Sanom.JPG",
    feedbackKey: "rinSanomFeedback", // Use translation key for feedback
  },
];

const CardFeedback = () => {
  const { t } = useTranslation(); // Initialize the t function for translations

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <blockquote key={index} className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 dark:bg-black dark:border-white dark:border">
          <div className="flex items-start gap-4">
            <img
              alt={t(testimonial.nameKey)} // Translate name dynamically
              src={testimonial.image}
              className="size-14 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{t(testimonial.nameKey)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t(testimonial.roleKey)}</p>
              <div className="flex gap-0.5 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-start line-clamp-6">{t(testimonial.feedbackKey)}</p> {/* Translate feedback dynamically */}
        </blockquote>
      ))}
    </div>
  );
};

export default CardFeedback;
