import React from 'react';

const ProjectCard5ClientComponent = ({ imgPath, isBlog, title, description, ghLink }) => {
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

export default ProjectCard5ClientComponent;
