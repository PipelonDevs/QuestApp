/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import {useNavigate} from "react-router-dom";

interface Props {
  rectangleClassName: any;
  rectangleClassNameOverride: any;
  divClassName: any;
  divClassNameOverride: any;
  rectangleClassName1: any;
}

export const SideBar = ({
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  divClassNameOverride,
  rectangleClassName1,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="side-bar">
      <div
        className="notification-button"
        onClick={() => console.log("Powiadomienia")}>
        <div className={`rectangle ${rectangleClassName}`} />
        <img
          className="notification-bell"
          alt="Notification bell"
          src="/img/notificationbell-1.png"
        />
      </div>

      <div
        className="new-course-button"
        onClick={() => navigate("/stworz-kurs", {})}>
        <div className={`rectangle ${rectangleClassNameOverride}`} />
        <img className="image" alt="Image" src="/img/image-7.png" />
      </div>
      <div className="discord-button" onClick={() => console.log("Discord")}>
        <div className={`rectangle ${divClassName}`} />
        <img className="img" alt="Image" src="/img/image-6.png" />
      </div>
      <div className="div" onClick={() => navigate("/profil", {})}>
        <div className={`rectangle ${divClassNameOverride}`} />
        <img className="image-2" alt="Image" src="/img/image-5.png" />
      </div>
      <div className="discord-button-2" onClick={() => navigate("/", {})}>
        <div className={`rectangle ${rectangleClassName1}`} />
        <img className="image-3" alt="Image" src="/img/image-4.png" />
      </div>
    </div>
  );
};
