import React from "react";
import {Portfolio} from "../../components/Portfolio";
import {QuestMap} from "../../components/QuestMap";
import {Rectangle} from "../../components/Rectangle";
import {SideBar} from "../../components/SideBar";
import {StatisticInfo} from "../../components/StatisticInfo";
import {WyzwanieMiejskie} from "../../components/WyzwanieMiejskie";
import "./style.css";

export const ProfilPage = (): JSX.Element => {
  return (
    <div className="profil-page">
      <div className="div-2">
        <SideBar
          // className="side-bar-instance"
          divClassName="side-bar-2"
          divClassNameOverride="side-bar-2"
          rectangleClassName="side-bar-2"
          rectangleClassName1="side-bar-2"
          rectangleClassNameOverride="side-bar-2"
        />
        <div className="page-content">
          <div className="statystyki">
            <div className="text-wrapper-6">STATYSTYKI</div>
            <div className="badges">
              <div className="strike-container">
                <StatisticInfo
                  className="statistic-info-instance"
                  overlapGroupClassName="statistic-info-2"
                  streak="/img/streak-1-1.png"
                  text="Seria dni"
                  text1="16"
                />
              </div>
              <div className="longest-strike-wrapper">
                <StatisticInfo
                  className="statistic-info-instance"
                  overlapGroupClassName="statistic-info-2"
                  streak="/img/streak-1.png"
                  text="Najdłuższa seria"
                  text1="17"
                />
              </div>
            </div>
            <div className="text-wrapper-7">UKOŃCZONE KURSY</div>
            <Portfolio className="portfolio-instance" />
            <div className="text-wrapper-7">UKOŃCZONE WYZWANIA MIEJSKIE</div>
            <WyzwanieMiejskie
              className="wyzwanie-miejskie-instance"
              divClassName="wyzwanie-miejskie-5"
              divClassName1="wyzwanie-miejskie-7"
              divClassNameOverride="wyzwanie-miejskie-6"
              frameClassName="wyzwanie-miejskie-3"
              frameClassNameOverride="wyzwanie-miejskie-4"
              overlapGroupClassName="wyzwanie-miejskie-2"
              text="Zestawienie odczytów pogodowych"
              text1={
                "Samorząd potrzebuje twojej pomocy! \n\
                  Twoim zadaniem będzie utworzenie skryptu, łączącego dane z \n\
                  wszystkich punktów pomiaru pogody na obszarze gminy, \n\
                  pogrupowanych tygodniami i przygotowanie analizy na ich \n\
                  podstawie..."
              }
            />
          </div>
          <div className="profil-page-right">
            <Rectangle
              USERNAMEUsernameClassName="rectangle-8-profileinfobox-instance"
              className="design-component-instance-node-5"
              profilepicNude="/img/profilepic-nude.png"
              profilepicNudeClassName="rectangle-8-profileinfobox"
              spanClassName="rectangle-8-profileinfobox-instance"
              text={"Ola Piechnik"}
              text1="10 follower/ 13 following"
            />
            <QuestMap
              className="design-component-instance-node-5"
              iconForward="/img/icon-forward-10-seconds-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
