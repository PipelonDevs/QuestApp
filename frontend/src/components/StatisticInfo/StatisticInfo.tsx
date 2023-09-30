/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  overlapGroupClassName: any;
  streak: string;
  text: string;
  text1: string;
}

export const StatisticInfo = ({
  className,
  overlapGroupClassName,
  streak = "/img/streak-1-2.png",
  text = "statistic name",
  text1 = "100",
}: Props): JSX.Element => {
  return (
    <div className={`statistic-info ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <img className="streak" alt="Streak" src={streak} />
      </div>
      <div className="statistic-name">{text}</div>
      <div className="element">{text1}</div>
    </div>
  );
};

StatisticInfo.propTypes = {
  streak: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
