import React from 'react';
import './Input.css';

type Props = {
  value: string,
  placeholder: string,
  type: string,
  onChange: (e: string) => void
};

export const Input = ({ value, placeholder, onChange, type } : Props) => {
  return (
    <div>
      <input
        type={type}
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};