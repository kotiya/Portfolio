import React from 'react';

const ProjectCard6ClientComponent = ({ imgPath, isBlog, title, description, ghLink }) => {
  return (
    <ProjectCard
      imgPath={imgPath}
      isBlog={isBlog}
      title={title}
      description={description}
      ghLink={ghLink}
    />
  );
};

export default ProjectCard6ClientComponent;
