import React, { useState, HTMLAttributes } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { animated, useSpring } from '@react-spring/web';
import { Card } from '../../atoms/Card';
import { Paragraph } from '../../atoms/Typography';

export type Props = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

export const Accordion: React.FC<Props & HTMLAttributes<HTMLElement>> = ({
  question,
  answer,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    display: isOpen ? 'block' : 'none',
  });

  return (
    <Card {...props}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex cursor-pointer flex-row-reverse "
      >
        <div className="flex-auto">
          <Paragraph>{question}</Paragraph>
        </div>
        <div className="px-2">
          <div className='text-primary-600'>
            {isOpen ? (
              <ChevronDownIcon className="h-6 w-6" />
            ) : (
              <ChevronUpIcon className="h-6 w-6" />
            )}
          </div>
        </div>
      </div>
      <animated.div
        style={styles}
        className="overflow-hidden px-2 pt-2 text-left text-justify"
      >
        <Paragraph>{answer}</Paragraph>
      </animated.div>
    </Card>
  );
};
