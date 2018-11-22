import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
const SideBar = props => {
  let sideBarClasses = 'sidebar-container';
  if (props.show) {
    sideBarClasses = 'sidebar-container open';
  }
  return (
    <div className={sideBarClasses}>
      <div className="header">
        <div className="close" onClick={props.click} />
      </div>
      <ul className="links">
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
      </ul>
      <div className="logo" />
    </div>
  );
};

export default SideBar;
