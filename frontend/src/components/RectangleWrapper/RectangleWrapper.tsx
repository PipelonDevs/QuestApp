/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  text: string;
  divClassNameOverride: any;
  text1: string;
}

export const RectangleWrapper = ({
  className,
  divClassName,
  text = "TITLE",
  divClassNameOverride,
  text1 = "DESC",
}: Props): JSX.Element => {
  return (
    <div className={`rectangle-wrapper ${className}`}>
      <div className="rectangle-2" />
      <div className={`TITLE ${divClassName}`}>{text}</div>
      <div className={`DESC ${divClassNameOverride}`}>{text1}</div>
    </div>
  );
};

RectangleWrapper.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
