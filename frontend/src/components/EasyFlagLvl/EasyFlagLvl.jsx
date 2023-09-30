/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react';
import './style.css';

// eslint-disable-next-line react/prop-types
export const EasyFlagLvl = ({className}) => {
  return (
    <div className={`easy-flag-lvl ${className}`}>
      <div className="rectangle-2" />
      <img className="polygon" alt="Polygon" src="/img/polygon-1-1.svg" />
      <div className="rectangle-3" />
      <div className="rectangle-4" />
    </div>
  );
};
