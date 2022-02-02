import React, { HTMLAttributes } from 'react';
export const H4: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  return (
    <h4 className="text-xl text-primary-900" {...props}>
      {props.children}
    </h4>
  );
};
