import React from 'react';
import {Button} from '../../components/Button';
import {Course} from '../../components/Course';
import {IconTech} from '../../components/IconTech';
import {SearchBar} from '../../components/SearchBar';
import {SideBar} from '../../components/SideBar';
import {WyzwanieMiejskie} from '../../components/WyzwanieMiejskie';
import './style.css';

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <SideBar
          className="side-bar-instance"
          divClassName="design-component-instance-node"
          divClassNameOverride="design-component-instance-node"
          rectangleClassName="design-component-instance-node"
          rectangleClassName1="design-component-instance-node"
          rectangleClassNameOverride="design-component-instance-node"
        />
        <div className="frame-4">
          <div className="frame-5">
            <div className="frame-6">
              <div className="overlap">
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
                    <>
                      Samorząd potrzebuje twojej pomocy! <br />
                      Twoim zadaniem będzie utworzenie skryptu, łączącego dane z
                      wszystkich punktów pomiaru pogody na obszarze gminy,
                      pogrupowanych tygodniami i przygotowanie analizy na ich
                      podstawie...
                    </>
                  }
                />
                <div className="text-wrapper-4">WYZWANIA MIEJSKIE</div>
              </div>
              <Button
                buttonClassName="button-instance"
                className="poprzednie"
                color="primary"
                label="POPRZEDNIE"
                size="medium"
                stateProp="enabled"
                variant="contained"
              />
              <Button
                buttonClassName="button-instance"
                className="poprzednie-2"
                color="primary"
                label="NASTĘPNE"
                size="medium"
                stateProp="enabled"
                variant="contained"
              />
            </div>
            <div className="frame-7">
              <Course
                SHORTDescClassName="course-8"
                SHORTDescWrapperClassName="course-7"
                className="course-instance"
                divClassName="course-3"
                divClassNameOverride="course-4"
                frameClassName="course-2"
                frameClassName1="course-9"
                frameClassNameOverride="course-6"
                iconTechDivClassName="design-component-instance-node-4"
                iconTechDivClassNameOverride="design-component-instance-node-5"
                iconTechIconTechClassName="design-component-instance-node-2"
                iconTechIconTechClassName1="icon-tech-2"
                iconTechIconTechClassName2="icon-tech-3"
                iconTechIconTechClassNameOverride="design-component-instance-node-3"
                overlapGroupClassName="course-5"
                text="Analiza danych"
                text1="#excel #database #tableau"
                text2="Zbierz dane z różnych źródeł (np. Excel, bazy danych) i utwórz interaktywny dashboard do analizy tych danych. To pozwoli na zrozumienie, jak tworzyć wizualizacje danych i prowadzić analizę biznesową."
              />
              <div className="course-10">
                <div className="frame-8">
                  <div className="COURSE-NAME-2">Programowanie gry “Snake”</div>
                  <div className="tags-2">#gamedev #scratch</div>
                </div>
                <div className="overlap-group-3">
                  <div className="div-wrapper">
                    <div className="frame-9">
                      <p className="p">
                        Kurs ma na celu nauczenie podstaw programowania w
                        Scratch poprzez stworzenie klasycznej gry “Snake”
                      </p>
                    </div>
                  </div>
                  <div className="frame-10">
                    <IconTech className="design-component-instance-node-2" />
                    <IconTech className="design-component-instance-node-3" />
                    <IconTech className="design-component-instance-node-4" />
                    <IconTech className="design-component-instance-node-5" />
                    <div className="icon-tech-3" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-5">ROZPOCZĘTE SZKOLENIA</div>
              <div className="course-11">
                <div className="frame-8">
                  <div className="COURSE-NAME-2">Przeliczanie Jednostek</div>
                  <div className="tags-2">#python #tkinter</div>
                </div>
                <div className="overlap-group-3">
                  <div className="div-wrapper">
                    <div className="frame-9">
                      <p className="p">
                        Utwórz prostą aplikację, która umożliwia użytkownikom
                        przeliczanie jednostek miar, takich jak temperatura,
                        długość czy masa. To pozwoli na zrozumienie podstaw
                        programowania oraz tworzenia prostych interfejsów
                        użytkownika.
                      </p>
                    </div>
                  </div>
                  <div className="frame-10">
                    <IconTech className="design-component-instance-node-2" />
                    <IconTech className="design-component-instance-node-3" />
                    <IconTech className="design-component-instance-node-4" />
                    <IconTech className="design-component-instance-node-5" />
                    <IconTech className="icon-tech-2" />
                    <div className="icon-tech-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-6">WSZYSTKIE SZKOLENIA</div>
            <SearchBar />
            <div className="course-12">
              <div className="frame-8">
                <div className="COURSE-NAME-2">Internetowe Portfolio</div>
                <div className="tags-2">#html #css #wordpress</div>
              </div>
              <div className="overlap-group-3">
                <div className="div-wrapper">
                  <div className="frame-9">
                    <p className="p">
                      Stwórz własną stronę internetową portfolio, na której
                      będziesz prezentować swoje projekty, umiejętności i
                      osiągnięcia. Możesz wykorzystać narzędzia typu WordPress
                      lub strony typu website builder, które nie wymagają
                      głębokiej wiedzy programistycznej.
                    </p>
                  </div>
                </div>
                <div className="frame-10">
                  <IconTech className="design-component-instance-node-2" />
                  <IconTech className="design-component-instance-node-3" />
                  <IconTech className="design-component-instance-node-4" />
                  <div className="design-component-instance-node-5" />
                  <div className="icon-tech-2" />
                  <div className="icon-tech-3" />
                </div>
              </div>
            </div>
            <Course
              SHORTDescClassName="course-8"
              SHORTDescWrapperClassName="course-7"
              className="course-13"
              divClassName="course-3"
              divClassNameOverride="course-4"
              frameClassName="course-2"
              frameClassName1="course-9"
              frameClassNameOverride="course-6"
              iconTechDivClassName="design-component-instance-node-4"
              iconTechDivClassNameOverride="design-component-instance-node-5"
              iconTechIconTechClassName="design-component-instance-node-2"
              iconTechIconTechClassName1="icon-tech-2"
              iconTechIconTechClassName2="icon-tech-3"
              iconTechIconTechClassNameOverride="design-component-instance-node-3"
              overlapGroupClassName="course-5"
              text="Zarządzanie zadaniami"
              text1="#bubble #adalo #outsystems"
              text2="Stwórz prostą aplikację do zarządzania zadaniami, która pozwala użytkownikom dodawać, edytować i usuwać zadania. Możesz użyć narzędzi takich jak Bubble, Adalo lub OutSystems."
            />
            <div className="course-12">
              <div className="frame-8">
                <div className="COURSE-NAME-2">Kreator formularzy</div>
                <div className="tags-2">#typeform #jotform</div>
              </div>
              <div className="overlap-group-3">
                <div className="div-wrapper">
                  <div className="frame-9">
                    <p className="p">
                      Zbuduj narzędzie, które pozwoli użytkownikom tworzyć
                      niestandardowe formularze online bez konieczności
                      kodowania. Wykorzystaj platformy No Code, takie jak
                      JotForm lub Typeform.
                    </p>
                  </div>
                </div>
                <div className="frame-10">
                  <IconTech className="design-component-instance-node-2" />
                  <IconTech className="design-component-instance-node-3" />
                  <IconTech className="design-component-instance-node-4" />
                  <IconTech className="design-component-instance-node-5" />
                  <IconTech className="icon-tech-2" />
                  <div className="icon-tech-3" />
                </div>
              </div>
            </div>
            <div className="course-12">
              <div className="frame-8">
                <div className="COURSE-NAME-3">Podstawy automacji</div>
                <div className="tags-2">#robotframework #selenium</div>
              </div>
              <div className="overlap-group-3">
                <div className="div-wrapper">
                  <div className="frame-9">
                    <p className="p">
                      W tym zadaniu będziemy tworzyć bardzo podstawowego bota do
                      czatu przy użyciu Robot Framework. Nasz bot będzie w
                      stanie odpowiedzieć na dwie konkretne wiadomości:
                      &#34;Cześć&#34; i &#34;Jak się masz?&#34;. Bot ma udzielić
                      odpowiedzi w zależności od otrzymanej wiadomości.
                    </p>
                  </div>
                </div>
                <div className="frame-10">
                  <IconTech className="design-component-instance-node-2" />
                  <IconTech className="design-component-instance-node-3" />
                  <IconTech className="design-component-instance-node-4" />
                  <IconTech className="design-component-instance-node-5" />
                  <div className="icon-tech-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
