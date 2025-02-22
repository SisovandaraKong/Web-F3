import React from "react";
import Carousel from "../components/carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Carousel />
      </div>
      <h1 className="text-black text-7xl">Home page</h1>
    </>
  );
}
