import React from 'react';

import './SendButton.scss';
const sendButton = props => {
  return (
    <div className="send-container">
      <button className="send" onClick={props.click} disabled={props.enable}>
        Send
      </button>
    </div>
  );
};

export default sendButton;
