import React, { HTMLAttributes } from 'react';
export const H3: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-2xl font-bold text-blue-900`;
  return (
    <h3 {...props} className={className} >
      {props.children}
    </h3>
  );
};
