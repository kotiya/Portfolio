import React from "react";
import ProjectCard from "./ProjectCards";

const ProjectCardClientComponent = ({ imgPath, isBlog, title, description, ghLink, demoLink }) => {
  return (
    <ProjectCard
      imgPath={imgPath}
      isBlog={isBlog}
      title={title}
      description={description}
      ghLink={ghLink}
      demoLink={demoLink}
    />
  );
};

export default ProjectCardClientComponent;