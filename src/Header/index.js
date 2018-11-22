import React from 'react';
import './Header.scss';
import OverLay from '../OverLay';
const header = props => (
  <div className="header-container">
    <OverLay click={props.sideBarClickHandler} />
    <div className="contact">contact</div>
  </div>
);

export default header;
