import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
class SideBar extends Component {
  render() {
    let sideBarClasses = 'sidebar-container';
    if (this.props.show) {
      sideBarClasses = 'sidebar-container open';
    }
    return (
      <div className={sideBarClasses}>
        <div className="header">
          <div className="close" onClick={this.props.click} />
        </div>
        <ul className="links">
          <Link to="/" className="link" onClick={this.props.click}>
            Home
          </Link>
          <Link to="/about" className="link" onClick={this.props.click}>
            About
          </Link>
          <Link to="/skills" className="link" onClick={this.props.click}>
            Skills
          </Link>
          <Link to="/education" className="link" onClick={this.props.click}>
            Education
          </Link>
        </ul>
        <div className="logo" />
      </div>
    );
  }
}

export default SideBar;
