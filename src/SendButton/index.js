import React from 'react';

import './SendButton.scss';
const sendButton = props => {
  return (
    <button className="send" onClick={props.click} disabled={props.enable}>
      Send
    </button>
  );
};

export default sendButton;
