/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import {RectangleWrapper} from "../RectangleWrapper";
import "./style.css";

interface Props {
  className: any;
  iconForward: string;
}

export const QuestMap = ({
  className,
  iconForward = "/img/icon-forward-10-seconds.png",
}: Props): JSX.Element => {
  return (
    <div className={`quest-map ${className}`}>
      <div className="overlap-group-6">
        <div className="text-wrapper-4">zobacz wszystkie</div>
        <div className="text-wrapper-5">OSIĄGNIĘCIA</div>
        <div className="overlap">
          <RectangleWrapper
            className="rectangle-7-achievement-info"
            divClassName="rectangle-instance"
            divClassNameOverride="rectangle-instance"
            text="DYCHA!"
            text1="Utrzymaj ciąg rozwiązań przez dziesięć dni."
          />
          <RectangleWrapper
            className="rectangle-7-achievement-info-instance"
            divClassName="rectangle-instance"
            divClassNameOverride="rectangle-instance"
            text="PIĄTKA!"
            text1="Utrzymaj ciąg rozwiązań przez pięć dni."
          />
          <img className="icon-forward" alt="Icon forward" src={iconForward} />
          <img
            className="icon-forward-2"
            alt="Icon forward"
            src="/img/icon-forward-5-seconds-1.png"
          />
        </div>
        <div className="overlap-2">
          <RectangleWrapper
            className="rectangle-7-achievement-info"
            divClassName="rectangle-instance"
            divClassNameOverride="rectangle-instance"
            text="START!"
            text1="Wyślij pierwsze rozwiązanie."
          />
          <img className="group" alt="Group" src="/img/group-1.png" />
        </div>
      </div>
    </div>
  );
};

QuestMap.propTypes = {
  iconForward: PropTypes.string,
};
