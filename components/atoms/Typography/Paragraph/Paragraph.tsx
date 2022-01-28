import React, { HtmlHTMLAttributes } from 'react';
export const Paragraph: React.FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-lg text-blue-900`;
  return (
    <p {...props} className={className}>
      {props.children}
    </p>
  );
};
