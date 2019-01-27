import React, { Component } from 'react';
import './Experience.scss';

class experience extends Component {
  constructor(props) {
    super(props);

    this.switchPages = this.switchPages.bind(this);
    this.switchDisplay = this.switchDisplay.bind(this);
  }
  switchPages(subject) {
    let projectsContainer = document.getElementById('projects-container');
    let workContainer = document.getElementById('work-container');
    let projectsChoice = document.getElementById('projects-choice');
    let workChoice = document.getElementById('work-choice');
    if (subject === 'projects') {
      projectsContainer.style.zIndex = 1;
      workContainer.style.zIndex = 0;
      workContainer.style.display = 'none';
      projectsContainer.style.display = 'flex';
      projectsChoice.className = 'choice-active';
      workChoice.className = 'work-choice-i';
    } else if (subject === 'work') {
      projectsContainer.style.zIndex = 0;
      projectsContainer.style.display = 'none';

      workContainer.style.zIndex = 1;
      workContainer.style.display = 'flex';
      projectsChoice.className = 'projects-choice-i';
      workChoice.className = 'choice-active';
    }
  }

  switchDisplay() {
    let projectsContainer = document.getElementById('projects-container');
    projectsContainer.style.display = 'none';
  }
  componentDidMount() {
    this.switchDisplay();
  }
  render() {
    return (
      <div className="experience-container">
        <div className="choices-container">
          <div className="choices">
            <div
              className="work-choice"
              onClick={() => {
                this.switchPages('work');
              }}
            >
              <div className="work-choice-start" id="work-choice">
                Work
              </div>
            </div>

            <div
              className="projects-choice"
              onClick={() => {
                this.switchPages('projects');
              }}
            >
              <div className="projects-choice-i" id="projects-choice">
                Projects
              </div>
            </div>
          </div>
        </div>
        <div className="work-container" id="work-container">
          <div className="course-container">
            <div className="title">Software Developer at 808 Tax Hawaii</div>
            <div className="tax-img" />
            <div className="date">Jan 2019 - Present</div>
            <div className="description">
              Hired to build full stack JavaScript web and mobile applications
              to streamline company processes. Position includes building upon
              and maintaining company website and systems.
            </div>
            <div className="border-experience-container">
              <div className="border" />
            </div>
          </div>
          <div className="course-container">
            <div className="title">
              Applications Software Developer at Hawaii Testing and Technology
            </div>

            <div className="htt-img" />
            <div className="date">Dec 2018 - Present</div>
            <div className="description">
              Working full time building, testing, and deploying full stack web
              and mobile applications to make the world of Non Destructive
              Testing in Hawaii technologically advanced.
            </div>
            <div className="border-experience-container">
              <div className="border" />
            </div>
          </div>
          <div className="course-container">
            <div className="title">Coding Teaching Assistant at DevLeague</div>
            <div className="dl-img" />
            <div className="date">Nov 2018 - Present</div>
            <div className="description">
              JavaScript web development coding teaching assistant. Collaborate
              with teachers to monitor and promote learning and development of
              each student.
            </div>
            <div className="border-experience-container">
              <div className="border" />
            </div>
          </div>
        </div>

        <div className="projects-container" id="projects-container">
          <div className="project">
            <div className="phone">
              <div className="phone-container">
                <img
                  className="phone-img"
                  src={require('../Assets/phone.png')}
                  alt=""
                />
                <img
                  className="garden-guru-img"
                  src={require('../Assets/gardenguru.png')}
                  alt=""
                />
              </div>
              <div className="border-container-project">
                <div className="border" />
              </div>
            </div>
            <div className="description-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gardenguru.farm"
                className="title"
              >
                gardenguru.farm
              </a>
              <div className="desc">
                Mobile friendly gardening assistant and virtual farmers market
                application.
              </div>
              <div className="technology-container">
                <div className="tech1">Angular 6</div>
                <div className="tech">Node.js</div>
                <div className="tech-bot">PostgreSQL</div>
                <a
                  className="github"
                  href="https://www.github.com/IsaiahHarris/GardenGuru"
                >
                  <div className="learn-more">View On Github</div>
                </a>
              </div>
            </div>
          </div>
          <div className="project-2">
            <div className="phone">
              <div className="phone-container">
                <img
                  className="phone-img"
                  src={require('../Assets/phone.png')}
                  alt=""
                />
                <img
                  className="garden-guru-img"
                  src={require('../Assets/portfolio.png')}
                  alt=""
                />
              </div>
              <div className="border-container-project">
                <div className="border" />
              </div>
            </div>
            <div className="description-container">
              <a target="_blank" rel="noopener noreferrer" className="title">
                isaiahharris.me
              </a>
              <div className="desc">
                My portfolio website! You're probably viewing it right now.
              </div>
              <div className="technology-container">
                <div className="tech1">React.js</div>
                <div className="tech">AWS</div>
                <div className="tech-bot">Dynamo DB</div>
                <a
                  className="github"
                  href="https://www.github.com/IsaiahHarris/portfolio"
                >
                  <div className="learn-more">View On Github</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default experience;
