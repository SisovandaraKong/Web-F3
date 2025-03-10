import React from "react";
import "../../styles/CardHowerEffec.css";

const CardHowerEffec = ({ heading, content, svg }) => {
  return (
    <div className="card">
      <div className="card-front">
        <div className="card-icon">{svg}</div>
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
