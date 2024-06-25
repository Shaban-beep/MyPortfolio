import "./HeroImgStyles.css";
import introbg from "../assets/introbg.jpg";
import { Link } from "react-router-dom";
import React from "react";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="introbg" src={introbg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <Link to="/project" className="btn">
        Projects
      </Link>
      <Link to="/contact" className="btn btn-light">
        Contact
      </Link>
      </div>
      
    </div>
  );
}

export default HeroImg;
