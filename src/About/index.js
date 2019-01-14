import React from 'react';
import './About.scss';
import Border from '../Border';
const about = props => (
  <div className="about-container">
    <div className="block">
      <div className="header-1">
        <div className="titles">
          <div className="title">ABOUT ME</div>
          <div className="sub-title">Hi, I'm Isaiah.</div>
        </div>
        <div className="picture-container">
          <div className="picture" />
        </div>
      </div>
      <div className="body">
        <div className="paragraph-1">
          After discovering coding in High-School, I've been determined to
          improve myself as a developer everyday.
        </div>
        <div className="paragraph-2">
          Four months later, I completed an immersive Javascript Coding Bootcamp
          in Honolulu, Hawaii. Since then I have enjoyed being a Teachers
          Assistant. I also have taken multiple online courses and participated
          in multiple meetups and hackathons to enhance my skills.
        </div>
        <div className="paragraph-3">
          I'm passionate, always ready for a challenge, and open to new
          experiences.
        </div>
      </div>
    </div>
    <div className="border-container-about" />
    <div className="footer">
      <div className="icon-container">
        <a
          href="https://www.github.com/IsaiahHarris"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://linkedin.com/in/isaiah-a-harris"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://medium.com/@isaiah.harris.hi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-medium-m" />
        </a>
        <a
          href="https://www.instagram.com/isaiah.h__/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </div>
);

export default about;

/* <div className="title-container">
      <div className="titles">
        <div className="title">ABOUT</div>
        <div className="sub-title">HI, I'm Isaiah Harris.</div>
      </div>
      <div className="picture" />
    </div>
    <div className="body-container">
      <div className="body">
        <div className="paragraph-1">
          After discovering coding in High-School, I've been determined to
          improve myself as a developer everyday.
        </div>
        <div className="paragraph">
          Four months later, I completed an immersive Javascript Coding Bootcamp
          in Honolulu, Hawaii. Since then I have enjoyed being a Teachers
          Assistant. I also have taken multiple online courses and participated
          in multiple meetups and hackathons to enhance my skills.
        </div>
        <div className="paragraph">
          I'm passionate, always ready for a challenge, and open to new
          experiences.
        </div>
      </div>
    </div> */
