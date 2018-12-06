import React from 'react';
import './Experience.scss';

const experience = () => {
  function showProjects(subject) {
    let projectsContainer = document.getElementById('projects-container');
    let workContainer = document.getElementById('work-container');
    let projectsChoice = document.getElementById('projects-choice');
    let workChoice = document.getElementById('work-choice');
    if (subject === 'projects') {
      projectsContainer.style.zIndex = 1;
      workContainer.style.zIndex = 0;
      projectsChoice.className = 'choice-active';
      workChoice.className = 'work-choice';
    } else if (subject === 'work') {
      projectsContainer.style.zIndex = 0;
      workContainer.style.zIndex = 1;
      projectsChoice.className = 'projects-choice';
      workChoice.className = 'choice-active';
    }
  }

  return (
    <div className="experience-container">
      <div className="header">Experience</div>
      <div className="choices">
        <div
          className="work-choice"
          onClick={() => {
            showProjects('work');
          }}
        >
          <div className="work-choice-start" id="work-choice">
            Work
          </div>
        </div>
        <div
          className="projects-choice"
          onClick={() => {
            showProjects('projects');
          }}
        >
          <div className="projects-choice" id="projects-choice">
            Projects
          </div>
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
