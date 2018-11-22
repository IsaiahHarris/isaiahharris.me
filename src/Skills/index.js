import React, { Component } from 'react';
import './Skills.scss';
class Skills extends Component {
  render() {
    let frontEndSkills = [
      'HTML5',
      'CSS3',
      'JavaScipt',
      'React',
      'Redux',
      'Angular',
      'TypeScript',
      'Sass',
      'Material',
      'JQuery',
      'Gulp.js'
    ];
    let backEndSkills = [
      'Node.js',
      'Express.js',
      'Python',
      'AWS',
      'DynamoDB',
      'Databases',
      'SQL',
      'PostgreSQL',
      'Knex.js',
      'Bookshelf.js'
    ];
    let concepts = [
      'Responsive Design',
      'OOP',
      'Serverless',
      "REST API's",
      'Model View Control',
      'LEAN'
    ];

    let tools = [
      'Git',
      'GitHub',
      'Trello',
      'Postman',
      'Browser Dev Tools',
      'WebPack',
      'Babel',
      'NPM'
    ];
    let currentlyLearning = [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'Vue.js'
    ];

    return (
      <div className="skills-container">
        <div className="header">SKILLS</div>
        <div className="skills">
          <div className="front-end-skill-header">Front End</div>
          <div className="skill-container">
            {frontEndSkills.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  - {skill}
                </div>
              );
            })}
          </div>
          <div className="border" />
          <div className="skill-header">Back End</div>
          <div className="skill-container">
            {backEndSkills.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  - {skill}
                </div>
              );
            })}
          </div>
          <div className="border" />
          <div className="skill-header">Tools</div>
          <div className="skill-container">
            {tools.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  - {skill}
                </div>
              );
            })}
          </div>
          <div className="border" />
          <div className="skill-header">Concepts</div>
          <div className="skill-container">
            {concepts.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  - {skill}
                </div>
              );
            })}
          </div>
          <div className="border" />
          <div className="skill-header">Currently Learning</div>
          <div className="skill-container">
            {currentlyLearning.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  - {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;