import React from 'react';
import './OverLay.scss';
const overLay = props => (
  <div className="overlay" onClick={props.click}>
    <div className="line" />
    <div className="line-mid" />
    <div className="line" />
  </div>
);

export default overLay;
