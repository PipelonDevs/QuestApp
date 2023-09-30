import React from 'react';
import {CommentBox} from '../../components/CommentBox';
import {PropertyDefault} from '../../components/PropertyDefault';
import {QuestInfoBox} from '../../components/QuestInfoBox';
import {SideBar} from '../../components/SideBar';
import './style.css';

export const CoursePage = () => {
  return (
    <div className="course-page">
      <div className="div-4">
        <SideBar
          className="side-bar-instance"
          divClassName="design-component-instance-node"
          divClassNameOverride="design-component-instance-node"
          rectangleClassName="design-component-instance-node"
          rectangleClassName1="design-component-instance-node"
          rectangleClassNameOverride="design-component-instance-node"
        />
        <QuestInfoBox
          className="quest-info-box-instance"
          divClassName="quest-info-box-2"
          questDescClassName="quest-info-box-3"
          text="Etap 1: Wprowadzenie do Podstaw Programowania"
          text1="Na tym etapie uczestnicy poznają podstawy programowania oraz narzędzia niezbędne do stworzenia gry. Dowiedzą się, jakie są podstawowe koncepcje związane z kodowaniem."
        />
        <PropertyDefault
          className="quest-map"
          img="/img/line-2.svg"
          line="/img/line-1.svg"
        />
        <div className="course-name">Programowanie gry “Snake”</div>
        <CommentBox
          buttonSizeLargeColorClassName="comment-box-2"
          className="comment-box-instance"
          text={
            <>
              rozwiązanie dostępne pod:
              <br />
              https://github.com/torvalds/linux.git
            </>
          }
        />
      </div>
    </div>
  );
};
