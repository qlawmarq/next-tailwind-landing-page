import React, { HTMLAttributes } from 'react';

export const H1: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-4xl font-bold text-primary-900`;
  return (
    <h1 {...props} className={className}>
      {props.children}
    </h1>
  );
};
