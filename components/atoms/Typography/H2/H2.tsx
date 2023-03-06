import React, { HTMLAttributes } from 'react';
export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-3xl text-primary-900 font-nunito font-light`;
  return (
    <h2 {...props} className={className}>
      {props.children}
    </h2>
  );
};
