import React, { ButtonHTMLAttributes } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className = `${props.className} rounded-full bg-primary-700 py-2 px-12 text-lg font-semibold text-white hover:bg-primary-400`;
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
