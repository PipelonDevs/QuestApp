import React from 'react';
import {CourseInput} from '../../components/CourseInput';
import {GeneratedQuest} from '../../components/GeneratedQuest';
import {SideBar} from '../../components/SideBar';
import './style.css';

export const CourseGenerated = () => {
  return (
    <div className="course-generated">
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
          <div className="frame" />
          <div className="frame-2">
            <div className="opis-container">
              <div className="text-wrapper">OPIS KURSU</div>
              <CourseInput
                className="course-input-instance"
                divClassName="course-input-2"
                text="Kurs przygotowujący do zrobienia aplikacji snake."
              />
            </div>
            <div className="tech-container">
              <div className="text-wrapper">EDYCJA QUESTA</div>
              <CourseInput
                className="course-input-instance"
                divClassName="course-input-3"
                text="Zainstaluj niezbędne biblioteki, takie jak PyGame, które będą używane do tworzenia aplikacji Snake w języku Python."
              />
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-3">
            <GeneratedQuest text="Zainstaluj niezbędne biblioteki, takie jak PyGame, które będą używane do tworzenia aplikacji Snake w języku Python." />
            <GeneratedQuest
              text="Zdefiniuj planszę gry, określając jej szerokość, wysokość i rozmiar pojedynczego elementu."
              text1="Q2"
            />
            <GeneratedQuest
              line="/img/line-5-1.svg"
              text="Utwórz obiekt węża, który będzie składał się z pojedynczych segmentów. Początkowo będzie składał się z jednego segmentu i będzie umieszczony w środku planszy."
              text1="Q3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
