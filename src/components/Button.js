import React from 'react';

export const Button = ({ className, text, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
