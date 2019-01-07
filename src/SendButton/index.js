import React from 'react';

import './SendButton.scss';
const sendButton = props => {
  return (
    <div className="send-container">
      <div className="send" onClick={props.click} disabled={props.enable}>
        <div className="send-text">Send</div>
      </div>
    </div>
  );
};

export default sendButton;
