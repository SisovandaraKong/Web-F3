import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-blue-900 mt-28 min-w-xs">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="src/assets/Footer/Logo3.png"
                className="h-8 me-3"
                alt="JobSeek Logo"
              />
            </a>
            <h2 className="dark:text-white mt-15">
              {t('footer.createdBy')}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('footer.quickLine')}
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-4">
                  <a href="https://github.com/kea-daron" className="hover:underline">
                    {t('footer.findJobs')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/kea-daron" className="hover:underline">
                    {t('footer.findFreelancers')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/kea-daron" className="hover:underline">
                    {t('footer.postJob')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/kea-daron" className="hover:underline">
                    {t('footer.dashboard')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('footer.supportLegal')}
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                    {t('footer.chatBotHelp')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                    {t('footer.faqs')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                    {t('footer.policyPrivacy')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                    {t('footer.termsOfService')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('footer.ourSponsors')}
              </h2>
              <ul>
                <li className="h-[100px] w-[200px]">
                  <a href="#" className="hover:underline">
                    <img
                      src="src/assets/Footer/ministry.png"
                      alt={t('footer.ministryLogo')}
                    />
                  </a>
                </li>
                <li className="h-[100px] w-[200px]">
                  <a href="#" className="hover:underline">
                    <img
                      src="src/assets/Footer/istad.webp"
                      alt={t('footer.istadLogo')}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:text-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-white">
            {t('footer.privacyPolicy')}<br />
            {t('footer.rightsReserved')}
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Icons */}
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {/* SVG icon */}
            </a>
            {/* Other social icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
