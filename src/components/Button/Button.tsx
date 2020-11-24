import React from 'react';
import './Button.css';

type Props = {
  label: string,
  disabled: boolean,
  clickHandler: () => void,
};

export const Button = ({ label, disabled, clickHandler }: Props) => {
  return (
    <button
      type="button"
      className="card__button"
      disabled={disabled}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};