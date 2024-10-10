import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="task-list">
        {project.tasks.map(task => (
          <div key={task.id} className="task-item">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
