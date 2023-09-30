/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  profilepicNudeClassName: any;
  profilepicNude: string;
  USERNAMEUsernameClassName: any;
  spanClassName: any;
  text: string;
  text1: string;
}

export const Rectangle = ({
  className,
  profilepicNudeClassName,
  profilepicNude = "/img/profilepic-nude-1.svg",
  USERNAMEUsernameClassName,
  spanClassName,
  text = "USERNAME<br/>",
  text1 = "x follower/ y following",
}: Props): JSX.Element => {
  return (
    <div className={`rectangle ${className}`}>
      <div className="overlap-group-5">
        <img className={`profilepic-nude ${profilepicNudeClassName}`} alt="Profilepic nude" src={profilepicNude} />
        <p className={`USERNAME-username ${USERNAMEUsernameClassName}`}>
          <span className={`span ${spanClassName}`}>{text}</span>
          <span className="text-wrapper-2">
            username@gmail.com
            <br />
            <br />
          </span>
          <span className="text-wrapper-3">{text1}</span>
        </p>
      </div>
    </div>
  );
};

Rectangle.propTypes = {
  profilepicNude: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
