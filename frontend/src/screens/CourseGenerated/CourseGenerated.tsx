import React from "react";
import {CourseInput} from "../../components/CourseInput";
import {GeneratedQuest} from "../../components/GeneratedQuest";
import {SideBar} from "../../components/SideBar";
import "./style.css";
import { useLocation } from 'react-router-dom';

export const CourseGenerated = (): JSX.Element => {
  const quests: string[] = useLocation().state.response.response;
  console.log("Course gen:", quests);


  return (
    <div className="course-generated">
      {/*<div className="div-2">*/}
        <SideBar
          // className="side-bar-instance"
          divClassName="design-component-instance-node"
          divClassNameOverride="design-component-instance-node"
          rectangleClassName="design-component-instance-node"
          rectangleClassName1="design-component-instance-node"
          rectangleClassNameOverride="design-component-instance-node"
        />
        <div className="overlap-group">
          {/*<div className="frame" />*/}
          {/*<div className="frame-2">*/}
            <div className="opis-container">
              <div className="text-wrapper">OPIS KURSU</div>
              <CourseInput
                className="course-input-instance"
                divClassName="course-input-2"
                text="Kurs przygotowujący do zrobienia aplikacji snake." // opis kursu
              />
            </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-3">
            <ShowQuests quests={quests} />
          </div>
        </div>
      </div>
    // </div>
  );
};


function ShowQuests({ quests }: { quests: string[] }) {
  const questsList = quests.map((quest, index) => {
    return (
      <GeneratedQuest
        text={quest}
        key={index}
        text1="" // TODO: add quest number or not?
      />
    );
  });
  return <>{questsList}</>;
}

