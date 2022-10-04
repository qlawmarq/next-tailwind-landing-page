import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Base, BaseProps } from '../Base';

const Component: React.FC<
  InputHTMLAttributes<HTMLTextAreaElement> & BaseProps
> = forwardRef((props, ref) => {
  return (
    <textarea {...props} {...props.register} {...ref}>
      {props.children}
    </textarea>
  );
});
Component.displayName = 'TextareaBaseComponent';

export const Textarea: React.FC<BaseProps> = forwardRef((props, ref) => {
  return <Base component={Component} {...props} {...ref} />;
});
Textarea.displayName = 'Textarea';
