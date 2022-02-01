import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';
import analyzeData from '../../../public/images/analyze_data.png';
import Image from 'next/image';
import { Card } from '../../atoms/Card';
import { H1, H2, H3, Paragraph } from '../../atoms/Typography';

export const CarouselItem: React.FC = () => {
  return (
    <Card className="relative mx-6 block items-center md:flex">
      <div className="relative h-full w-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
        <div className="h-44">
          <Image
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={analyzeData}
            alt="Analyze Data"
          />
        </div>
        <div className="absolute inset-0 h-full w-full bg-blue-300 opacity-75"></div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-center fill-current text-white">
          <div className="flex h-full w-full items-center justify-center">
            <H1 className="text-white">Missguided</H1>
          </div>
        </div>
      </div>
    </Card>
  );
};
