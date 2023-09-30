import React from 'react';
// import {Button} from '../../components/Button';
import {CourseInput} from '../../components/CourseInput';
import {SideBar} from '../../components/SideBar';
import {Technologychoosebox} from '../../components/Technologychoosebox';
import {Button} from '@mui/material';
import './style.css';
import {useNavigate} from 'react-router-dom';

export const CourseGenerator = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="course-generator">
      <SideBar
        divClassName="side-bar-instance"
        divClassNameOverride="side-bar-instance"
        rectangleClassName="side-bar-instance"
        rectangleClassName1="side-bar-instance"
        rectangleClassNameOverride="side-bar-instance"
      />
      <div className="frame-2">
        <div className="opis-container">
          <div className="text-wrapper-3">OPIS KURSU</div>
          <CourseInput
            className="course-input-instance"
            divClassName="design-component-instance-node"
            text="Kurs przygotowujący do zrobienia aplikacji snake."
          />
          <Button
            // className="button-instance"
            color="primary"
            // label="GENERUJ"
            size="medium"
            // stateProp="enabled"
            variant="contained"
            onClick={() => console.log('GENERUJ')}>
            GENERUJ
          </Button>
        </div>
        <div className="tech-container">
          <div className="text-wrapper-3">REKOMENDOWANE TECHNOLOGIE</div>
          <div className="technology-checkbox">
            <Technologychoosebox text="#python" text1="PYTHON" />
            <Technologychoosebox text="#gamedev #python" text1="PYGAME" />
            <Technologychoosebox text="#aseprite #design" text1="ASEPRITE" />
          </div>
        </div>
      </div>
    </div>
  );
};
