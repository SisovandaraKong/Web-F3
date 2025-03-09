import Aos from "aos";
import React, { useEffect } from "react";
import CardOurMentor from "../components/cards/CardAboutUs/CardOurMentor";
import CardOurTeam from "../components/cards/CardAboutUs/CardOurTeam";
import CardAchievement from "../components/cards/CardAboutUs/CardAchievement";
import CardService from "../components/cards/CardAboutUs/CardService";
import CardContactUs from "../components/cards/CardAboutUs/CardContactUs";

export default function AboutUsPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <main className="bg-gray-50 dark:bg-[#111827]">
        <div className="">
          <section className="px-36 relative bg-[url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uQRrnlUBwOoqlNbcQSpYr/a4fbb0dbc1a6b5ba696410ff091039a8/GettyImages-2170485830.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div
                data-aos-duration="700"
                className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
              >
                <h1
                  data-aos="fade-right"
                  className="text-3xl font-extrabold text-white sm:text-5xl "
                >
                  Welcome To
                  <strong className="block font-extrabold text-secondary uppercase">
                    {" "}
                    JoobSeek.{" "}
                  </strong>
                </h1>
                <p
                  data-aos="fade-left"
                  className="mt-4 max-w-lg text-white sm:text-xl/relaxed   "
                >
                  <span className="text-primary">We connect job seekers, </span>
                  freelancers, and employers. Our platform makes it easy to find
                  work and hire talent.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="max-w-screen-xl m-auto min-w-full">
          <section className="mt-28 grid grid-cols-1 md:grid-cols-2 px-36 gap-20">
            <div>
              <img
                data-aos="fade-right"
                data-aos-duration="700"
                src="src/assets/imgAboutUs/Business mission.gif"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className=" m-auto "
            >
              <h2 className="text-Heading font-bold text-primary dark:text-white">
                Our Mission
              </h2>
              <p className="text-xl text-black-text dark:text-gray-300">
                Our mission is to connect job seekers, freelancers, and
                employers. We aim to simplify the job search and hiring process.
                Our platform helps talent find the right opportunities. We help
                businesses discover skilled professionals. We strive to create
                an environment where careers grow, and success is within reach
                for everyone.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 px-36 gap-20">
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              className=" m-auto "
            >
              <h2 className="text-Heading font-bold text-primary dark:text-white">
                Our Mission
              </h2>
              <p className="text-xl text-black-text dark:text-gray-300">
                Our mission is to connect job seekers, freelancers, and
                employers. We aim to simplify the job search and hiring process.
                Our platform helps talent find the right opportunities. We help
                businesses discover skilled professionals. We strive to create
                an environment where careers grow, and success is within reach
                for everyone.
              </p>
            </div>
            <div>
              <img
                data-aos="fade-left"
                data-aos-duration="700"
                src="src/assets/imgAboutUs/Critical thinking.gif"
                alt=""
              />
            </div>
          </section>

          <section className="mt-28 px-36">
            <div>
              <h2 data-aos="flip-left" className="text-MainTitle font-bold text-primary dark:text-white mb-4 text-center underline underline-offset-9 decoration-secondary">
                Our Mentor
              </h2>
            </div>
            <CardOurMentor />
          </section>

          <section className="mt-28 ">
            <div>
              <h2 data-aos="flip-left" className="text-MainTitle font-bold text-primary dark:text-white mb-4 text-center underline underline-offset-9 decoration-secondary">
                Our Team
              </h2>
            </div>
            <CardOurTeam />
          </section>

          <section className="mt-28 px-36">
            <div>
              <h2 className="text-MainTitle font-bold text-primary dark:text-white mb-4 text-center underline underline-offset-9 decoration-secondary">
                Achievement
              </h2>
            </div>
            <CardAchievement />
          </section>

          <section className="mt-28 px-36 ">
            <div>
              <h2 className="text-MainTitle font-bold text-primary dark:text-white mb-4 text-center underline underline-offset-9 decoration-secondary">
                Service
              </h2>
            </div>
            <CardService />
          </section>

          <section className="mt-28 px-36">
            <CardContactUs />
          </section>
        </div>
      </main>
    </>
  );
}