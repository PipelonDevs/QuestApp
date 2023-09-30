/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Course } from "../Course";
import { IconTech } from "../IconTech";
import "./style.css";

interface Props {
  className: any;
}

export const Portfolio = ({ className }: Props): JSX.Element => {
  return (
    <div className={`portfolio ${className}`}>
      <div className="course-2">
        <div className="frame-3">
          <div className="text-wrapper">Programowanie gry “Snake”</div>
          <div className="tags-2">#gamedev #scratch</div>
        </div>
        <div className="overlap-group-3">
          <div className="div-wrapper">
            <div className="frame-4">
              <p className="p">
                Kurs ma na celu nauczenie podstaw programowania w Scratch poprzez stworzenie klasycznej gry “Snake”
              </p>
            </div>
          </div>
          <div className="frame-5">
            <IconTech className="design-component-instance-node" />
            <IconTech className="design-component-instance-node-2" />
            <IconTech className="design-component-instance-node-3" />
            <IconTech className="design-component-instance-node-4" />
            <div className="course-instance" />
          </div>
        </div>
      </div>
      <Course
        SHORTDescClassName="course-10"
        SHORTDescWrapperClassName="course-9"
        className="course-3"
        divClassName="course-5"
        divClassNameOverride="course-6"
        frameClassName="course-4"
        frameClassName1="course-11"
        frameClassNameOverride="course-8"
        iconTechDivClassName="design-component-instance-node-3"
        iconTechDivClassNameOverride="design-component-instance-node-4"
        iconTechIconTechClassName="design-component-instance-node"
        iconTechIconTechClassName1="course-12"
        iconTechIconTechClassName2="course-instance"
        iconTechIconTechClassNameOverride="design-component-instance-node-2"
        overlapGroupClassName="course-7"
        text="Podstawy automacji"
        text1="#robotframework #selenium"
        text2="W tym zadaniu będziemy tworzyć bardzo podstawowego bota do czatu przy użyciu Robot Framework. Nasz bot będzie w stanie odpowiedzieć na dwie konkretne wiadomości: &#34;Cześć&#34; i &#34;Jak się masz?&#34;. Bot ma udzielić odpowiedzi w zależności od otrzymanej wiadomości."
      />
    </div>
  );
};
