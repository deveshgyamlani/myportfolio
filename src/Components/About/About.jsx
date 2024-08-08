import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Creative and detail-oriented Front-End Developer with a passion for crafting engaging user experiences and bringing designs to life through clean, efficient code.</p>
            <p>Driven by a passion for web development, I specialize in creating intuitive and dynamic user interfaces that enhance the overall digital experience. </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p><hr style= {{width:"60%"}}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style= {{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p><hr style= {{width:"70%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Node JS</p><hr style= {{width:"40%"}}></hr>
            </div>
          </div>
        </div>
        
      </div>
      <div className="about-achievements">
          <div className="about-achivement">
            <h1>150+ </h1>
            <p> QUESTIONS OF DSA</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>90+ </h1>
            <p> PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>10+ </h1>
            <p> WEBSITES MADE</p>
          </div>
        </div>
    </div>
  );
};

export default About;
