import React from 'react';
import { Card } from '../../atoms/Card';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Button } from '../../atoms/Button';
import { H2, H3, Paragraph } from '../../atoms/Typography';

export type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  price: string;
  features: string[];
};

export const PriceCard: React.FC<Props> = (props) => {
  return (
    <Card className="flex w-full flex-col space-y-6 ">
      <div className="flex flex-col space-y-2 border-b pb-6">
        <H2 className="text-2xl">{props.title}</H2>
        <Paragraph className="text-sm text-gray-400">
          {props.description}
        </Paragraph>
      </div>
      <div className="flex flex-row items-center">
        <H3 className="font-medium tracking-tight">{props.price}</H3>
        <Paragraph className="ml-2 text-gray-400">/month</Paragraph>
      </div>
      <ul className="flex-1 space-y-4">
        {props.features.map((feature, idx) => {
          return (
            <li key={idx} className="flex items-start">
              <div>
                <CheckCircleIcon className="h-6 w-6 text-green-300" />
              </div>
              <Paragraph className="ml-3 font-medium">{feature}</Paragraph>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col pt-4">
        <Button className="w-full">Start</Button>
      </div>
    </Card>
  );
};
