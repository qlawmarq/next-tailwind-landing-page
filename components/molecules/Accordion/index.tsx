import React, { useState, HTMLAttributes } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { animated, useSpring } from '@react-spring/web';
import { Card } from '../../atoms/Card';
import { Paragraph} from '../../atoms/Typography';

type Props = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

export const Accordion: React.FC<Props & HTMLAttributes<HTMLElement>> = ({
  question,
  answer,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Paragraph>{question}</Paragraph></div>
        <div className="px-2">
          <div>
            {isOpen ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronUpIcon className="h-5 w-5" />
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
