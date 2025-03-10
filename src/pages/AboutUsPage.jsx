import Aos from "aos";
import React, { useEffect } from "react";
import CardOurMentor from "../components/cards/CardAboutUs/CardOurMentor";
import CardOurTeam from "../components/cards/CardAboutUs/CardOurTeam";
import CardAchievement from "../components/cards/CardAboutUs/CardAchievement";
import CardService from "../components/cards/CardAboutUs/CardService";
import CardContactUs from "../components/cards/CardAboutUs/CardContactUs";
import HeroSection from "../components/cards/CardAboutUs/HeroSection";
import MissionSection from "../components/cards/CardAboutUs/MissionSection";
import VisionSection from "../components/cards/CardAboutUs/VisionSection";
export default function AboutUsPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <main className="dark:bg-black">
        <HeroSection />
        <div className="max-w-screen-xl m-auto min-w-full">
          <MissionSection />
          <VisionSection />

          <section className="mt-28 px-36">
            <div>
              <h2
                data-aos="flip-right"
                className="dark:text-white text-MainTitle font-bold text-primary mb-4  text-center underline underline-offset-9 decoration-secondary"
              >
                Our Mentor
              </h2>
            </div>
            <CardOurMentor />
          </section>

          <section className="mt-28 ">
            <div>
              <h2
                data-aos="flip-right"
                className="text-MainTitle font-bold text-primary mb-4 dark:text-white text-center underline underline-offset-9 decoration-secondary"
              >
                Our Team
              </h2>
            </div>
            <CardOurTeam />
          </section>

          <section className="mt-28 px-36 ">
            <div>
              <h2
                data-aos="flip-right"
                className="text-MainTitle font-bold text-primary mb-4 dark:text-white text-center underline underline-offset-9 decoration-secondary"
              >
                Achievement
              </h2>
            </div>
            <CardAchievement />
          </section>

          <section className="mt-28 px-36 ">
            <div>
              <h2
                data-aos="flip-right"
                className="text-MainTitle font-bold text-primary mb-4 dark:text-white text-center underline underline-offset-9 decoration-secondary "
              >
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
