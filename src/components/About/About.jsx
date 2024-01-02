import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header heading="About Me" />

      <div className="about-main">
        <div className="about-main-left">
          <p className="about-details-1">
            Hello everyone, I'm Pranay Bedekar from Navi Mumbai, India. I
            possess skills in Java development and web development, which I
            acquired after successfully completing a comprehensive Java course
            at Squad Infotech Pvt. Ltd. Additionally, I have gained valuable
            practical experience through a couple of internships in the IT
            industry. I am eager to leverage my technical expertise, combined
            with my internship experiences, to contribute to a dynamic
            organization and make a positive impact in the field of software
            development.
          </p>

          <h2 className="about-sub-head">Education</h2>
          <div className="edu-container">
            <p className="about-details">
              <a
                className="about-link-element"
                href="https://www.pce.ac.in/about/the-institute/"
              >
                Pillai College of Engineering, New Panvel{" "}
                <div className="stream">B.E in E&TC</div>
              </a>
              Accomplished my undergraduate journey with remarkable
              achievements, reflecting adaptability, teamwork, and a growth
              mindset.
            </p>
          </div>

          <div className="edu-container">
            <p className="about-details">
              <a className="about-link-element" href="https://www.acpce.org/">
                A.C. Patil College of Engineering, Kharghar{" "}
                <div className="stream">Diploma in E&TC</div>
              </a>
              Completed the diploma with distinction, demonstrating a keen
              understanding of emerging trends and technologies
            </p>
          </div>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />

      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
