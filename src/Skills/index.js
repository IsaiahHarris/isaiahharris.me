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
      'SQL/NoSQL Databases',
      'PostgreSQL',
      'Knex.js',
      'Bookshelf.js'
    ];
    let concepts = [
      'Responsive Web Design',
      'Object Oriented Programming',
      'Serverless Architecture',
      "REST API's",
      'Model View Control',
      'LEAN'
    ];

    let tools = [
      'Git',
      'GitHub',
      'Trello',
      'Postman',
      'Browser Development Tools',
      'WebPack',
      'Babel',
      'NPM'
    ];
    let currentlyLearning = [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'Vue.js',
      'And More'
    ];

    return (
      <div className="skills-container">
        <div className="header">SKILLS</div>
        <div className="skills">
          <div className="front-end-skill-header">Front End</div>
          <div className="skill-container">
            {frontEndSkills.map((frontEndSkill, key) => {
              return (
                <div key={key} className="skill">
                  - {frontEndSkill}
                </div>
              );
            })}
          </div>
          <div className="border" />
          <div className="skill-header">Back End</div>
          <div className="skill-container">
            {frontEndSkills.map((frontEndSkill, key) => {
              return (
                <div key={key} className="skill">
                  - {frontEndSkill}
                </div>
              );
            })}
          </div>
          <div className="border" />
        </div>
      </div>
    );
  }
}
export default Skills;
