import React, { forwardRef, HTMLAttributes } from 'react';
import { Base, BaseProps } from '../Base';

const Component: React.FC<HTMLAttributes<HTMLTextAreaElement> & BaseProps> =
  forwardRef((props, ref) => {
    return (
      <textarea {...props} {...props.register} {...ref}>
        {props.children}
      </textarea>
    );
  });

export const Textarea: React.FC<BaseProps> = forwardRef((props, ref) => {
  return <Base component={Component} {...props} {...ref} />;
});
