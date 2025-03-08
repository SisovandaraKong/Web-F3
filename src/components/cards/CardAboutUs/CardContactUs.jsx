import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

export default function CardContactUs() {
  return (
    <div className=" px-10 flex flex-col md:flex-row items-center justify-between mx-auto p-6">
      <div className="mb-6 md:mb-0">
      <h2 data-aos="flip-left" className="text-MainTitle font-bold text-primary mb-4 underline underline-offset-9 decoration-secondary">
              Contact Us
            </h2>

        <div data-aos="fade-right" className="space-y-4 text-primary">
          <div className="flex items-center text-Sub2Title font-bold">
            <FiPhone />

            <a
              href="tel:+85531473327"
              className=" hover:text-blue-600 text-CardSubTitle mx-3"
            >
              +85531473327
            </a>
          </div>

          <div className="flex items-center text-Sub2Title font-bold">
            <MdOutlineMailOutline />
            <a
              href="mailto:info.jobseek@gmail.com"
              className=" hover:text-blue-600 text-CardSubTitle mx-3"
            >
              info.jobseek@gmail.com
            </a>
          </div>

          <div className="flex items-start text-Sub2Title font-bold">
            <IoLocationOutline />
            <address className=" not-italic text-CardSubTitle mx-3">
              No. 24, Street 562, Sangkat Boeung Kok,
              <br />
              Toul Kork, Phnom Penh City.
            </address>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-xs">
        <img
        data-aos="fade-left"
          src="src/assets/imgAboutUs/Contact.svg"
          alt="Contact illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
