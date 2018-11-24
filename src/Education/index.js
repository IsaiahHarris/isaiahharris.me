import React from 'react';
import './Education.scss';
const education = props => {
  return (
    <div className="education-container">
      <div className="header">EDUCATION</div>
      <div className="courses">
        <div className="course-container">
          <div className="title">
            DevLeague Full-Time JavaScript Web Engineering Coding Bootcamp
          </div>
          <div className="dl-img" />
          <div className="date">June 2018 - Sept 2018</div>
          <div className="description">
            Completed over 800 hours in an immersive JavaScript coding boot camp
            where I built full-stack web applications utilizing many JavaScript
            frameworks and libraries.
          </div>
        </div>
        <div className="course-container">
          <div className="title">
            Udacity PyTorch Scholarship Challenge from Facebook
          </div>
          <div className="date">Nov 2018 - Jan 2019</div>
          <div className="description">Udacity stuff</div>
        </div>
        <div className="course-container">
          <div className="title">Udemy: AWS Certified Developer Associate</div>
          <div className="date">Oct 2018</div>
          <div className="description">Udemy stuff</div>
        </div>
        <div className="course-container">
          <div className="title">Udemy: The Modern Python 3 Bootcamp</div>
          <div className="date">Oct 2018</div>
          <div className="description">Udemy stuff</div>
        </div>

        {/* {courses.map((course, key) => {
          switch (course) {
            case 'DevLeague Full-Time JavaScript Web Engineering Coding Bootcamp':
              return (
                <div key={key} className="course-container">
                  <div className="title">{course}</div>
                  <div className="date">June 2018 - Sept 2018</div>
                  <div className="description">Completed over 800 hours</div>
                </div>
              );
            case 'Udacity PyTorch Scholarship Challenge from Facebook':
              return (
                <div className="course-container">
                  <div className="title">{course}</div>
                  <div className="date">Nov 2018 Jan 2018</div>
                  <div className="description">Pytorch Udacrity stuff</div>
                </div>
              );
            default:
              break;
          }
        })} */}
      </div>
    </div>
  );
};
export default education;
