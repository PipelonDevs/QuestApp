import React from "react";
import {SideBar} from "../../components/SideBar";
import "./style.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="div-2">
        <SideBar
          className="side-bar-instance"
          divClassName="design-component-instance-node"
          divClassNameOverride="design-component-instance-node"
          rectangleClassName="design-component-instance-node"
          rectangleClassName1="design-component-instance-node"
          rectangleClassNameOverride="design-component-instance-node"
        />
        <div className="overlap-group">
          <img
            className="element"
            alt="Element"
            src="/img/6d594022-947c-4c4d-bce2-cec8f198dc08-removebg-preview-1.png"
          />
          <div className="text-wrapper">QuestAppka</div>
        </div>
        <div className="text-wrapper-2">Twoja droga do developera</div>
      </div>
    </div>
  );
};
