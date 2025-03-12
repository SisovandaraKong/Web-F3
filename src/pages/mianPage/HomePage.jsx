import React, { useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next"; // Import the hook
import CardHowerEffec from "../../components/cards/CardHowerEffec";
import CardWhyUS from "../../components/cards/CardWhyUs";
import CardJob from "../../components/cards/CardJob";
import PopularCart from "../../components/cards/PopularCart";
import CardFeedback from "../../components/cards/CardFeedback";
import { FaUserFriends } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";

export default function HomePage() {
  const { t } = useTranslation(); // Initialize the translation hook
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const cardData = [
    {
      id: 1,
      title: t("freelancer"), // Use the translation key
      description: t("freelancerDescription"), // Use the translation key
      svg: <FaUserFriends />,
    },
    {
      id: 2,
      title: t("businessOwner"),
      description: t("businessOwnerDescription"),
      svg: <FaUserTie />,
    },
    {
      id: 3,
      title: t("jobSeeker"),
      description: t("jobSeekerDescription"),
      svg: <FaUsers />,
    },
  ];

  return (
    <>
      <ScrollIndicator />
      <section>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black-background">
          <Carousel />
        </div>
      </section>
      <section className="bg-primary container mx-auto gap-7 px-5 md:px-20 xl:px-32 py-17 dark:bg-primary">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-start text-white-text dark:text-white-text">
            {t("forJobSeekService")}{" "}
            {/* Replace static text with translation key */}
          </h2>
          <p className="text-lg text-white-text text-start dark:text-white-text">
            {t("jobSeekDescription")}{" "}
            {/* Replace static text with translation key */}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardData.map((card) => (
            <CardHowerEffec
              key={card.id}
              heading={card.title}
              content={card.description}
              svg={card.svg}
            />
          ))}
        </div>
      </section>
      <section className="container mt-12 md:px-20 xl:px-32">
        <div className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="md:col-span-2 justify-center items-center order-1 md:order-none">
              <h1 className="text-3xl font-bold text-black-text dark:text-white-text">
                {t("careerSuccess")}{" "}
                {/* Replace static text with translation key */}
              </h1>
              <p className="text-xl mt-2 text-black-text dark:text-white-text">
                {t("careerSuccessDescription")}{" "}
                {/* Replace static text with translation key */}
              </p>
              {/* <button className="mt-4 p-3 bg-primary text-white rounded-[5px] hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover">
                {t("moreAboutUs")}{" "}
              </button> */}
            </div>
          </div>

          <img
            alt=""
            src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </div>
      </section>
      <section className="bg-primary container px-5 py-5 my-16 md:px-20 xl:px-32 dark:bg-black-background">
        <div className="md:col-span-3 flex flex-col justify-center items-center">
          <h2 className="text-3xl text-white-text font-bold dark:text-white-text">
            {t("whyJoinUs")} {/* Replace static text with translation key */}
          </h2>
          <p className="text-lg mt-2 text-white-text dark:text-white-text">
            {t("whyJoinUsDescription")}{" "}
            {/* Replace static text with translation key */}
          </p>
        </div>
        <div className="mt-10">
          <CardWhyUS />
        </div>
      </section>
      <section className="px-5 py-5 md:px-20 xl:px-32 dark:bg-black-background">
        <div>
          <h2 className="text-3xl font-bold text-black-text dark:text-white-text">
            {t("mostPopularJob")}
          </h2>{" "}
          {/* Replace static text with translation key */}
          <p className="text-lg mt-4 text-black-text dark:text-white-text">
            {t("discoverJobOpportunities")}{" "}
            {/* Replace static text with translation key */}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <PopularCart />
        </div>
      </section>
      <section className="bg-primary container px-5 py-5 md:px-20 xl:px-32 dark:bg-primary">
        <div className="text-white flex justify-between items-center px-12 py-8 rounded-xl">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold leading-tight text-white-text dark:text-white-text">
              {t("opportunitiesCurated")}
            </h2>
          </div>

          <div className="flex items-center gap-12 border-l-2 border-white px-12">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white-text dark:text-white-text">
                45K+
              </h3>
              <p className="text-lg text-white-text dark:text-white-text">
                {t("jobOpenings")}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white-text dark:text-white-text">
                328+
              </h3>
              <p className="text-lg text-white-text dark:text-white-text">
                {t("topEmployers")}
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://remitpay.co.in/assets/img/others/fact_img.png"
              alt="People"
              className="w-56 h-auto"
            />
          </div>
        </div>
      </section>
      <section className="container px-5 py-5 md:px-20 xl:px-32 dark:bg-black-background">
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold text-black-text dark:text-white-text mb-12">
            {t("clientsFeedback")}
          </h2>
          <CardFeedback />
        </div>
      </section>
    </>
  );
}
