import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import aboutVector from "./../../assets/about_vector.png";

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects"
        details="Here are a few cool things I've worked on, do check them out!"
      />

      <div className="project-cards-container">
        {projectsData.map(
          ({
            projectName,
            projectDescription,
            imageUrl,
            projectUrl,
            githubUrl,
          }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                projectUrl={projectUrl}
                imageUrl={imageUrl}
                githubUrl={githubUrl}
              />
            );
          }
        )}
      </div>
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>

      <FooterLink
        phrase="Check out my "
        link="experience!"
        toAdress="/Experience"
      />
    </div>
  );
};

export default Projects;
