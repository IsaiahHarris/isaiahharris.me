import React from 'react';
import './About.scss';

const about = props => (
  <div className="about-container">
    <div className="block">
      <div className="header-1">
        <div className="titles">
          <div className="title">ABOUT</div>
          <div className="sub-title">Hi, I'm Isaiah.</div>
        </div>
        <div className="picture-container">
          <div className="picture" />
        </div>
      </div>
      <div className="body">
        <div className="paragraph-1">
          After discovering coding, I became determined to improve myself as a
          developer everyday.
        </div>
        <div className="paragraph-2">
          I've completed an immersive JavaScript coding boot camp in Honolulu,
          Hawaii. Since then, I have enjoyed being a Software Developer and a
          Teachers Assistant.
        </div>
        <div className="paragraph-3">
          I'm passionate, always ready for a challenge, and open to new
          experiences.
        </div>
      </div>
    </div>

    <div className="about-border-container">
      <div className="border" />
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
          href="https://www.linkedin.com/in/isaiahaharris"
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
