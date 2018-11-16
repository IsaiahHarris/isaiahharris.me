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
          <Link to="/" className="link">
            Home
          </Link>
          <li className="link">Home</li>
          <li className="link">Home</li>
        </ul>
        <div className="logo" />
      </div>
    );
  }
}

export default SideBar;
