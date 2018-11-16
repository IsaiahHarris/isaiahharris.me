import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="overlay">
          <div className="line" />
          <div className="line-mid" />
          <div className="line" />
        </div>
        <div className="contact">contact</div>
      </div>
    );
  }
}

export default Header;
