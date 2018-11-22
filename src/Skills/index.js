import React from 'react';
import './Skills.scss';
const skills = props => {
  let frontEndSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Redux',
    'Angular',
    'TypeScript',
    'Sass',
    'Material',
    'JQuery',
    'Gulp.js',
    'Bootstrap'
  ];
  let backEndSkills = [
    'Node.js',
    'Express.js',
    'Python',
    'Passport.js',
    'AWS',
    'DynamoDB',
    'Databases',
    'SQL',
    'ORM',
    'PostgreSQL',
    'Knex.js',
    'Bookshelf.js'
  ];
  let concepts = ['UI/UX', 'OOP', 'Serverless', "REST API's", 'MVC', 'LEAN'];

  let tools = [
    'Git',
    'GitHub',
    'Trello',
    'Postman',
    'Dev Tools',
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
        <div className="logo-container">
          <i class="fab fa-js-square" />
          <i class="fab fa-react" />
          <i class="fab fa-sass" />
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
        <div className="logo-container">
          <i class="fab fa-node-js" />
          <i class="fab fa-aws" />
          <i class="fas fa-database" />
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
        <div className="border-bot" />
      </div>
    </div>
  );
};
export default skills;
