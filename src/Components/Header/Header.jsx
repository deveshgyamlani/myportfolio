import React from "react";
import "./Header.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Devesh,</span>Full Stack Developer based in India.{" "}
      </h1>
      <p1>I am a Full Stack Developer from Punjab, India.</p1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Header;
