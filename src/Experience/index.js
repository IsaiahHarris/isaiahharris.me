import React from 'react';
import './Experience.scss';

const experience = () => {
  function showProjects(subject) {
    let projectsContainer = document.getElementById('projects-container');
    let workContainer = document.getElementById('work-container');
    if (subject === 'projects') {
      projectsContainer.style.zIndex = 1;
      workContainer.style.zIndex = 0;
    } else if (subject === 'work') {
      projectsContainer.style.zIndex = 0;
      workContainer.style.zIndex = 1;
    }
  }

  return (
    <div className="experience-container">
      <div className="header">Experience</div>
      <div className="choices">
        <div
          className="work"
          onClick={() => {
            showProjects('work');
          }}
        >
          Work
        </div>
        <div
          className="projects"
          onClick={() => {
            showProjects('projects');
          }}
        >
          Projects
        </div>
      </div>
      <div className="work-container" id="work-container">
        im work
      </div>
      <div className="projects-container" id="projects-container">
        im projects
      </div>
    </div>
  );
};

export default experience;
