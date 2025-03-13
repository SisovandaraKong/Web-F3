import React, { useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next"; // Import the hook
import CardHowerEffec from "../../components/cards/CardHowerEffec";
import CardWhyUS from "../../components/cards/CardWhyUs";
import PopularCart from "../../components/cards/PopularCart";
import CardFeedback from "../../components/cards/CardFeedback";
import { FaUserFriends } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
export default function HomePage() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.5, // Trigger when 50% is in view
  });
  const { t } = useTranslation(); // Initialize the translation hook
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const cardData = [
    {
      id: 1,
      title: t("freelancer"),
      description: t("freelancerDescription"),
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
        <div data-aos="fade-right" data-aos-duration="1000" className="mb-12">
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
      <section className="container mt-12 md:px-20 xl:px-32 ">
        <div className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="py-16 ">
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
            data-aos="fade-left"
            data-aos-duration="1000"
            alt=""
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uQRrnlUBwOoqlNbcQSpYr/a4fbb0dbc1a6b5ba696410ff091039a8/GettyImages-2170485830.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </div>
      </section>
      <section className="bg-primary container px-5 py-5 my-16 md:px-20 xl:px-32 dark:bg-black-background">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="md:col-span-3 flex flex-col justify-center items-start mt-16">
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
        <div data-aos="fade-up-right" data-aos-duration="1000">
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

          <div
            ref={ref}
            className="flex items-center gap-12 border-l-2 border-white px-12">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white-text dark:text-white-text">
                {inView && (
                  <CountUp start={0} end={500} duration={5} separator="," />
                )}{" "}
                +
              </h3>
              <p className="text-lg text-white-text dark:text-white-text">
                {t("jobOpenings")}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white-text dark:text-white-text">
                {inView && <CountUp start={0} end={328} duration={5} />}+
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
        <div className="py-16 text-start  ">
          <h2
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="text-3xl font-bold text-black-text dark:text-white-text  ">
            {t("clientsFeedback")}
          </h2>
          <p
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="text-lg mt-2 text-black dark:text-white-text mb-12">
            {t("whyJoinUsDescription")}{" "}
          </p>
          <CardFeedback />
        </div>
      </section>
    </>
  );
}
