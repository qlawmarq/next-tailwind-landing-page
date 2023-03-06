import React, { HTMLAttributes } from 'react';
export const H5: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-lg text-primary-900 font-nunito`;
  return (
    <h5 {...props} className={className}>
      {props.children}
    </h5>
  );
};
