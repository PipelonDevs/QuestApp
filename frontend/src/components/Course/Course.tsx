/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconTech } from "../IconTech";
import "./style.css";

interface Props {
  className: any;
  frameClassName: any;
  divClassName: any;
  text: string;
  divClassNameOverride: any;
  text1: string;
  overlapGroupClassName: any;
  frameClassNameOverride: any;
  SHORTDescWrapperClassName: any;
  SHORTDescClassName: any;
  text2: string;
  frameClassName1: any;
  iconTechIconTechClassName: any;
  iconTechIconTechClassNameOverride: any;
  iconTechDivClassName: any;
  iconTechDivClassNameOverride: any;
  iconTechIconTechClassName1: any;
  iconTechIconTechClassName2: any;
}

export const Course = ({
  className,
  frameClassName,
  divClassName,
  text = "COURSE NAME",
  divClassNameOverride,
  text1 = "#tags",
  overlapGroupClassName,
  frameClassNameOverride,
  SHORTDescWrapperClassName,
  SHORTDescClassName,
  text2 = "SHORT DESC.....<br/>.<br/>.<br/>.",
  frameClassName1,
  iconTechIconTechClassName,
  iconTechIconTechClassNameOverride,
  iconTechDivClassName,
  iconTechDivClassNameOverride,
  iconTechIconTechClassName1,
  iconTechIconTechClassName2,
}: Props): JSX.Element => {
  return (
    <div className={`course ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className={`COURSE-NAME ${divClassName}`}>{text}</div>
        <div className={`tags ${divClassNameOverride}`}>{text1}</div>
      </div>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <div className={`frame-wrapper ${frameClassNameOverride}`}>
          <div className={`SHORT-DESC-wrapper ${SHORTDescWrapperClassName}`}>
            <div className={`SHORT-DESC ${SHORTDescClassName}`}>{text2}</div>
          </div>
        </div>
        <div className={`frame-2 ${frameClassName1}`}>
          <IconTech className={iconTechIconTechClassName} />
          <IconTech className={iconTechIconTechClassNameOverride} />
          <IconTech className={iconTechDivClassName} />
          <IconTech className={iconTechDivClassNameOverride} />
          <IconTech className={iconTechIconTechClassName1} />
          <IconTech className={iconTechIconTechClassName2} />
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
