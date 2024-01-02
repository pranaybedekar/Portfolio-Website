import React from "react";
import "./Projects.css";

const ProjectCard = ({
  projectName,
  projectDescription,
  imageUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <a href={projectUrl} className="project-external-link">
          <img src={imageUrl} alt="project" className="project-image" />
        </a>
      </div>

      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <div className="project-yt-link">
          {githubUrl && (
            <a href={githubUrl} className="project-yt-link">
              GitHub
            </a>
          )}
          <div className="project-yt-link-1">
            {projectUrl && (
              <a href={projectUrl} className="project-yt-link-1">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
