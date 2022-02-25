import React, { HtmlHTMLAttributes } from 'react';
export const Label: React.FC<HtmlHTMLAttributes<HTMLLabelElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-sm text-primary-800`;
  return (
    <label {...props} className={className}>
      {props.children}
    </label>
  );
};
