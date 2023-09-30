/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  text: string;
  text1: string;
}

export const Technologychoosebox = ({
  text = "technology tags",
  text1 = "TECHNOLOGY NAME",
}: Props): JSX.Element => {
  return (
    <div className="technologychoosebox">
      <div className="TECHNOLOGY-tags">{text}</div>
      <div className="frame">
        <div className="TECHNOLOGY-NAME">{text1}</div>
      </div>
    </div>
  );
};

Technologychoosebox.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
