import { useState, useEffect } from "react";
import Button from "../button/Button";

const slides = [
  {
    title: "Prosper in this volatile market funding.",
    subtitle:
      "We place you at the centre of international networks to advance your strategic interests.",
    buttonText: "Our Team",
    image: "https://www.workandlearnindiana.com/assets/images/home-hero.jpg",
  },
  {
    title: "Scale Your Business With Custom Web Solutions",
    subtitle:
      "From responsive websites to e-commerce platforms, we create the perfect digital solution for your business needs.",
    buttonText: "Our Services",
    image:
      "https://asset.gallup.com/p/WORKPLACEV9CMS/f10390ee-e9b1-461a-97d6-b82169fa25c0.jpg",
  },
  {
    title: "Modern Web Development That Converts",
    subtitle:
      "Transform your ideas into powerful websites that attract clients and grow your business revenue.",
    buttonText: "View Portfolio",
    image:
      "https://www.calendar.com/wp-content/uploads/2022/02/How-to-Catch-up-at-Work.jpg.webp",
  },
];

const Carousel = () => {
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
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={`decoration-${slide}`}
            className={`
            absolute
            bg-gradient-to-b from-primary/40 
            z-10
            h-[200vh] w-[100px]
            left-[450px] -top-30
            transform rotate-25
            transition-all duration-700 ease-in-out
            ${
              index === currentSlide
                ? "opacity-70 translate-x-0"
                : "opacity-0 translate-x-full"
            }
          `}
          />
        ))}
        {slides.map((slide, index) => (
          <div
            key={`decoration-${slide}`}
            className={`
            absolute
            bg-gradient-to-b from-primary/70  
            z-10
            h-[200vh] w-[100px]
            left-[561px] -top-30
            transform rotate-25
            transition-all duration-700 ease-in-out
            ${
              index === currentSlide
                ? "opacity-70 translate-x-0"
                : "opacity-0 translate-x-full"
            }
          `}
          />
        ))}
        {slides.map((slide, index) => (
          <div
            key={`decoration-${slide}`}
            className={`
            absolute
            bg-gradient-to-b from-primary/100
            z-10
            h-[200vh] w-[500px]
            left-[-20px] -top-30
            transform -rotate-50
            transition-all duration-700 ease-in-out
            ${
              index === currentSlide
                ? "opacity-70 translate-x-0"
                : "opacity-0 translate-x-full"
            }
          `}
          />
        ))}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <img
              key={`image-${index}`}
              src={slide.image}
              alt="Slide"
              className={`
              absolute inset-0 w-full h-[100vh]
              object-cover
              transition-all duration-700 ease-in-out
              ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }
            `}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col z-20 justify-center items-start px-5 md:px-20 xl:px-36 text-white">
          {slides.map((slide, index) => (
            <div
              key={`content-${index}`}
              className={`
              transition-all duration-700 ease-in-out 
              absolute 
              ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }
            `}>
              <h2 className="text-3xl md:text-6xl font-bold relative z-20  xl:w-[1000px] ">
                {slide.title}
              </h2>
              <p className="mt-2 text-lg md:text-xl relative z-20">
                {slide.subtitle}
              </p>
              <Button text="Start" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Carousel;
