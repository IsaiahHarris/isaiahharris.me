import React, { Component } from 'react';
import './Header.scss';
import OverLay from '../OverLay';
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <OverLay click={this.props.sideBarClickHandler} />
        <div className="contact">contact</div>
      </div>
    );
  }
}

export default Header;
