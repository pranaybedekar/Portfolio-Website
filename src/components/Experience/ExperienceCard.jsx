import React from "react";
import "./Experience.css";

const ExperienceCard = ({
  companyName,
  role,
  companyDescription,
  imageUrl,
  companyUrl,
}) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <a href={companyUrl} className="project-external-link">
          <img src={imageUrl} alt="project" className="project-image-1" />
        </a>
      </div>

      <div className="project-details-container">
        <h2 className="project-heading-1">{companyName}</h2>
        <h4 className="project-heading-2">{role}</h4>
        <p className="project-details">{companyDescription}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
