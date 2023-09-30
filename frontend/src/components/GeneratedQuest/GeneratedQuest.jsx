/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export const GeneratedQuest = ({
  text = 'desc.<br/>.<br/>.',
  text1 = 'Q1',
  line = '/img/line-5.svg',
}) => {
  return (
    <div className="generated-quest">
      <div className="q">{text1}</div>
      <div className="desc">{text}</div>
      <img className="line" alt="Line" src={line} />
    </div>
  );
};

GeneratedQuest.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  line: PropTypes.string,
};
