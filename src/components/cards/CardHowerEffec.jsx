import React, { useEffect } from "react";
import "../../styles/CardHowerEffec.css";
import Aos from "aos";

const CardHowerEffec = ({ heading, content, svg }) => {
  useEffect(() => {
    Aos.init({ duration: 700, once: false });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="card">
      <div className="card-front">
        <div className="card-icon  ">{svg}</div>
        <h3 className="font-bold text-CardMainTitle dark:text-black-text">
          {heading}
        </h3>
      </div>
      <div className="card-content">
        <div className="card-icon hover-icon"></div>
        <h3 className="text-CardMainTitle  text-secondary font-bold">
          {heading}
        </h3>
        <p className="text-CardSubTitle text-white">{content}</p>
      </div>
    </div>
  );
};

export default CardHowerEffec;
