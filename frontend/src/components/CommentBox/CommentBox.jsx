/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';
import {Button} from '../Button';
import './style.css';

export const CommentBox = ({
                               // eslint-disable-next-line react/prop-types
  className,
  text = 'Tu jest komentarz jakis, a ogolnie to rozwiazanie wrzucilem do githuba (link)',
                               // eslint-disable-next-line react/prop-types
  buttonSizeLargeColorClassName,
}) => {
  return (
    <div className={`comment-box ${className}`}>
      <p className="tu-jest-komentarz">{text}</p>
      <Button
        buttonClassName="button-instance"
        className={buttonSizeLargeColorClassName}
        color="primary"
        label="ZATWIERDZ"
        size="medium"
        stateProp="enabled"
        variant="contained"
      />
    </div>
  );
};

CommentBox.propTypes = {
  text: PropTypes.string,
};
