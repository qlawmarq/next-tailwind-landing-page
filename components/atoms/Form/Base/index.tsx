import React, { InputHTMLAttributes } from 'react';
import { Label, Span } from '../../Typography';
import { UseFormRegisterReturn } from 'react-hook-form';

export type BaseProps = InputHTMLAttributes<HTMLElement> & {
  label?: string;
  error?: string;
  register?: UseFormRegisterReturn;
};

type Component = {
  component: React.FC<InputHTMLAttributes<HTMLElement>>;
};

export const Base: React.FC<BaseProps & Component> = (props) => {
  const className = `${props.className} rounded p-2 text-md border`;
  return (
    <div className="mb-2 flex flex-col">
      {props.label && <Label>{props.label}</Label>}
      <props.component {...props} {...props.register} className={className} />
      {props.error && <Span className="text-red-500">{props.error}</Span>}
    </div>
  );
};
