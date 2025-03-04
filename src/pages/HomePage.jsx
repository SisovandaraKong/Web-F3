import React from "react";
import Carousel from "../components/carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CardHowerEffec from "../components/cards/CardHowerEffec";
import Navbar from "../components/layouts/Navbar";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);
  return (
    <>
      <section>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <Carousel />
        </div>
      </section>
      <section>
        <CardHowerEffec />
      </section>
    </>
  );
}
