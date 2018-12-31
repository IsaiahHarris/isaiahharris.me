import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
const sideBar = props => {
  let sideBarClasses = 'sidebar-container';
  if (props.show) {
    sideBarClasses = 'sidebar-container open';
  }
  return (
    <div className={sideBarClasses}>
      <div className="header">
        <div className="close" onClick={props.click} />
      </div>
      <div className="links">
        <Link to="/" className="link" onClick={props.click}>
          Home
        </Link>
        <Link to="/about" className="link" onClick={props.click}>
          About
        </Link>
        <Link to="/skills" className="link" onClick={props.click}>
          Skills
        </Link>
        <Link to="/education" className="link" onClick={props.click}>
          Education
        </Link>
        <Link to="/experience" className="link" onClick={props.click}>
          Experience
        </Link>
        <Link to="/contact" className="link" onClick={props.click}>
          Contact
        </Link>
      </div>
      <div className="logo" />
    </div>
  );
};

export default sideBar;
