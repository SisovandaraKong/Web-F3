import { useState, useEffect } from "react";

const slides = [
  {
    title: "Build Your Online Presence Today",
    subtitle:
      "Custom web solutions tailored for freelancers and small businesses to help you stand out in the digital world.",
    buttonText: "Get Started",
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
    <div className="relative w-screen h-screen overflow-hidden">
      {slides.map((index) => (
        <div
          key={`decoration-${index}`}
          className={`
            absolute z-10 
            bg-blue-900
            h-24 w-full 
            top-12 -right-48
            rotate-45
            transform
            transition-all duration-700 ease-in-out
            ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
          `}
        />
      ))}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="Slide"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent "></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 text-white px-[120px]">
        <h2
          data-aos="fade-left"
          key={currentSlide}
          className="text-4xl md:text-5xl font-bold z-20">
          {slides[currentSlide].title}
        </h2>
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          key={`sub-${currentSlide}`}
          className="mt-2 text-lg md:text-xl z-20 ">
          {slides[currentSlide].subtitle}
        </p>
        <button
          data-aos="fade-left"
          data-aos-delay="400"
          key={`btn-${currentSlide}`}
          className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition">
          {slides[currentSlide].buttonText}
        </button>
      </div>
    </div>
  );
};
export default Carousel;
