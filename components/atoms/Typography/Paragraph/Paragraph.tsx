import React, { HtmlHTMLAttributes } from 'react';
export const Paragraph: React.FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => {
  const className = `${props.className} text-base text-gray-500`;
  return (
    <p {...props} className={className}>
      {props.children}
    </p>
  );
};
