import React, { HtmlHTMLAttributes } from 'react';
export const Span: React.FC<HtmlHTMLAttributes<HTMLSpanElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-sm text-gray-500`;
  return (
    <span {...props} className={className}>
      {props.children}
    </span>
  );
};
