import React, { HTMLAttributes } from 'react';
export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-3xl font-bold text-blue-900`;
  return (
    <h2 {...props} className={className} >
      {props.children}
    </h2>
  );
};
