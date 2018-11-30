import React from 'react';
import './Home.scss';
import './Animation.css';
const home = prop => (
  <div className="home-container">
    <div className="title">Isaiah Harris</div>
    <div className="logo-container">
      <img
        className="logo-top"
        src={require('../Assets/logo-top.png')}
        alt=""
      />
      <img
        className="logo-bottom"
        src={require('../Assets/logo-bottom.png')}
        alt=""
      />
    </div>
    <div className="sub-title">Software Developer</div>
  </div>
);

export default home;
