import React from 'react';
import { Card } from '../../atoms/Card';

export const CarouselItem: React.FC = ({ children }) => {
  return (
    <Card className="relative mx-6 block h-56 items-center md:flex">
      <div className="relative h-full w-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
        <div className="h-44">
          {/* <Image
            className="absolute inset-0 h-44 w-20"
            src={analyzeData}
            alt="Analyze Data"
          /> */}
          <div className="absolute inset-0 h-full w-full bg-primary-300 opacity-75"></div>
          <div className="absolute inset-0 flex h-full w-full items-center justify-center fill-current text-white">
            <div className="flex h-full w-full items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
