import { H1, H5, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { Card } from '../../atoms/Card';
import { Accordion, Props as AccordionProps } from '../../molecules/Accordion';

type Props = {
  title: string;
  description: string;
  qas: AccordionProps[];
};

export const FAQ: React.FC<Props> = ({ title, description, qas }) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="col-span-1 flex w-full flex-col">
          <H1>{title}</H1>
          <H5 className="my-2">{description}</H5>
        </div>
        <div className="col-span-3 w-full">
          {qas.map((qa, idx) => {
            return (
              <Accordion
                key={idx}
                className="mb-2"
                question={qa.question}
                answer={qa.answer}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
