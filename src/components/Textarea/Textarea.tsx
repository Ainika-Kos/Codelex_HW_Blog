import React from 'react';
import './Textarea.css';

type Props = {
  value: string,
  placeholder: string,
  onChange: (e: string) => void
};

export const Textarea = ({ value, placeholder, onChange }: Props) => {
  return (
    <textarea
      className="textarea--comment"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};