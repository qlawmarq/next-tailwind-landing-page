import React, { HtmlHTMLAttributes } from 'react';
export const Paragraph: React.FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-base text-blue-900`;
  return (
    <p {...props} className={className}>
      {props.children}
    </p>
  );
};
