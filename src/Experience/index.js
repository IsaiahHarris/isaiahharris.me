import React from 'react';
import './Experience.scss';
import Border from '../Border';
const experience = () => {
  function switchPages(subject) {
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
            switchPages('work');
          }}
        >
          <div className="work-choice-start" id="work-choice">
            Work
          </div>
        </div>

        <div
          className="projects-choice"
          onClick={() => {
            switchPages('projects');
          }}
        >
          <div className="projects-choice" id="projects-choice">
            Projects
          </div>
        </div>
      </div>
      <div className="work-container" id="work-container">
        <div className="work-experience-container">
          <div className="course-container">
            <div className="title">
              DevLeague, Honolulu, Hawaii Coding Teaching Assistant
            </div>
            <div className="dl-img" />
            <div className="date">Nov 2018 - Present</div>
            <div className="description">
              Hired as a web development coding teaching assistant. Collaborate
              with teachers to monitor and promote learning and development of
              each student.
            </div>
            <Border />
          </div>
        </div>
      </div>
      <div className="projects-container" id="projects-container">
        <div className="phone-container">
          <i class="fas fa-mobile-alt" />
        </div>
        <div className="description-container">
          <div className="title">Garden Guru</div>
          <div className="desc">this is a desc</div>
          <div className="technology-container">
            <div className="tech">Angular 6</div>
            <div className="tech">Node.js</div>
            <div className="tech">PostgreSQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
