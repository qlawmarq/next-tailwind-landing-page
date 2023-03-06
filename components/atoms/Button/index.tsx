import React, { ButtonHTMLAttributes } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className = `${props.className} rounded-xl bg-primary-900 bg-gradient-to-r from-primary-600 py-3 px-8 text-white hover:bg-primary-300 hover:from-primary-500 transition ease-in-out`;
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
