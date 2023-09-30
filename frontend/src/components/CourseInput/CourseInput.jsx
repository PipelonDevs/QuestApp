/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export const CourseInput = ({
  className,
  divClassName,
  text = 'tutaj jest opis kursu do prompta',
}) => {
  return (
    <div className={`course-input ${className}`}>
      <p className={`tutaj-jest-opis ${divClassName}`}>{text}</p>
    </div>
  );
};

CourseInput.propTypes = {
  text: PropTypes.string,
};
