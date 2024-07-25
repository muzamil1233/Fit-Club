import React from "react";
import "./hero.css";
import Header from "../header/Header";
import Heart from "../../assets/heart (1).png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "linear" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text"> shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal body </span>
          </div>
          <div>
            <span>
              in here we will help you shape and build your ideal body and live
              upyour life to fullest
            </span>
          </div>
        </div>
        {/* figure section  */}

        <div className="figure">
          <div>
            <span>+130</span>
            <span>export coaches</span>
          </div>
          <div>
            <span>+700</span>
            <span>members</span>
          </div>
          <div>
            <span>+30</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* button */}
        <div className="hero-button">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <span>Calories burn</span>
          <span>220 kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
