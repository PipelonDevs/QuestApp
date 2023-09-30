/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

interface Props {
  className: any;
  overlapGroupClassName: any;
  frameClassName: any;
  frameClassNameOverride: any;
  divClassName: any;
  text: string;
  divClassNameOverride: any;
  divClassName1: any;
  text1: string;
}

export const WyzwanieMiejskie = ({
  className,
  overlapGroupClassName,
  frameClassName,
  frameClassNameOverride,
  divClassName,
  text = 'nazwa wyzwania',
  divClassNameOverride,
  divClassName1,
  text1 = 'opis wyzwania miejskiego',
}: Props): JSX.Element => {
  return (
    <div className={`wyzwanie-miejskie ${className}`}>
      <div className={`overlap-group-4 ${overlapGroupClassName}`}>
        <div className={`frame-6 ${frameClassName}`} />
        <div className={`nazwa-wyzwania-wrapper ${frameClassNameOverride}`}>
          <div className={`nazwa-wyzwania ${divClassName}`}>{text}</div>
        </div>
        <div className={`opis-wyzwania-wrapper ${divClassNameOverride}`}>
          <div className={`opis-wyzwania ${divClassName1}`}>{text1}</div>
        </div>
      </div>
    </div>
  );
};

WyzwanieMiejskie.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
