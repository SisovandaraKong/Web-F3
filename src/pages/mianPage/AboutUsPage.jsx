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
export default function AboutUsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <ScrollIndicator/>
      <HeroSection />
      <div className="max-w-screen-xl m-auto min-w-full">
        <MissionSection />
        <VisionSection />

        <section className="mt-28 px-36">
          <div>
            <h2
              data-aos="flip-right"
              className="text-MainTitle font-bold text-primary mb-4 text-center underline underline-offset-9 decoration-secondary">
              {t("aboutUs.ourMentor")}
            </h2>
          </div>
          <CardOurMentor />
        </section>

        <section className="mt-28">
          <div>
            <h2
              data-aos="flip-right"
              className="text-MainTitle font-bold text-primary mb-4 text-center underline underline-offset-9 decoration-secondary">
              {t("aboutUs.ourTeam")}
            </h2>
          </div>
          <CardOurTeam />
        </section>

        <section className="mt-28 px-36">
          <div>
            <h2
              data-aos="flip-right"
              className="text-MainTitle font-bold text-primary mb-4 text-center underline underline-offset-9 decoration-secondary">
              {t("aboutUs.achievement")}
            </h2>
          </div>
          <CardAchievement />
        </section>

        <section className="mt-28 px-36">
          <div>
            <h2
              data-aos="flip-right"
              className="text-MainTitle font-bold text-primary mb-4 text-center underline underline-offset-9 decoration-secondary">
              {t("aboutUs.service")}
            </h2>
          </div>
          <CardService />
        </section>

        <section className="mt-28 px-36">
          <CardContactUs />
        </section>
      </div>
    </main>
  );
}
