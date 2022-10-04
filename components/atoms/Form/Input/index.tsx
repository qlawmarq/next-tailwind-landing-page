import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Base, BaseProps } from '../Base';

const Component: React.FC<InputHTMLAttributes<HTMLInputElement> & BaseProps> =
  forwardRef((props, ref) => {
    return (
      <input {...props} {...props.register} {...ref}>
        {props.children}
      </input>
    );
  });
Component.displayName = 'InputBaseComponent';

export const Input: React.FC<BaseProps> = forwardRef((props, ref) => {
  return <Base component={Component} {...props} {...ref} />;
});
Input.displayName = 'Input';
