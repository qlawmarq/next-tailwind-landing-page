import React from 'react';
import analyzeData from '../../../public/images/analyze_data.png';
import Image from 'next/image';
import { Card } from '../../atoms/Card';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';

import { Button } from '../../atoms/Button';
import { H1, H2, H3, Paragraph } from '../../atoms/Typography';

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  price: string;
  features: string[];
};

export const Carousel: React.FC = (props) => {
  return (
    <Card className="relative mx-6 block md:flex items-center ">
      <div className="relative h-full w-full overflow-hidden rounded-t-lg md:w-2/5 md:rounded-t-none md:rounded-l-lg">
        <div className="h-48">
          <Image
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={analyzeData}
            alt="Analyze Data"
          />
        </div>
        <div className="absolute inset-0 h-full w-full bg-blue-300 opacity-75"></div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-center fill-current text-white">
          <div
            className="h-full w-full flex items-center justify-center"
          >
            <H1 className="text-white">Missguided</H1>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center rounded-lg md:w-3/5">
        <div className="p-6 md:py-6 md:pr-24 md:pl-16">
          <Paragraph>
            Missguided is a UK-based
            fashion retailer that has nearly doubled in size since last year.
            They integrated Stripe to deliver seamless checkout across mobile
            and web for customers in 100+ countries, all while automatically
            combating fraud.
          </Paragraph>
          <a
            className="mt-3 flex items-baseline text-blue-600 hover:text-blue-900 focus:text-blue-900"
            href=""
          >
            <span>Learn more about our users</span>
            <span className="ml-1 text-xs">&#x279c;</span>
          </a>
        </div>
        <svg
          className="absolute inset-y-0 -ml-12 hidden h-full w-24 fill-current text-white md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      <button className="focus:shadow-outline absolute top-0 left-0 mt-28 -ml-6 h-8 w-8 rounded-full bg-white text-2xl text-blue-600 shadow-md hover:text-blue-400 focus:text-blue-400 focus:outline-none">
        <ArrowLeftIcon />
      </button>
      <button className="focus:shadow-outline absolute top-0 right-0 mt-28 -mr-6 h-8 w-8 rounded-full bg-white text-2xl text-blue-600 shadow-md hover:text-blue-400 focus:text-blue-400 focus:outline-none">
        <ArrowRightIcon />
      </button>
    </Card>
  );
};
