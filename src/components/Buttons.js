import React from 'react';
import FA from 'react-fontawesome';
import './Buttons.css';

const ReadPostButton = ({ classNames = '', post = {}, onClick = () => {}, buttonText = '' }) => (
  <div>
    <button onClick={ onClick } ><FA name="eye" /> { buttonText }</button>
  </div>
);

export default ReadPostButton;
