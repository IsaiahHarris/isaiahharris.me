import React from 'react';
import './Education.scss';
import Border from '../Border';

const education = props => {
  return (
    <div className="education-container">
      <div className="header-1">EDUCATION</div>
      <div className="courses">
        <div className="course-container">
          <div className="title">
            DevLeague JavaScript Web Engineering Coding Bootcamp
          </div>
          <div className="dl-img" />
          <div className="date">June 2018 - Sept 2018</div>
          <div className="description">
            Completed over 800 hours in an immersive JavaScript coding boot camp
            where I built full-stack web applications utilizing many JavaScript
            frameworks and libraries.
            <div className="border-container-education">
              <div className="border" />
            </div>
          </div>
        </div>
        <div className="course-container">
          <div className="title">
            Udacity PyTorch Scholarship Challenge from Facebook
          </div>
          <div className="udacity-img" />
          <div className="date">Nov 2018 - Jan 2019</div>
          <div className="description">
            Awarded a scholarship from Facebook to learn Deep Learning with
            Pytorch. Learned to build and train a model that identifies flower
            species from images.
            <div className="border-container-education">
              <div className="border" />
            </div>
          </div>
        </div>
        <div className="course-container">
          <div className="title">Udemy: AWS Certified Developer Associate</div>
          <div className="udemy-img" />
          <div className="date">Oct 2018</div>
          <div className="description">
            Completed course to help me become a certified developer associate.
            Worked with services like S3, EC2, Dynamo DB and Lambda.
            <div className="border-container-education">
              <div className="border" />
            </div>
          </div>
        </div>
        <div className="course-container">
          <div className="title">Udemy: The Modern Python 3 Bootcamp</div>
          <div className="udemy-img" />
          <div className="date">Oct 2018</div>
          <div className="description">
            Learned coding fundamentals and latest features in Python to help me
            with deep learning in PyTorch.
          </div>
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
