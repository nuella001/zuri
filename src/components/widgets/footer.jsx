import React from "react";
import ingressive from "../assets/images/ingressive.svg";
import Vector from "../assets/images/Vector.svg";
import hng from "../assets/images/hng.svg";
import github from "../assets/images/github.svg";
import slack from "../assets/images/slack.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex space-x-4 w-5/6 mx-auto align-center justify-center mt-10">
        <img src={github} alt="" />
        <img src={slack} alt="" />
      </div>
      <div className="mt-20 md:mt-56">
        <hr className="w-full text-black " />
        <div
          className="flex flex-col md:flex-row space-y-4 justify-between w-5/6 mx-auto 
    align-center justify-items-center mb-12 mt-12"
        >
          <div>
            <img src={Vector} alt="" />
          </div>
          <div>
            <img src={hng} alt="" />
          </div>
          <div>
            <img src={ingressive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
