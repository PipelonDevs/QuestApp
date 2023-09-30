/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export const QuestInfoBox = ({
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  divClassName,
  text = 'QUEST NAME',
  // eslint-disable-next-line react/prop-types
  questDescClassName,
  text1 = 'quest desc<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.',
}) => {
  return (
    <div className={`quest-info-box ${className}`}>
      <div className={`QUEST-NAME ${divClassName}`}>{text}</div>
      <div className={`quest-desc ${questDescClassName}`}>{text1}</div>
    </div>
  );
};

QuestInfoBox.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
