import React from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectPage = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectDetails key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectPage;
