// ProjectCard.js
import React from "react";

function ProjectCard({ imgPath, isBlog, title, description, ghLink, demoLink }) {
  return (
    <div className="project-card">
      <img src={imgPath} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a href={ghLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
