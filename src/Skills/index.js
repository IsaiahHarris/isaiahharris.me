import React from 'react';
import './Skills.scss';

const skills = props => {
  let frontEndSkills = [
    ' JavaScript',
    ' React.js',
    ' React Native',
    ' Redux',
    ' HTML5',
    ' CSS3',
    ' Angular',
    ' TypeScript',
    ' Sass',
    ' JQuery',
    ' Gulp.js',
    ' Material UI'
  ];
  let backEndSkills = [
    ' Node.js',
    ' Express.js',
    ' Python',
    ' Passport.js',
    ' AWS',
    ' DynamoDB',
    ' Databases',
    ' SQL',
    ' ORM',
    ' PostgreSQL',
    ' Knex.js',
    ' Bookshelf.js'
  ];
  let concepts = [
    ' UI/UX',
    ' OOP',
    ' Serverless',
    " REST API's",
    ' MVC',
    ' LEAN',
    ' Agile Dev',
    ' DRY'
  ];

  let tools = [
    ' Git',
    ' GitHub',
    ' Trello',
    '  Postman',
    ' Dev Tools',
    ' WebPack',
    ' Babel',
    ' NPM'
  ];
  let currentlyLearning = ['Deep Learning', 'IOS/Android', 'PyTorch', 'Vue.js'];

  return (
    <div className="skills-container">
      <div className="header-1">SKILLS</div>
      <div className="skills">
        <div className="top-block">
          <div className="front-end-skill-header">Front End</div>
          <div className="skill-container">
            {frontEndSkills.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  {`${'- ' + skill}`}
                </div>
              );
            })}
          </div>
          <div className="logo-container">
            <i className="fab fa-js-square" />
            <i className="fab fa-react" />
            <i className="fab fa-sass" />
          </div>
          <div className="border-container-skill">
            <div className="border" />
          </div>
        </div>
        <div className="block">
          <div className="skill-header">Back End</div>
          <div className="skill-container">
            {backEndSkills.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  {`${'- ' + skill}`}
                </div>
              );
            })}
          </div>
          <div className="logo-container">
            <i className="fab fa-node-js" />
            <i className="fab fa-aws" />
            <i className="fas fa-database" />
          </div>
          <div className="border-container-skill">
            <div className="border" />
          </div>
        </div>
        <div className="block">
          <div className="skill-header">Tools</div>
          <div className="skill-container">
            {tools.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  {`${'- ' + skill}`}
                </div>
              );
            })}
          </div>
          <div className="logo-container">
            <i className="fab fa-github" />
            <i className="fab fa-npm" />
            <i className="fas fa-code-branch" />
          </div>
          <div className="border-container-skill">
            <div className="border" />
          </div>
        </div>
        <div className="block">
          <div className="skill-header">Concepts</div>
          <div className="skill-container">
            {concepts.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  {`${'- ' + skill}`}
                </div>
              );
            })}
          </div>
          <div className="logo-container">
            <i className="fas fa-route" />
            <i className="fas fa-cloud" />
            <i className="fas fa-code" />
          </div>
          <div className="border-container-skill">
            <div className="border" />
          </div>
        </div>
        <div className="currently-block">
          <div className="skill-header">Currently Learning</div>
          <div className="skill-container">
            {currentlyLearning.map((skill, key) => {
              return (
                <div key={key} className="skill">
                  {`${'- ' + skill}`}
                </div>
              );
            })}
          </div>
          <div className="logo-container">
            <i className="fas fa-robot" />
            <i className="fab fa-vuejs" />
            <i className="fas fa-fire" />
          </div>
          <div className="border-bot" />
        </div>
      </div>
    </div>
  );
};
export default skills;
