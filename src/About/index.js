import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
const about = props => (
  <div className="about-container">
    <div className="title-container">
      <div className="titles">
        <div className="title">About</div>
        <div className="sub-title">Hi, I'm Isaiah Harris</div>
      </div>
      <div className="picture" />
    </div>
    <div className="body">
      <div>
        After discovering coding in High-School, I've been determined to improve
        myself as a developer everyday.
      </div>
      <div>
        Four months later, I completed an immersive Javascript Coding Bootcamp
        in Honolulu, Hawaii. Since then I have enjoyed being a Teachers
        Assistant. I also have taken multiple online courses and participated in
        multiple meetups and hackathons to enhance my skills.
      </div>
      <div>
        I'm passionate, always ready for a challenge, and open to new
        experiences.
      </div>
    </div>
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
        <Link to="/contact">
          <i className="fas fa-envelope" />
        </Link>
      </div>
    </div>
  </div>
);

export default about;
