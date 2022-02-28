import React, { forwardRef, HTMLAttributes } from 'react';
import { Base, BaseProps } from '../Base';

const Component: React.FC<HTMLAttributes<HTMLInputElement> & BaseProps> =
  forwardRef((props, ref) => {
    return (
      <input {...props} {...props.register} {...ref}>
        {props.children}
      </input>
    );
  });

export const Input: React.FC<BaseProps> = forwardRef((props, ref) => {
  return <Base component={Component} {...props} {...ref} />;
});
