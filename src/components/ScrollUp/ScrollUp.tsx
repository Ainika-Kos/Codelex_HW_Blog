import React from 'react';
import './ScrollUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/Button';

export const ScrollUp = () => {

  const smoothScroolToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Button 
      clickHandler={smoothScroolToTop}
      disabled={false}
      label="Go top"
    />
  );
};