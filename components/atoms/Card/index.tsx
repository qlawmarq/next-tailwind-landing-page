import React, { HTMLAttributes } from 'react';

export const Card: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
  const className = `${props.className} rounded-lg bg-white shadow-md p-6`;
  return (
    <section {...props} className={className}>
      {props.children}
    </section>
  );
};
