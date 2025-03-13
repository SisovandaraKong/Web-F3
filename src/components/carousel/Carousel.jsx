import { useState, useEffect } from "react";
import Button from "../button/Button";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Aos from "aos";

const slides = [
  {
    titleKey: "prosperInMarket",
    subtitleKey: "centerInternationalNetworks",
    buttonTextKey: "ourTeamButton",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?cs=srgb&dl=pexels-fauxels-3183197.jpg&fm=jpg",
  },
  {
    titleKey: "scaleBusiness",
    subtitleKey: "responsiveWebSolutions",
    buttonTextKey: "ourServicesButton",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
  {
    titleKey: "modernWebDevelopment",
    subtitleKey: "transformIdeasIntoWebsites",
    buttonTextKey: "viewPortfolioButton",
    image:
      "https://www.calendar.com/wp-content/uploads/2022/02/How-to-Catch-up-at-Work.jpg.webp",
  },
];
const Carousel = () => {
  const { t } = useTranslation(); // Initialize the t function for translations
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden dark:bg-black-background">
      {slides.map((slide, index) => (
        <div
          key={`decoration-${slide}`}
          className={`absolute bg-gradient-to-b from-[var(--color-primary-hover)]/40 z-10 h-[200vh] w-[100px] left-[450px] -top-30 transform rotate-25 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-70 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        />
      ))}
      {slides.map((slide, index) => (
        <div
          key={`decoration-${slide}`}
          className={`absolute bg-gradient-to-b from-[var(--color-primary)]/70 z-10 h-[200vh] w-[100px] left-[561px] -top-30 transform rotate-25 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-70 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        />
      ))}
      {slides.map((slide, index) => (
        <div
          key={`decoration-${slide}`}
          className={`absolute bg-gradient-to-b from-[var(--color-primary)]/100 z-10 h-[200vh] w-[500px] left-[-20px] -top-30 transform -rotate-50 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-70 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        />
      ))}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={`image-${index}`}
            src={slide.image}
            alt="Slide"
            className={`absolute inset-0 w-full h-[100vh] object-cover transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="absolute inset-0 flex flex-col z-20 justify-center items-start px-5 md:px-20 xl:px-32 text-white dark:text-[var(--color-white-text)]">
        {slides.map((slide, index) => (
          <div
            key={`content-${index}`}
            className={`transition-all duration-700 ease-in-out absolute ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}>
            <h2 className="text-3xl md:text-6xl font-bold relative z-20 xl:w-[1000px]">
              {t(slide.titleKey)}
            </h2>
            <p className="mt-2 text-lg md:text-xl relative z-20 mb-4">
              {t(slide.subtitleKey)}
            </p>
            <Button text={t(slide.buttonTextKey)} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
