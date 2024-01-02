import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import { experienceData } from "./../../assets/experienceData";
import ExperienceCard from "./ExperienceCard";
import aboutVector from "./../../assets/about_vector.png";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="section-container">
        <Header
          heading="My Internships Experience"
          details="Here are a few internships I've worked on!"
        />

        <div className="project-cards-container">
          {experienceData.map(
            ({
              companyName,
              role,
              companyDescription,
              imageUrl,
              companyUrl,
            }) => {
              return (
                <ExperienceCard
                  companyName={companyName}
                  role={role}
                  companyDescription={companyDescription}
                  companyUrl={companyUrl}
                  imageUrl={imageUrl}
                />
              );
            }
          )}
        </div>
        <div className="vector-frame">
          <img src={aboutVector} className="about-vector" alt="about" />
        </div>

        <div className="name">Certification</div>
        <div className="container">
          <img
            className="certificate-img"
            src="https://p.urbanpro.com/tv-prod/member/photo/963235-medium190ap.png"
            alt="Squad Logo"
          ></img>
          <a className="c-name" href="https://squadinfotech.in/vashi-center">
            SQUAD Infotech Pvt.Ltd
          </a>

          <div className="info">
            I have Successfully completed Professional Java Specialist course
            from squad infotech. During this course, I gained comprehensive
            knowledge and hands-on experience in Java programming. The course
            covered a wide range of topics, including core Java concepts,
            object-oriented programming, Java data structures, exception
            handling, multithreading, Java Collections Framework, and more.
            Additionally, I learned about Java frameworks and tools commonly
            used in the industry.
          </div>
          <button
            className="btn-1 btn-white-11"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1beEBhF9GeeuRoFNr6-sgq35Yy2C5TTb6/view"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <p className="btn-text-1">Certificate</p>
          </button>
        </div>
        <FooterLink phrase="Check out my " link="skills!" toAdress="/skills" />
      </div>
    </>
  );
};

export default Experience;
