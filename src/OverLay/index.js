import React from 'react';
import './OverLay.scss';
const overLay = props => (
  <div className="overlay" onClick={props.click}>
    <div className="line-1" />
    <div className="line-mid" />
    <div className="line-3" />
  </div>
);

export default overLay;
