import React from 'react';
import './Header.scss';
import OverLay from '../OverLay';
import $ from 'jquery';
import { Link } from 'react-router-dom';
const header = props => {
  //clear header function
  let lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && $(this).scrollTop() > 250) {
      $('#header-container')
        .stop(true, false)
        .fadeTo(200, 0);
    } else {
      $('#header-container')
        .stop(true, false)
        .fadeTo(200, 1);
    }
    lastScrollTop = st;
  });
  return (
    <div id="header-container" className="header-container">
      <OverLay className="over" click={props.sideBarClickHandler} />
      <Link to={'/contact'} className="contact">
        Contact
      </Link>
    </div>
  );
};

export default header;
