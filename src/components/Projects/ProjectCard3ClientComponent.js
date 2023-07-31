import React from 'react';

const ProjectCard3ClientComponent = ({ imgPath, isBlog, title, description, ghLink, demoLink }) => {
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

export default ProjectCard3ClientComponent;
