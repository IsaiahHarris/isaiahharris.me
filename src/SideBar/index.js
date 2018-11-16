import React, { Component } from 'react';
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
          <li className="link">Home</li>
          <li className="link">Home</li>
          <li className="link">Home</li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
