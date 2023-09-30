/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SideBar = ({
  className,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  divClassNameOverride,
  rectangleClassName1,
}) => {
  return (
    <div className={`side-bar ${className}`}>
      <div className="notification-button">
        <div className={`rectangle ${rectangleClassName}`} />
        <img
          className="notification-bell"
          alt="Notification bell"
          src="/img/notificationbell-1.png"
        />
      </div>
      <div className="new-course-button">
        <div className={`rectangle ${rectangleClassNameOverride}`} />
        <img className="image" alt="Image" src="/img/image-7.png" />
      </div>
      <div className="discord-button">
        <div className={`rectangle ${divClassName}`} />
        <img className="img" alt="Image" src="/img/image-6.png" />
      </div>
      <div className="div">
        <div className={`rectangle ${divClassNameOverride}`} />
        <img className="image-2" alt="Image" src="/img/image-5.png" />
      </div>
      <div className="discord-button-2">
        <div className={`rectangle ${rectangleClassName1}`} />
        <img className="image-3" alt="Image" src="/img/image-4.png" />
      </div>
    </div>
  );
};
