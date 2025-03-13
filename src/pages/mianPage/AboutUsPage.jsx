import Aos from "aos";
import React, { useEffect } from "react";
import CardOurMentor from "../../components/cards/CardAboutUs/CardOurMentor";
import CardOurTeam from "../../components/cards/CardAboutUs/CardOurTeam";
import CardAchievement from "../../components/cards/CardAboutUs/CardAchievement";
import CardService from "../../components/cards/CardAboutUs/CardService";
import CardContactUs from "../../components/cards/CardAboutUs/CardContactUs";
import HeroSection from "../../components/cards/CardAboutUs/HeroSection";
import MissionSection from "../../components/cards/CardAboutUs/MissionSection";
import VisionSection from "../../components/cards/CardAboutUs/VisionSection";
import { useTranslation } from "react-i18next";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import VisionMissionValues from "./VisionMissionValues";
import OurMentor from "./OurMentor";
import OurTeam from "./OurTeam";
// import TeamSection from "./OurTeam";

export default function AboutUsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ScrollIndicator />
      <HeroSection />
      <div className="max-w-screen-xl mx-auto  sm:px-6 ">
        <VisionMissionValues />
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-primary text-center  mb-10">
            {t("Out Team")}
          </h2>
          <OurMentor />
          <OurTeam />
        </section>
        {/* <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-primary text-center underline underline-offset-8 decoration-secondary mb-10">
            {t("aboutUs.ourTeam")}
          </h2>
          <CardOurTeam />
        </section> */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-primary text-center underline underline-offset-8 decoration-secondary mb-10">
            {t("aboutUs.achievement")}
          </h2>
          <CardAchievement />
        </section>
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-primary text-center underline underline-offset-8 decoration-secondary mb-10">
            {t("aboutUs.service")}
          </h2>
          <CardService />
        </section>
        <section className="mt-20">
          <CardContactUs />
        </section>
      </div>
    </main>
  );
}
