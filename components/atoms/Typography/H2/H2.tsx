import React, { HTMLAttributes } from 'react';
export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  return (
    <h2 className="text-3xl font-bold text-blue-900" {...props}>
      {props.children}
    </h2>
  );
};
