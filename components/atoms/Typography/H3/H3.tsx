import React, { HTMLAttributes } from 'react';
export const H3: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  return (
    <h3 className="text-2xl text-blue-900" {...props}>
      {props.children}
    </h3>
  );
};
