/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import {EasyFlagLvl} from "../EasyFlagLvl";
import "./style.css";

export const PropertyDefault = ({
  // eslint-disable-next-line react/prop-types
  className,
  line = "/img/line1-1.svg",
  img = "/img/line2-1.svg",
}) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <EasyFlagLvl className="easy-flag-lvl-instance" />
        </div>
        <img className="arrow" alt="Arrow" src="/img/arrow-1-2.svg" />
      </div>
      <div className="div-3">
        <img className="arrow-2" alt="Arrow" src="/img/arrow-2-2.svg" />
        <div className="ellipse-2" />
      </div>
      <div className="div-2">
        <div className="ellipse-3" />
        <img className="arrow" alt="Arrow" src="/img/arrow-1-2.svg" />
      </div>
      <div className="div-3">
        <img className="arrow-2" alt="Arrow" src="/img/arrow-2-2.svg" />
        <div className="ellipse-2" />
      </div>
      <div className="last-quest">
        <div className="overlap">
          <div className="ellipse-4" />
          <img className="line" alt="Line" src={line} />
          <img className="line-2" alt="Line" src={img} />
        </div>
      </div>
    </div>
  );
};

PropertyDefault.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
};
