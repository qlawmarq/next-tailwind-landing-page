import React, { HTMLAttributes } from 'react';
export const H5: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-lg font-medium text-primary-900`;
  return (
    <h5 {...props} className={className}>
      {props.children}
    </h5>
  );
};
