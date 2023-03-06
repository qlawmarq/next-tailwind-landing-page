import React, { HTMLAttributes } from 'react';

export const H1: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-4xl text-primary-900 font-nunito font-light`;
  return (
    <h1 {...props} className={className}>
      {props.children}
    </h1>
  );
};
