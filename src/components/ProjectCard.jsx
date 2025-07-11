import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
